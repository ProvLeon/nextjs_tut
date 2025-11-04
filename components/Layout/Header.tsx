import Link from "next/link"
import React from "react";
import { IconType } from "react-icons";
import { HiBanknotes, HiChatBubbleBottomCenterText, HiHome, HiInformationCircle } from "react-icons/hi2";
import ToggleTheme from "../theme/theme-toggle";

const links = [
  {
    href: "Home",
    icon: HiHome
  },
  {
    href: "About",
    icon: HiInformationCircle
  },
  {
    href: "Contact",
    icon: HiChatBubbleBottomCenterText
  },
]

interface NavLinkProps {
  Href: string;
  icon?: IconType;
}
const NavLink = ({ Href, icon }: NavLinkProps) => {
  return (
    <Link href="/" className="hover:text-primary hover:underline">
      <span>
        {icon && React.createElement(icon, { className: "inline w-5 h-5 mr-1 mb-1" })}
      </span>
      {Href}
    </Link>
  )
}


const Header = () => {
  return (
    <header className="flex items-center justify-between py-2 bg-background/20 backdrop-blur-md mb-4 px-4 rounded-lg border border-primary/10 shadow-sm">

      <div className="flex items-center space-x-2 cursor-pointer hover:text-primary">
        <HiBanknotes className="w-8 h-8 text-primary" />
        <span className="text-lg font-bold">NextJs Tut</span>
      </div>
      <nav className="space-x-4 text-md font-bold">
        {links.map((link) => (
          <NavLink key={link.href} Href={link.href} icon={link.icon} />
        ))}
      </nav>
      <ToggleTheme />
    </header>
  )
}

export default Header
