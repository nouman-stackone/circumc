import React from "react";

const SocialIcon = ({ icon, bgColor, title }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="
        md:mr-3
        mr-2

        lg:px-10
        lg:py-8
        md:px-8
        md:py-6
        sm:px-6
        sm:py-6
        px-4
        py-4
        flex-1
        sm:flex-none
      
        rounded-xl
        
        lg:mb-3
        md:mb-3
        mb-2
        
        md:hover:scale-105
        cursor-pointer
        flex
        flex-col
        items-center
        justify-center
        "
    >
      <img
        src={icon}
        alt="social-icon"
        className=" h-8 w-8 md:h-11 md:w-11 lg:h-14 lg:w-14"
      />
      <p className="text-center text-xs sm:text-sm mt-2">{title}</p>
    </div>
  );
};

export default SocialIcon;
