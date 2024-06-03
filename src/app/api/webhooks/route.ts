import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from "@clerk/nextjs";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { createUser } from "@/lib/actions/user.action";

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
if (!WEBHOOK_SECRET) {
  throw new Error("Please add WEBHOOK_SECRET to .env or .env.local");
}

export async function POST(req: NextRequest) {
  const { method } = req;
  if (method !== 'POST') {
    return new NextResponse(`Method ${method} not allowed`, { status: 405, headers: { 'Allow': 'POST' } });
  }

  const headerPayload = req.headers;
  const svix_id = Array.isArray(headerPayload.get("svix-id")) ? headerPayload.get("svix-id")[0] : headerPayload.get("svix-id");
  const svix_timestamp = Array.isArray(headerPayload.get("svix-timestamp")) ? headerPayload.get("svix-timestamp")[0] : headerPayload.get("svix-timestamp");
  const svix_signature = Array.isArray(headerPayload.get("svix-signature")) ? headerPayload.get("svix-signature")[0] : headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature || typeof svix_id !== 'string' || typeof svix_timestamp !== 'string' || typeof svix_signature !== 'string') {
    return new NextResponse("Error occurred -- invalid svix headers", { status: 400 });
  }

  const body = await req.text();
  console.log("Received webhook payload:", body);
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("Verified webhook event:", evt);
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error occurred during verification", { status: 400 });
  }

  const processEvent = async () => {
    const { id } = evt.data;
    const eventType = evt.type;

    if (eventType === "user.created") {
      const { id, email_addresses, image_url, first_name, last_name, username } = evt.data;

      const user = {
        clerkId: id,
        email: email_addresses[0].email_address,
        username: username!,
        firstName: first_name,
        lastName: last_name,
        photo: image_url,
      };

      console.log("Creating user with data:", user);

      try {
        const newUser = await createUser(user);
        console.log("New user created:", newUser);

        if (newUser) {
          await clerkClient.users.updateUserMetadata(id, {
            publicMetadata: {
              userId: newUser._id,
            },
          });
          console.log("User metadata updated in Clerk");
        }

        return new NextResponse(JSON.stringify({ message: "New user created", user: newUser }), { status: 201 });
      } catch (error) {
        console.error("Error in user creation process:", error);
        return new NextResponse("Error occurred during user creation", { status: 500 });
      }
    }

    console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
    return new NextResponse("Webhook processed", { status: 200 });
  };

  return processEvent();
}
