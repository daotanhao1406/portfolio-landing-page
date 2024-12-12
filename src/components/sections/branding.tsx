const links = [
    "Branding",
    "Animation",
    "Video",
    "Motion ",
    "Branding",
    "Animation",
    "Video",
    "Motion ",
    "Branding",
    "Animation",
    "Video",
    "Motion ",
    "Branding",
    "Animation",
    "Video",
    "Motion ",
    "Branding",
    "Animation",
    "Video",
    "Motion ",
    "Branding",
    "Animation",
    "Video",
    "Motion ",
    "Branding"
  ];
export function BrandingSection() {
return (
        <div className="flex py-2 items-center space-x-4 w-full overflow-hidden text-white bg-[#7553F5]">
        {links.map((link, index) => (
          <>
            <h3 key={`${link}-${index}`} className="text-3xl">
              {link}
            </h3>
            {index < links.length - 1 && <span className="text-orange-500 text-3xl">★</span>}
          </>
        ))}
      </div>
      )
}