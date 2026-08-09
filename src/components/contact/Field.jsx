const inputBase =
  "w-full rounded-sm border bg-ink-950/60 px-4 py-3.5 text-bone-50 placeholder:text-bone-400/60 transition-colors duration-200 focus:outline-none";

export default function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  hint,
  rows,
  ...props
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const className = `${inputBase} ${
    error
      ? "border-blush-500 focus:border-blush-400"
      : "border-ink-700 focus:border-gold-400"
  }`;

  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label
          htmlFor={id}
          className="text-[0.65rem] tracking-[0.25em] text-bone-300 uppercase"
        >
          {label}
        </label>
        {hint && (
          <span id={`${id}-hint`} className="text-[0.65rem] text-bone-400">
            {hint}
          </span>
        )}
      </div>

      <div className="mt-2.5">
        {rows ? (
          <textarea
            id={id}
            name={id}
            rows={rows}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={`${className} resize-y`}
            {...props}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={className}
            {...props}
          />
        )}
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-blush-400">
          {error}
        </p>
      )}
    </div>
  );
}
