import { Navbar } from "./navigation";

export function Header() {
  return (
    <header className="flex flex-col">
      <Navbar />
      <div className="w-full aspect-video border border-dashed rounded-md flex items-center justify-center shadow-md overflow-hidden">
        I'm a photo
      </div>
    </header>
  );
}
