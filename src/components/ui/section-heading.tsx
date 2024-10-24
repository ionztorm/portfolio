import type { TChildrenProps } from "@/lib/types";

export function SectionHeading({ children }: TChildrenProps) {
  return (
    <header>
      <h2 className="mb-8 text-xl sm:text-2xl font-bold text-center sm:text-left ">
        {children}
      </h2>
    </header>
  );
}
