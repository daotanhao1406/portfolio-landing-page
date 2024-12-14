import LogoIcon from "../ui/logo-icon";
import Image from "next/image";

const iconSrc = [
    '/whatsapp.svg',
    '/email.svg',
    '/skype.svg',
    '/telegram.svg',
]

const iconSrc2 = [
    '/instagram.svg',
    '/x.svg',
    '/linked.svg',
    '/facebook.svg',
    '/behance.svg',
    '/dribbble.svg',
    '/youtube.svg',
    '/pinterest.svg',
]


export default function SocialMediaSection (){
    return (
        <section className="xl:px-12 px-4 h-28 mx-4 bg-[#613AF7] rounded-lg mt-20 flex justify-center lg:justify-between gap-2 md:flex items-center md:justify-end ">
            <div className="grid grid-cols-2 gap-2">
                {iconSrc.map((icon, index) => (
                    <LogoIcon key={index} size={8} backgroundColor={'#F1DEBB'} icon={<Image style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} width={18} height={18} src={icon} alt={icon}/>} />
                ))}
            </div>
            <div className="grid grid-cols-4 gap-2">
                {iconSrc2.map((icon, index) => (
                    <LogoIcon key={index} size={8} backgroundColor={'#F1DEBB'} icon={<Image width={18} height={14} src={icon} alt={icon}/>} />
                ))}
            </div>
        </section>
    )
}