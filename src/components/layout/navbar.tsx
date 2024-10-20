import { useViweport } from "@/hooks/useViewport";
import { useState } from "react";
import type { TPaths } from "@/lib/types";
import { makeNavList } from "@/utils/makeNavList";
import { Wrapper } from "../ui/wrapper";
import { BurgerButton } from "../ui/burger-button";

type TNavbarProps = {
  children: React.ReactNode;
  paths: TPaths;
};

export function Navbar({ paths, children }: TNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useViweport("sm");

  const navListLG = makeNavList(paths, "lg");
  const navListSM = makeNavList(paths, "sm");

  return (
    <nav className="relative px-4 py-5 bg-slate-50 lg:sticky lg:top-0 lg:z-10 mb-10 sm:mb-14 xl:mb-20">
      <Wrapper>
        <div className="flex items-center justify-between text-xl">
          {children}

          {/* md+ menu */}
          {!isMobile && (
            <ul className="hidden sm:flex sm:gap-5 md:gap-12 lg:gap-20 ">
              {navListLG}
            </ul>
          )}

          {/* burger button */}
          {isMobile && <BurgerButton onClick={setIsOpen} isOpen={isOpen} />}
        </div>
        {/* mobile menu */}
        {isMobile && isOpen && (
          <ul className="sm:hidden absolute w-full mt-4 flex flex-col items-center gap-8 rounded-sm shadow-lg p-5 z-10 bg-white">
            {navListSM}
          </ul>
        )}
      </Wrapper>
    </nav>
  );
}
