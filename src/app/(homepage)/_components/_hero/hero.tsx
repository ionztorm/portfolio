export function Hero() {
  return (
    <h1 className="group grid gap-1 text-center">
      <span className="text-center text-sm">I&apos;m a</span>

      <span className="text-3xl sm:text-5xl font-bold text-[#6737B9]">
        Fullstack Web Developer
      </span>
      {/* Underline Span */}
      <span className="h-1 bg-[#73daca] w-0 transition-all duration-500 group-hover:w-full" />

      <span className="text-center text-sm">
        with a passion for clean, responsive, data driven interfaces
      </span>
    </h1>
  );
}
