export function Hero() {
  return (
    <div className="h-[45vh] flex flex-col items-center justify-center gap-3">
      <h1 className="flex flex-col items-center justify-center gap-2 text-slate-400">
        <div className="group grid">
          <span className="text-4xl sm:text-5xl font-bold inline-block text-violet-500 transform transition  duration-300">
            Leon Lonsdale
          </span>
          {/* Underline Span */}
          <span className="h-1 bg-violet-500 w-0 transition-all duration-500 group-hover:w-full"></span>
        </div>
        <span className="text-center text-lg sm:text-xl">
          Aspiring Junior Fullstack Engineer
          {/*a Fullstack Web Developer 💻. Formula 1 Enjoyer 🏎. Lifelong Learner
          🎓*/}
        </span>
      </h1>
    </div>
  );
}
