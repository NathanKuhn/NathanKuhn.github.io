import Link from "next/link";

export default function Sidebar() {
  const classes = [
    "flex",
    "flex-col",
    "w-64",
    "p-8",
    "bg-gray-950/90",
    "border-r",
    "border-blue-900/60",
    "text-blue-400",
    "font-medium",
  ].join(" ");

  return (
    <aside className={classes}>
      <div className="mb-8 flex flex-col items-center">
        <span className="text-white text-lg font-semibold">Nathan Kuhn</span>
        <span className="text-gray-400 text-sm">That&apos;s me</span>
      </div>
      <nav>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-blue-300">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
