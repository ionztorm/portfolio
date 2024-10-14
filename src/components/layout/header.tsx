import { Wrapper } from "../generic/wrapper";
import { Navbar } from "./navigation";

export function Header() {
  return (
    <Wrapper>
      <header className="flex flex-col">
        <Navbar />
        <div className="w-full aspect-square border border-dashed rounded-md flex items-center justify-center">
          I'm a photo
        </div>
      </header>
    </Wrapper>
  );
}
