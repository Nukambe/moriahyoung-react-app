import { useLocation } from "react-router-dom";
import {
  ChatBubbleLeftRightIcon,
  HomeModernIcon,
  MicrophoneIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { href: "/", name: "Home", icon: HomeModernIcon },
  { href: "/about", name: "About", icon: UserCircleIcon },
  { href: "/voice", name: "Voice", icon: MicrophoneIcon },
  { href: "/oncamera", name: "On-Camera", icon: VideoCameraIcon },
  { href: "/contact", name: "Contact", icon: ChatBubbleLeftRightIcon },
];

export default function Header() {
  const path = useLocation().pathname;

  return (
    <header className="hidden md:flex flex-col gap-y-5 overflow-y-auto bg-rose-600 px-6 w-[200px] shrink-0 h-full fixed">
      <nav className="flex flex-1 flex-col py-8">
        <ul className="-mx-2 space-y-4">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`
                      ${
                        item.href === path
                          ? "bg-rose-700 text-white"
                          : "text-rose-200 hover:text-white hover:bg-rose-700"
                      }
                       group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                    `}
              >
                <item.icon
                  className={`${
                    item.current
                      ? "text-white"
                      : "text-rose-200 group-hover:text-white"
                  }
                        "h-6 w-6 shrink-0"
                      `}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="https://wesleychappell.com"
        target="_blank"
        rel="noreferrer nofollow"
        className="text-rose-300"
      >
        &copy; Wesley Chappell
      </a>
    </header>
  );
}
