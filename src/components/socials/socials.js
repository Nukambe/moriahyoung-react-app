const socials = [
  {
    icon: "fi fi-brands-facebook",
    url: "https://www.facebook.com/moriah.young.5",
    alt: "facebook icon",
  },
  {
    icon: "fi fi-brands-instagram",
    url: "https://www.instagram.com/moriahlyoung/",
    alt: "instagram icon",
  },
  {
    icon: "fi fi-brands-soundcloud",
    url: "https://soundcloud.com/moriah-young-463207945",
    alt: "soundcloud icon",
  },
  {
    icon: "fi fi-brands-imdb",
    url: "https://www.imdb.com/name/nm12554084/",
    alt: "imdb icon",
  },
];

export default function SocialLinks({
  fontSize = "2em",
  color = "black",
  width = "16em",
}) {
  return (
    <div
      style={{
        width: width,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {socials.map((social, index) => (
        <a key={index} href={social["url"]} target="_blank" rel="noreferrer">
          <i
            className={social["icon"]}
            style={{
              fontSize: fontSize,
              color: color,
            }}
          ></i>
        </a>
      ))}
    </div>
  );
}
