
export function Footer() {

  return (
    <footer className="max-w-6xl mx-4 h-32 md:h-40 my-10 flex flex-col justify-between xl:mx-auto">
      <div>
        <span className="hidden sm:text-[#32C369] sm:flex items-center justify-end">{`Let's Chat`}
        <div className="w-8 h-8 rounded-3xl bg-[#32C369] ml-2"></div>
        </span>
      <div className="flex items-center justify-around md:justify-center md:space-x-12 w-full text-gray-600">
        
        <p className="font-semibold text-sm md:text-lg">Refund Policy</p>
        <p className="font-semibold text-sm md:text-lg">Privacy Policy</p>
        <p className="font-semibold text-sm md:text-lg">Terms & Conditions</p>
      </div>
      <span className="flex mt-6 sm:text-[#32C369] sm:hidden items-center justify-end sm:mt-0">{`Let's Chat`}
        <div className="w-8 h-8 rounded-3xl bg-[#32C369] ml-2"></div>
        </span>
      </div>
      <div className="flex items-center justify-center space-x-8 w-full text-gray-600">
        <p className="">2024 David All Rights Reserved</p>
      </div>
    </footer>
  );
}