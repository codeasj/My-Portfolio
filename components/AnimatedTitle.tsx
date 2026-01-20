"use client";

type AnimatedTitleProps = {
  text: string;
};

const STRIPES = [
  { color: "bg-yellow-400", delay: "" },
  { color: "bg-cyan-400", delay: "delay-100" },
  { color: "bg-purple-400", delay: "delay-200" },
];

function AnimatedTitle({ text }: AnimatedTitleProps) {
  return (
    <div className="container text-center text-5xl sm:text-6xl xl:text-7xl mb-12">
      <span className="nav-a relative inline-block cursor-pointer group">
        {/* Letters */}
        <span className="nav-a-letters flex">
          {text.split("").map((letter, idx) => (
            <span
              key={idx}
              className="nav-a-letter inline-block transition-transform duration-300 ease-out group-hover:-translate-y-2"
              style={{ transitionDelay: `${idx * 30}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>

        {/* Animated Stripes */}
        {STRIPES.map((stripe, idx) => (
          <span
            key={idx}
            className={`nav-a-stripe absolute bottom-0 left-0 h-1 ${stripe.color} w-0 group-hover:w-full transition-all duration-500 ${stripe.delay}`}
          />
        ))}
      </span>
    </div>
  );
}

export default AnimatedTitle;
