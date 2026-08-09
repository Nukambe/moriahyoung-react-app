/**
 * Monochrome brand marks drawn with `currentColor` so social links inherit the
 * page palette instead of dropping full-colour logos into the design.
 */

function Svg({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function FacebookIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M14.8 8.2h-1.3c-.8 0-1.3.5-1.3 1.3v1.6h2.4l-.4 2.4h-2V19" />
      <path d="M10.2 11.1h1.9" />
    </Svg>
  );
}

export function SoundCloudIcon(props) {
  return (
    <Svg {...props}>
      <path d="M3 14v3" />
      <path d="M6 12v5" />
      <path d="M9 10v7" />
      <path d="M12 8.5V17" />
      <path d="M15 17V8a4 4 0 0 1 6.2 3.3" />
      <path d="M15 17h4.6a2.4 2.4 0 0 0 0-4.8" />
    </Svg>
  );
}

export function ImdbIcon(props) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M6 9.4v5.2" />
      <path d="M8.6 14.6V9.4l1.3 3.2 1.3-3.2v5.2" />
      <path d="M13.9 14.6V9.4h1.1a2 2 0 0 1 2 2v1.2a2 2 0 0 1-2 2z" />
      <path d="M19.2 14.6V9.4" />
      <path d="M19.2 11.4h.4a1.5 1.5 0 0 1 1.5 1.5v.2a1.5 1.5 0 0 1-1.5 1.5h-.4" />
    </Svg>
  );
}

export function MailIcon(props) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7.5 7.3 5.2a2 2 0 0 0 2.4 0l7.3-5.2" />
    </Svg>
  );
}
