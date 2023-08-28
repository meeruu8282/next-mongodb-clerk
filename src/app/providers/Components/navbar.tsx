import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex space-x-4">
      <Link href="/" className="text-black text-2xl">
        Home
      </Link>
      <Link href="providers/howItWorks" className="text-black text-2xl">
        howitwork
      </Link>
      <Link href="/platforms" className="text-black  text-2xl">
        Platforms
      </Link>
      <Link href="/prising" className="text-black text-2xl">
        Prising
      </Link>
      <Link href="/blog" className="text-black  text-2xl">
        Blog
      </Link>
      <Link href="/help" className="text-black  text-2xl">
        Help
      </Link>
      <button className=" getCareButton">Get Care</button>
    </div>
  );
}
