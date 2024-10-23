export function Footer() {
  return (
    <footer className="text-sm flex justify-between items-center py-4 px-4 mx-auto max-w-5xl w-full mt-10">
      <p>&copy; Leon Lonsdale 2024</p>
      <div className="flex flex-col text-right">
        <p>
          Built with <strong>NextJS</strong>, <strong>TypeScript</strong> and{" "}
          <strong>Tailwind</strong>
        </p>
        <p>
          Powered by <strong>Vercel</strong>
        </p>
      </div>
    </footer>
  );
}
