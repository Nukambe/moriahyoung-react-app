import { motion } from "framer-motion";

const socials = [
  {
    icon: "/icons/facebook.svg",
    url: "https://www.facebook.com/moriah.young.5",
    alt: "facebook",
  },
  {
    icon: "/icons/instagram.svg",
    url: "https://www.instagram.com/moriahlyoung/",
    alt: "instagram",
  },
  {
    icon: "/icons/soundcloud.svg",
    url: "https://soundcloud.com/moriah-young-463207945",
    alt: "soundcloud",
  },
  {
    icon: "/icons/imdb.svg",
    url: "https://www.imdb.com/name/nm12554084/",
    alt: "imdb",
  },
  {
    icon: "/icons/outlook.svg",
    url: "mailto:moriah.young@outlook.com",
    alt: "email",
  },
];

export default function SocialLinks({
  className = "mx-auto w-96 text-4xl flex justify-evenly text-rose-800 p-0",
  size = 48,
}) {
  return (
    <ul className={className}>
      {socials.map((social, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: -64 }}
          animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={social.url} target="_blank" rel="noreferrer nofollow">
            <img
              src={social.icon}
              alt={social.alt}
              height={social.alt === "imdb" ? size * 1.1 : size}
              width={social.alt === "imdb" ? size * 1.1 : size}
            />
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
