type TMainProps = {
  children: React.ReactNode;
};
export function Main({ children }: TMainProps) {
  return <main className="flex flex-col gap-10">{children}</main>;
}
