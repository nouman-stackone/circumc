import "./App.css";
import main_img from "./Assets/header-img.svg";
import logo from "./Assets/logo.svg";
import web from "./Assets/web.svg";
import yt from "./Assets/yt.svg";
import wa from "./Assets/wa.svg";
import portfolio from "./Assets/portfolio.svg";
import fb from "./Assets/fb.svg";
import insta from "./Assets/insta.svg";
import circumc_logo from "./Assets/circumc_logo.svg";
import SocialIcon from "./Components/SocialIcon";
import PartnerIcons from "./Components/PartnerIcon";

function App() {
  return (
    <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
      {/* list of top links (for web)*/}
      <ul className="flex-row mt-12 hidden sm:flex">
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
          Portfolio
        </li>
        <li
          style={{
            backgroundColor: "#FFE5E5",
          }}
          className="listItem  md:hover:scale-105"
        >
          2D Animations
        </li>
        <li
          style={{ backgroundColor: "#F5F3EB" }}
          className="listItem  md:hover:scale-105"
        >
          3D Animations
        </li>
        <li
          style={{ backgroundColor: "#F5F6FA" }}
          className="listItem  md:hover:scale-105"
        >
          Social Media Posts
        </li>
        <li
          style={{ backgroundColor: "#FFE5E5" }}
          className="listItem  md:hover:scale-105"
        >
          Productions
        </li>
        <li
          style={{ backgroundColor: "#EBF5EF" }}
          className="listItem  md:hover:scale-105"
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
        <div className="p-2 sm:p-8 md:p-6 lg:p-11 w-3/5 sm:w-4/6 md:w-4/6 lg:w-3/4">
          <p className="text-white sm:text-2xl md:text-3xl lg:text-4xl cursor-default">
            ALL YOUR DIGITAL CREATIVE SOLUTIONS ARE IN ONE PLACE.
          </p>
          <p className="text-white text-[10px] sm:text-base md:text-lg lg:text-2xl cursor-default">
            Design | Animation | Production | Events | Print Media
          </p>
        </div>
        <img
          src={main_img}
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
          Portfolio
        </li>
        <li
          style={{
            backgroundColor: "#FFE5E5",
          }}
          className="listItemSmall  md:hover:scale-105"
        >
          2D Animations
        </li>
        <li
          style={{ backgroundColor: "#F5F6FA" }}
          className="listItemSmall  md:hover:scale-105"
        >
          Social Media Posts
        </li>
        <li
          style={{ backgroundColor: "#F5F3EB" }}
          className="listItemSmall  md:hover:scale-105"
        >
          3D Animations
        </li>
        <li
          style={{ backgroundColor: "#FFE5E5" }}
          className="listItemSmall  md:hover:scale-105"
        >
          Productions
        </li>
        <li
          style={{ backgroundColor: "#EBF5EF" }}
          className="listItemSmall  md:hover:scale-105"
        >
          Contact Us
        </li>
      </ul>

      {/* social icons */}
      <p className="mt-2 sm:mt-4 text-sm sm:text-xl md:text-2xl">
        Let's Collaborate
      </p>
      <div className="flex flex-row flex-wrap mt-2 md:mt-4">
        <SocialIcon bgColor="#E5F6FE" icon={web} title="Website" />
        <SocialIcon bgColor="#FFE5E5" icon={yt} title="Youtube" />
        <SocialIcon bgColor="#EBF5EF" icon={wa} title="WhatsApp" />
        <SocialIcon bgColor="#F5F3EB" icon={portfolio} title="Portfolio" />
        <SocialIcon bgColor="#EBEEF5" icon={fb} title="Facebook" />
        <SocialIcon bgColor="#F5EBEB" icon={insta} title="Instagram" />
      </div>

      {/* partners */}
      <p className="mt-2 sm:mt-4 text-sm sm:text-xl md:text-2xl">
        We Have Worked For:
      </p>
      <div className="flex justify-between items-center">
        <PartnerIcons />

        {/* circumc logo */}
        <img
          src={circumc_logo}
          className="md:mr-18 lg:mr-18 mb-8 hidden sm:block sm:h-28 sm:w-28"
        />
      </div>
    </div>
  );
}

export default App;
