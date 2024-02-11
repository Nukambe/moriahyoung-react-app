export default function ContactInput({
  label,
  type,
  value,
  setValue,
  error,
  errorText,
}) {
  return (
    <div className="flex flex-col w-full my-2">
      <label htmlFor={label} className="text-rose-800 text-2xl">
        {label}
      </label>
      {type !== "textarea" && (
        <input
          type={type}
          name={label.toLowerCase()}
          value={value}
          autoComplete={label.toLowerCase()}
          onChange={(e) => setValue(e.target.value)}
          className="border-rose-800 border-2 p-2 rounded-md focus:outline-none focus:border-rose-600"
        />
      )}
      {type === "textarea" && (
        <textarea
          className="border-rose-800 border-2 p-2 rounded-md focus:outline-none focus:border-rose-600"
          name={label.toLowerCase()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      )}
      {error && <p className="text-red-600 text-2xl">{errorText}</p>}
    </div>
  );
}
