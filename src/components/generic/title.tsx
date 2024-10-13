type TTitle = {
  children: React.ReactNode;
};
export function Title({ children }: TTitle) {
  return <h1 className="text-5xl font-bold text-slate-700">{children}</h1>;
}
