import { MessageCircle, Linkedin, Mail, Github, Twitter, Facebook, Instagram } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  icon?: string
  submenu?: MenuItem[];
}

export interface SocialLink {
  Icon: LucideIcon;
  href: string;
}
export const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  {
    title: "Works",
    path: "/works",
    submenu: [
      { title: "Branding Design", path: "/works", icon: '/branding-icon.svg' },
      { title: "Graphic Design", path: "#", icon: '/design-icon.svg' },
      { title: "Video Editing", path: "#", icon: '/video-icon.svg' },
      { title: "Animation & Motion Graphic", path: "#", icon: '/animation-icon.svg' },
    ],
  },
  { title: "Service", path: "#" },
  { title: "About", path: "#" },
  { title: "Blog", path: "#" },
  { title: "FAQ", path: "#" },
];

export const socialLinks: SocialLink[] = [
  { Icon: MessageCircle, href: "#" },
  { Icon: Mail, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Github, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: MessageCircle, href: "#" },
  { Icon: Mail, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Github, href: "#" },
  { Icon: Twitter, href: "#" },
];