import type { TSectionHeadingProps } from "@/lib/types";

export function SectionHeading({ children }: TSectionHeadingProps) {
  return (
    <header>
      <h2 className="text-lg text-center lg:text-left font-semibold uppercase">
        {children}
      </h2>
    </header>
  );
}
