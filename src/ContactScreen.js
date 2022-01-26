import React from "react";
import main_img from "./Assets/header-img.svg";
import logo from "./Assets/logo.svg";
import wa from "./Assets/wa.svg";
import circumc_logo from "./Assets/circumc_logo.svg";
import SocialIcon from "./Components/SocialIcon";
import phone from "./Assets/phone.png";
import yt from "./Assets/yt_icon.svg";
import fb from "./Assets/fb-icon.svg";
import insta from "./Assets/insta-icon.svg";

const ContactScreen = ({ setScreen }) => {
  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
      {/* list of top links (for web)*/}
      <ul className="flex-row hidden sm:flex">
        <li
          onClick={() => setScreen("home")}
          style={{ backgroundColor: "#EBF5EF" }}
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
          style={{ backgroundColor: "#FF4147" }}
          className="listItem  md:hover:scale-105 text-white"
        >
          Contact Us
        </li>
      </ul>
      {/* top logo */}
      <div className="flex justify-center my-4">
        <img src={logo} alt="logo" className="sm:hidden" />
      </div>
      {/* Hero content div */}
      <div className="h-32 sm:h-40 md:h-48 lg:h-56 bg-[#FF4147] rounded-[12px] relative flex items-center">
        <div className="p-2 sm:p-8 md:p-6 lg:p-11 w-3/5 sm:w-4/6 md:w-4/6 lg:w-3/4 xl:text-center">
          <p
            style={{ fontFamily: "Roboto" }}
            className="text-white text-[20px] sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl cursor-default"
          >
            WIN THE CROWD
          </p>
        </div>
        <img
          alt="hero_img"
          src={phone}
          className="
      absolute

      h-60
      w-60
      sm:h-80
      sm:w-80
      md:h-[400px]
      md:w-[400px] 
      lg:h-[550px]
      lg:w-[550px]

      -top-12
      -right-8
      sm:-top-16
      sm:-right-2
      md:-top-24
      md:-right-4
      lg:-top-32 
      lg:-right-1
      "
        />
      </div>
      {/* list of links (for mobile) */}
      <ul className="flex-row mt-6 flex flex-wrap sm:hidden">
        <li
          onClick={() => setScreen("home")}
          style={{ backgroundColor: "#EBF5EF" }}
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
          style={{ backgroundColor: "#FF4147" }}
          className="listItemSmall  md:hover:scale-105 text-white"
        >
          Contact Us
        </li>
      </ul>

      {/* whatsapp icons */}
      <p className="mt-2 sm:mt-4 text-sm sm:text-xl md:text-2xl font-medium">
        Talk to us:
      </p>
      <div className="flex flex-row justify-center sm:justify-start flex-wrap mt-2 md:mt-4 sm:ml-8 mb-8">
        <div>
          <a href="https://wa.me/message/PTCNPHIZC5B3O1" target="_blank">
            <SocialIcon bgColor="#EBF5EF" icon={wa} title="Syed Mesum Raza" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/message/EUTLXU5FAS7ED1" target="_blank">
            <SocialIcon bgColor="#EBF5EF" icon={wa} title="Hamzah Farooq" />
          </a>
        </div>
      </div>

      {/* partners */}
      <div className="text-center sm:flex sm:justify-between sm:items-center">
        {/* <PartnerIcons /> */}
        <p className="text-sm sm:text-xl">
          <span style={{ color: "#FF4148" }}>Website:</span>
          <span style={{ color: "#737678" }}>
            {" "}
            www.circumc.com<span className="hidden sm:inline"> |</span>{" "}
          </span>
          <br className="sm:hidden" />
          <span style={{ color: "#FF4148" }}>Email: </span>
          <span style={{ color: "#737678" }}>info@circumc.com</span>
        </p>

        {/* circumc logo */}
        <img
          alt="logo"
          src={circumc_logo}
          className="md:mr-18 lg:mr-18 mb-8 hidden sm:block sm:h-28 sm:w-28"
        />
      </div>
      <div className="flex justify-center gap-4 mt-4 sm:hidden">
        <a
          href="https://www.youtube.com/channel/UCOIvYd6QBzQcRUWfd6x6KQw"
          target="_blank"
        >
          <img src={yt} alt="yt-logo" className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com/circumc
          "
          target="_blank"
        >
          <img src={fb} alt="fb-logo" className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/circumc3/" target="_blank">
          <img src={insta} alt="insta-logo" className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
};

export default ContactScreen;
