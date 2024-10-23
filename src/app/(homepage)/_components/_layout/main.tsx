import type { TMainProps } from "@/lib/types";

export function Main({ children }: TMainProps) {
  return (
    <main className="px-4 mb-10 sm:mb-14 xl:mb-20 mx-auto max-w-5xl w-full">
      {children}
    </main>
  );
}
