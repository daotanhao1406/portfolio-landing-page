import { MessageCircle, Linkedin, Mail, Github, Twitter, Facebook, Instagram, Video } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  path: string;
  icon?: LucideIcon
  submenu?: MenuItem[];
}

export interface SocialLink {
  Icon: LucideIcon;
  href: string;
}
export const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  {
    title: "Service",
    path: "#",
    submenu: [
      { title: "Branding Design", path: "/services/branding", icon: Video },
      { title: "Graphic Design", path: "/services/graphic", icon: Video },
      { title: "Video Editing", path: "/services/video", icon: Video },
      { title: "Animation & Motion Graphic", path: "/services/animation", icon: Video },
    ],
  },
  { title: "Works", path: "/works", submenu: [
    { title: "Branding Design", path: "/services/branding", icon: Video },
    { title: "Graphic Design", path: "/services/graphic", icon: Video },
    { title: "Video Editing", path: "/services/video", icon: Video },
    { title: "Animation & Motion Graphic", path: "/services/animation", icon: Video },
  ], },
  { title: "About", path: "/about" },
  { title: "Blog", path: "/blog" },
  { title: "FAQ", path: "/faq" },
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