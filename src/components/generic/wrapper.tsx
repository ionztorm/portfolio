import { cn } from "@/utils/cn";

type TWrapper = {
  children: React.ReactNode;
  className?: string;
};

export function Wrapper({ children, className }: TWrapper) {
  return (
    <div className={cn("max-w-[48rem] mx-auto", className)}>{children}</div>
  );
}
