import React from "react";
import main_img from "./Assets/header-img.svg";
import logo1 from "./Assets/logo.svg";
import logo2 from "./Assets/bg_logo_mobile.png";
import web from "./Assets/web.svg";
import yt from "./Assets/yt.svg";
import wa from "./Assets/wa.svg";
import portfolio from "./Assets/portfolio.svg";
import fb from "./Assets/fb.svg";
import insta from "./Assets/insta.svg";
import circumc_logo from "./Assets/circumc_logo.svg";
import SocialIcon from "./Components/SocialIcon";
import PartnerIcons from "./Components/PartnerIcon";
import laptop from "./Assets/laptop.png";
import bg_web from "./Assets/bg-web.png";

const HomeScreen = ({ setScreen }) => {
  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
      {/* list of top links (for web)*/}
      <ul className="flex-row hidden sm:flex">
        <li
          style={{ backgroundColor: "#FF4147", color: "#FFFF" }}
          className="listItem md:hover:scale-105"
        >
          Home
        </li>
        <li
          className="listItem  md:hover:scale-105"
          style={{ backgroundColor: "#F5F3EB" }}
        >
          <a
            href="https://drive.google.com/drive/folders/1EH55eZU9YAi5bnpiFcJbKEkor3AsIhC3?usp=sharing"
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li
          style={{
            backgroundColor: "#FFE5E5",
          }}
          className="listItem  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1YkUuuCjQEblWDqyf1-Roo-_fSzqwCQwX"
            target="_blank"
          >
            2D Animations
          </a>
        </li>
        <li
          style={{ backgroundColor: "#F5F3EB" }}
          className="listItem  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1zQdlYcNfVO6sWzXHe2A5NNDMhiHpf7ge"
            target="_blank"
          >
            3D Animations
          </a>
        </li>
        <li
          style={{ backgroundColor: "#F5F6FA" }}
          className="listItem  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1cn5UUyc_PUsKIlUl8ePy5ut8E_1YXeNa"
            target="_blank"
          >
            Social Media Posts
          </a>
        </li>
        <li
          style={{ backgroundColor: "#FFE5E5" }}
          className="listItem  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1NTF539L-7esMfu7c5_-aF8P1_Y9TM6xn"
            target="_blank"
          >
            Productions
          </a>
        </li>
        <li
          style={{ backgroundColor: "#EBF5EF" }}
          className="listItem  md:hover:scale-105"
          onClick={() => setScreen("contact")}
        >
          Contact Us
        </li>
      </ul>
      {/* top logo */}
      <div className="flex justify-center my-4 absolute -mt-12">
        <img src={logo2} alt="logo" className="sm:hidden" />
      </div>
      {/* Hero content div */}
      <div className="pt-28 sm:pt-6">
        <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-[#FF4147] rounded-[12px] relative flex items-center">
          <div className="p-2 sm:p-8 md:p-6 lg:p-11 w-3/5 sm:w-4/6 md:w-4/6 lg:w-3/4">
            <p
              style={{ fontFamily: "Roboto" }}
              className="text-white sm:text-2xl md:text-3xl lg:text-4xl cursor-default sm:mb-3"
            >
              ALL YOUR DIGITAL CREATIVE <br className="hidden sm:block" />
              SOLUTIONS ARE IN ONE PLACE.
            </p>
            <p
              // style={{ fontFamily: "Roboto" }}
              className="text-white text-[10px] sm:text-base md:text-lg lg:text-2xl cursor-default"
            >
              Design | Animation | Production | Events | Print Media
            </p>
          </div>
          <img
            src={laptop}
            alt="main_img"
            className="
        absolute
        h-44
        w-44
        sm:h-56
        sm:w-56
        md:h-72
        md:w-72 
        -top-6
        -right-3
        sm:-top-8
        sm:-right-2
        md:-top-12
        md:-right-4
        lg:h-96
        lg:w-96
        lg:-top-24 
        lg:-right-8
      "
          />
        </div>
      </div>

      {/* list of links (for mobile) */}
      <ul className="flex-row mt-6 flex flex-wrap sm:hidden">
        <li
          style={{ backgroundColor: "#FF4147", color: "#FFFF" }}
          className="listItemSmall md:hover:scale-105"
        >
          Home
        </li>
        <li
          className="listItemSmall  md:hover:scale-105"
          style={{ backgroundColor: "#F5F3EB" }}
        >
          <a
            href="https://drive.google.com/drive/folders/1EH55eZU9YAi5bnpiFcJbKEkor3AsIhC3?usp=sharing"
            target="_blank"
          >
            Portfolio
          </a>
        </li>
        <li
          style={{
            backgroundColor: "#FFE5E5",
          }}
          className="listItemSmall  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1YkUuuCjQEblWDqyf1-Roo-_fSzqwCQwX"
            target="_blank"
          >
            2D Animations
          </a>
        </li>
        <li
          style={{ backgroundColor: "#F5F6FA" }}
          className="listItemSmall  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1cn5UUyc_PUsKIlUl8ePy5ut8E_1YXeNa"
            target="_blank"
          >
            Social Media Posts
          </a>
        </li>
        <li
          style={{ backgroundColor: "#F5F3EB" }}
          className="listItemSmall  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1zQdlYcNfVO6sWzXHe2A5NNDMhiHpf7ge"
            target="_blank"
          >
            3D Animations
          </a>
        </li>
        <li
          style={{ backgroundColor: "#FFE5E5" }}
          className="listItemSmall  md:hover:scale-105"
        >
          <a
            href="https://drive.google.com/drive/folders/1NTF539L-7esMfu7c5_-aF8P1_Y9TM6xn"
            target="_blank"
          >
            Productions
          </a>
        </li>
        <li
          style={{ backgroundColor: "#EBF5EF" }}
          className="listItemSmall  md:hover:scale-105"
          onClick={() => setScreen("contact")}
        >
          Contact Us
        </li>
      </ul>

      {/* social icons */}
      <p className="mt-2 sm:mt-4 text-sm sm:text-xl md:text-2xl font-medium">
        Let's Collaborate
      </p>
      <div className="flex justify-center sm:justify-start flex-row flex-wrap mt-2 md:mt-4">
        <SocialIcon
          link="https://circumc.com/"
          bgColor="#E5F6FE"
          icon={web}
          title="Website"
        />
        <SocialIcon
          link="https://www.youtube.com/channel/UCOIvYd6QBzQcRUWfd6x6KQw"
          bgColor="#FFE5E5"
          icon={yt}
          title="Youtube"
        />
        <div onClick={() => setScreen("contact")}>
          <SocialIcon bgColor="#EBF5EF" icon={wa} title="WhatsApp" />
        </div>
        <SocialIcon
          link="https://drive.google.com/drive/folders/1EH55eZU9YAi5bnpiFcJbKEkor3AsIhC3"
          bgColor="#F5F3EB"
          icon={portfolio}
          title="Portfolio"
        />
        <SocialIcon
          link="https://www.facebook.com/circumc
"
          bgColor="#EBEEF5"
          icon={fb}
          title="Facebook"
        />
        <SocialIcon
          link="https://www.instagram.com/circumc3/"
          bgColor="#F5EBEB"
          icon={insta}
          title="Instagram"
        />
      </div>

      {/* partners */}
      <p className="mt-2 sm:mt-4 text-sm sm:text-xl md:text-2xl font-medium">
        We Have Worked For:
      </p>
      <div className="flex justify-between items-center">
        <PartnerIcons />

        {/* circumc logo */}
        <img
          src={circumc_logo}
          alt="logo"
          className="md:mr-18 lg:mr-18 mb-8 hidden sm:block sm:h-28 sm:w-28"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
