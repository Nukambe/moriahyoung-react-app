import { motion } from "motion/react";
import { socials } from "../../data/site";
import {
  FacebookIcon,
  ImdbIcon,
  InstagramIcon,
  MailIcon,
  SoundCloudIcon,
} from "./BrandIcons";

const brandIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  SoundCloud: SoundCloudIcon,
  IMDb: ImdbIcon,
  Email: MailIcon,
};

export default function SocialLinks({ className = "", size = 20, delay = 0 }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map((social, index) => {
        const Icon = brandIcons[social.name];
        const isMail = social.url.startsWith("mailto:");

        return (
          <motion.li
            key={social.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + index * 0.07, duration: 0.4 }}
          >
            <a
              href={social.url}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noreferrer nofollow"}
              aria-label={social.name}
              title={social.name}
              className="flex items-center justify-center rounded-full border border-ink-700 p-2.5 text-bone-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400/70 hover:text-gold-300"
            >
              <Icon style={{ width: size, height: size }} />
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
}
