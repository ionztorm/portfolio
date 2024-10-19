type THomepageLayoutProps = {
  children: React.ReactNode;
};
export default function HomepageLayout({ children }: THomepageLayoutProps) {
  return <div className="bg-slate-900 text-slate-200">{children}</div>;
}
