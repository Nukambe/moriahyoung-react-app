import headshot from "../../assets/content/0463-_Moriah_Young-_Larger_File.jpg";

export default function HomeHero({ children }) {
  return (
    <div
      className="md:hidden overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headshot})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "100%",
        width: "100%",
      }}
    >
      <div>{children}</div>
    </div>
  );
}
