import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <ul className="flex flex-col items-end gap-3 mx-5 pt-5 md:flex-row md:justify-end">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
