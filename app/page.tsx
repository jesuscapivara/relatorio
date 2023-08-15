import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="title-container">
            <h1>Welcome to</h1>
          </div>
          <div className="logo-container">
            <h1 className="origins-logo">ORIGINS</h1>
          </div>

        <div className="flex space-x-3">
          <Link
            href="/protected"
            prefetch={false} // workaround until https://github.com/vercel/vercel/pull/8978 is deployed
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Login
          </Link>
          <p className="text-white">·</p>
          <a
            href="https://discord.gg/9KrSDsAB4e"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            Our Discord
          </a>

        </div>
      </div>
    </div>
  );
}
