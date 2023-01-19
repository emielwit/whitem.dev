import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] fixed h-[1px] w-full bottom-14 sm:top-0 sm:h-1" />
      <nav className=" w-full fixed h-14 border-b border-zinc-700 bg-zinc-900 bottom-0 sm:sticky sm:top-1">
        <div className="h-full flex items-center justify-center gap-2 sm:mx-4 sm:justify-end">
          <Link
            className="text-white px-4 py-1 rounded hover:bg-zinc-700 bg-zinc-700"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white px-4 py-1 rounded hover:bg-zinc-700"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-white px-4 py-1 rounded hover:bg-zinc-700"
            href="/"
          >
            Tools
          </Link>
          <Link
            className="text-white px-4 py-1 rounded hover:bg-zinc-700"
            href="/"
          >
            Projects
          </Link>
        </div>
      </nav>
    </>
  );
}
