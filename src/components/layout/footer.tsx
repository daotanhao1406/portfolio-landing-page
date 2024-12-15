import SocialMediaSection from "../sections/social-media"
import Image from "next/image"

export function Footer() {

  return (
    <footer>
      <SocialMediaSection />
      <div className="xl:px-12 px-4 mx-4 md:my-10 mt-10 flex flex-col justify-between">
        <span className="hidden cursor-pointer sm:text-[#32C369] sm:flex items-center justify-end sm:text-base text-xs">{`Let's Chat`}
        <div className="w-8 h-8 rounded-3xl bg-[#32C369] ml-2 flex justify-center items-center">
        <Image src={'/whatsapp-white-chat.svg'} width={20} height={20} alt="whatsapp" />
        </div>
        </span>
      <div className="flex items-center justify-around md:justify-center md:space-x-12 w-full text-gray-600">
        
        <p className="font-medium text-sm lg:text-lg">Refund Policy</p>
        <p className="font-medium text-sm lg:text-lg">Privacy Policy</p>
        <p className="font-medium text-sm lg:text-lg">Terms & Conditions</p>
      </div>
      <span className="cursor-pointer flex mt-6 sm:text-[#32C369] sm:hidden items-center justify-end sm:mt-0 sm:text-base text-xs">{`Let's Chat`}
        <div className="w-8 h-8 rounded-3xl bg-[#32C369] ml-2 flex justify-center items-center">
          <Image src={'/whatsapp-white-chat.svg'} width={20} height={20} alt="whatsapp" />
        </div>
        </span>
      </div>
      <div className="py-4 flex items-center justify-center space-x-8 w-full text-gray-600 md:mt-12">
        <p className="">© 2024 David All Rights Reserved</p>
      </div>
    </footer>
  );
}