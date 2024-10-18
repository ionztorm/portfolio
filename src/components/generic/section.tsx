import { cn } from "@/utils/cn";
import { SectionHeading } from "./section-heading";
import { Wrapper } from "./wrapper";
import type { TSectionProps } from "@/lib/types";

export function Section({ children, id, heading, className }: TSectionProps) {
  return (
    <section id={id} className={cn("py-24 px-4", className)}>
      <Wrapper className="grid gap-4">
        {!!heading && <SectionHeading>{heading}</SectionHeading>}
        {children}
      </Wrapper>
    </section>
  );
}
