export default function PaintStrokeEdge() {
  return (
    <svg
      className="absolute left-0 top-0 h-full w-[72px] -translate-x-[1px] z-10 pointer-events-none"
      viewBox="0 0 72 800"
      preserveAspectRatio="none"
      fill="white"
      aria-hidden
    >
      <path d="M0,0 L52,0 C38,48 58,96 44,144 C30,192 54,240 40,288 C26,336 50,384 36,432 C22,480 46,528 32,576 C18,624 42,672 28,720 C14,768 48,800 0,800 Z" />
      <path
        d="M8,0 L56,0 C42,56 62,112 48,168 C34,224 58,280 44,336 C30,392 54,448 40,504 C26,560 50,616 36,672 C22,728 46,784 32,800 L0,800 Z"
        fill="#f4f6f8"
        opacity="0.95"
      />
    </svg>
  );
}
