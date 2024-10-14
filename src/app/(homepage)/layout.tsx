import { Navbar } from "@/components/layout/navigation";

type THomepageLayoutProps = {
  children: React.ReactNode;
};
export default function HomepageLayout({ children }: THomepageLayoutProps) {
  return <>{children}</>;
}
