type THomepageLayoutProps = {
  children: React.ReactNode;
};
export default function HomepageLayout({ children }: THomepageLayoutProps) {
  return <div className="bg-blue-950 text-white">{children}</div>;
}
