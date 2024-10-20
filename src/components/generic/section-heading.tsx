import type { TSectionHeadingProps } from "@/lib/types";

export function SectionHeading({ children }: TSectionHeadingProps) {
  return (
    <header>
      <h2 className="mb-8 text-3xl sm:text-4xl font-semibold">{children}</h2>
    </header>
  );
}
