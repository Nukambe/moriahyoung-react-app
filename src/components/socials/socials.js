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
  {
    icon: "fi fi-rr-envelope",
    url: "mailto:moriah.young@outlook.com",
    alt: "envelope icon",
  },
];

export default function SocialLinks({
  className = "mx-auto w-96 text-4xl flex justify-evenly text-rose-800",
}) {
  return (
    <ul className={className}>
      {socials.map((social, index) => (
        <li key={index}>
          <a href={social.url} target="_blank" rel="noreferrer nofollow">
            <i className={social.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
