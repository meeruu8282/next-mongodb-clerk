import Image from "next/image";
import ContactComponentInput from "./contactComponentInput";
import ContactComponentTextarea from "./contactComponentTextarea";

export default function ContactComponentForm(){

return(
<form>
<ContactComponentInput
    label={"Full Name*"}
    icon={"/profileInverted.svg"}
    placeholder={"Revalina Putri"}
    width={20}
/>
<ContactComponentInput
    label={"Email"}
    icon={"/email.svg"}
    placeholder={"revalinaputri123@gmail.com"}
    width={22}
/>
<ContactComponentInput
    label={"Subject"}
    icon={"/subject.svg"}
    placeholder={"Write your subject here"}
    width={16}
/>
<ContactComponentTextarea
    label={"Message"}
    icon={"/chatbubbleiconGrey.svg"}
    placeholder={"Tell us a little about carelyo..."}
/>
<div className="flex items-start mb-6">
    <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="
        peer
        w-4
        h-4
        "
        required />
        <Image
        src={"/checkmarkContactForm.svg"}
        alt="green checkmark icon"
        width={24}
        height={24}
        className="
            absolute
            w-4 h-4
            hidden peer-checked:block
            pointer-events-none
            "
        />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium">I agree with the <a href="#" className="text-sage hover:underline">Terms of use and Privacy Policy</a>.</label>
</div>
<button className="carelyoButton rounded-md w-full">Send Message</button>
</form>

)}