type TSectionProps = {
  children: React.ReactNode;
};
export function Section({ children }: TSectionProps) {
  return <section className="max-w-3xl">{children}</section>;
}
