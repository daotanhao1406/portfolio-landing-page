import { socialLinks } from "@/constants/navigation";

export function SocialLinks() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-6 grid-rows-2 gap-3">
        {socialLinks.map(({ Icon, href }, index) => (
          <div
            key={index}
            className="flex justify-center items-center w-12 h-12 rounded-full bg-primary text-white hover:scale-110 transition-transform duration-200"
            title={href}
          >
            <Icon size={26} fill="white" />
          </div>
        ))}
      </div>
    </div>
  );
}