import { Youtube } from "lucide-react";
import LogoIcon from "../ui/logo-icon";

export default function SocialMediaSection (){
    return (
        <section className="xl:px-12 px-4 h-28 xl:mx-auto max-w-7xl mx-4 bg-[#613AF7] rounded-lg mt-20 flex justify-center lg:justify-between gap-2 md:flex items-center md:justify-end ">
            <div className="grid grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                    <LogoIcon key={index} size={8} backgroundColor={'#F1DEBB'} icon={<Youtube size={20}/>} />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <LogoIcon key={index} size={8} backgroundColor={'#F1DEBB'} icon={<Youtube size={20}/>} />
                ))}
            </div>
        </section>
    )
}