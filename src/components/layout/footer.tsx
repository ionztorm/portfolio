import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="text-xs flex justify-between items-center py-4 px-4 mt-10 bg-[#6737B9] text-slate-50">
      <Container className="flex justify-between items-center py-4">
        <p className="w-1/2">&copy; Leon Lonsdale 2024</p>
        <p className="text-right w-1/2">
          Built with ♥️ using <strong>NextJS</strong>,{" "}
          <strong>TypeScript</strong> and <strong>Tailwind</strong>, and Powered
          by <strong>Vercel</strong>
        </p>
      </Container>
    </footer>
  );
}
