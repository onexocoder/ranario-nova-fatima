export function FrogScene({ className = "" }: { className?: string }) {
  return (
    <svg className={`frog-scene ${className}`} viewBox="0 0 640 520" role="img" aria-label="Ilustração abstrata de uma rã sobre uma vitória-régia">
      <g className="frog-ripples" aria-hidden="true">
        <ellipse cx="322" cy="444" rx="272" ry="45" />
        <ellipse cx="322" cy="444" rx="210" ry="31" />
        <ellipse cx="322" cy="444" rx="142" ry="19" />
      </g>
      <path className="lily" d="M101 422c56-91 173-129 280-91 59 21 108 63 143 119-77 38-168 47-251 31-67-13-126-35-172-59Z" />
      <path className="lily-cut" d="m319 410 205 40c-71 35-157 46-237 34l32-74Z" />
      <g className="frog-body">
        <ellipse cx="319" cy="310" rx="116" ry="105" />
        <ellipse cx="238" cy="231" rx="57" ry="53" />
        <ellipse cx="400" cy="231" rx="57" ry="53" />
        <circle className="frog-eye" cx="246" cy="225" r="18" />
        <circle className="frog-eye" cx="392" cy="225" r="18" />
        <path className="frog-leg" d="M225 337c-45 11-84 39-108 78 50 5 96-3 136-28" />
        <path className="frog-leg" d="M414 337c46 11 85 39 109 78-51 5-97-3-137-28" />
        <path className="frog-smile" d="M263 300c33 22 77 22 111 0" />
        <circle className="frog-nostril" cx="290" cy="273" r="4" />
        <circle className="frog-nostril" cx="348" cy="273" r="4" />
      </g>
    </svg>
  );
}
