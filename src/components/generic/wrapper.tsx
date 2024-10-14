type TWrapper = {
  children: React.ReactNode;
};

export function Wrapper({ children }: TWrapper) {
  return <div className="max-w-[48rem] mx-auto">{children}</div>;
}
