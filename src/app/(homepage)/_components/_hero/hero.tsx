export function Hero() {
  return (
    <h1 className="group grid gap-2 text-center">
      <span className="text-center text-sm">Junior</span>

      <span className="text-3xl sm:text-5xl font-bold">
        Fullstack Web Developer
      </span>
      {/* Underline Span */}
      <span className="h-1 bg-violet-500 w-0 transition-all duration-500 group-hover:w-full" />
    </h1>
  );
}
