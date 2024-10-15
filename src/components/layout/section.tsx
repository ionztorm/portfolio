type TSectionProps = {
  children: React.ReactNode;
  id: string;
};
export function Section({ children, id }: TSectionProps) {
  return (
    <section id={id} className="max-w-3xl">
      {children}
    </section>
  );
}
