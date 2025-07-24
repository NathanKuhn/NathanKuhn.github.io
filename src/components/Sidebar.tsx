import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-950/95 border-r border-blue-900/60 p-8 items-center justify-start">
      <div className="mb-8 flex flex-col items-center">
        <span className="text-white text-lg font-semibold">Nathan Kuhn</span>
        <span className="text-gray-400 text-sm">That&apos;s me</span>
      </div>
      <nav className="w-full">
        <ul className="flex flex-col gap-4">
          <li>
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
