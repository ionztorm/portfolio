type TSectionHeadingProps = {
  children: React.ReactNode;
};
export function SectionHeading({ children }: TSectionHeadingProps) {
  return <h2 className="text-3xl font-bold text-slate-800">{children}</h2>;
}
