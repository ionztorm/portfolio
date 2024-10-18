import type { TSectionHeadingProps } from "@/lib/types";

export function SectionHeading({ children }: TSectionHeadingProps) {
  return (
    <header>
      <h2 className="text-2xl text-center lg:text-left sm:text-4xl font-bold text-slate-800 mb-10">
        {children}
      </h2>
    </header>
  );
}
