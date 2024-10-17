export function Hero() {
	return (
		<div className="h-[45vh] flex flex-col items-center justify-center gap-3">
			<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
				I&apos;m{" "}
				<span className="inline-block text-violet-500 transform transition hover:-rotate-6 hover:scale-105 duration-300">
					Leon
				</span>
			</h1>
			<p className="text-slate-500 text-center">
				Fullstack Web Developer 💻. Formula 1 Enjoyer 🏎️. Lifelong Learner 🎓
			</p>
		</div>
	);
}
