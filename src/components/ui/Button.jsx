import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.7rem] font-medium tracking-[0.22em] uppercase transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  solid: "bg-gold-400 text-ink-950 hover:bg-gold-300 hover:-translate-y-0.5",
  outline:
    "border border-bone-300/35 text-bone-100 hover:border-gold-400 hover:text-gold-300 hover:-translate-y-0.5",
  ghost: "text-bone-300 hover:text-gold-300",
};

export default function Button({
  as = "button",
  to,
  href,
  variant = "solid",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  const Component = as;
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
