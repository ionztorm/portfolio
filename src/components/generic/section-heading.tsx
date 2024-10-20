import type { TSectionHeadingProps } from "@/lib/types";

export function SectionHeading({ children }: TSectionHeadingProps) {
  return (
    <header>
      <h2 className="mb-8 text-2xl sm:text-3xl font-semibold uppercase">
        {children}
      </h2>
    </header>
  );
}
