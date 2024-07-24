import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import icon from "./assets/images/footer/image.png";
import iconMob from "./assets/images/footer/imag.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#333333] font-poppins text-white p-2 h-auto pt-[3rem]">
      <center>
        <div className="md:flex md:justify-evenly px-[7%] w-full  text-left   py-2   mb-9   gap-3">

           {/* section */}
           <div className="">
            <ul>

              <div className="flex gap-4 md:block md:justify-start justify-center w-full ">
                <span className=" w-auto md:block flex items-center justify-end">
              <li className="py-2 w-7/12 md:w-8/12">
                <img className="md:block hidden" src={icon} alt="" />
                <img className="md:hidden w-full  block" src={iconMob} alt="" />
              </li>
                </span>


              <div>
              <li className="py-1 flex items-center h-full">
                <p className="md:text-sm md:block  text-sm md:w-full w-10/12 ">
                  Kiira Motors Corporation is a State{" "}
                  <br className="md:block hidden" /> Enterprise established to
                  champion value
                  <br className="md:block hidden" /> addition in the nascent
                  Motor Vehicle <br className="md:block hidden" />
                  Industry in Uganda through Technology{" "}
                  <br className="md:block hidden" /> Transfer
                </p>
              </li>
              </div>

              </div>

              <li className="hidden md:flex gap-2">
                <a
                  href="https://www.facebook.com/kiiramotors/"
                  className="text-2xl rounded-lg p-1 bg-black/40"
                >
                  <FaFacebookF className="text-white/50" />
                </a>
                <a
                  href="https://www.instagram.com/kiiramotorsofficial?igsh=MWxtanZicnRwcm4wdA=="
                  className="text-2xl rounded-lg p-1 bg-black/40"
                >
                  <FaInstagram className="text-white/50" />
                </a>
                <a
                  href="https://x.com/KiiraMotors?t=HlSrjtZ-qVARNukxF6r_nA&s=08"
                  className="text-2xl rounded-lg p-1 bg-black/40"
                >
                  <FaTwitter className="text-white/50" />
                </a>
                <a
                  href="https://youtube.com/@kiiramotors?si=463ul-BHodb3ZU8V"
                  className="text-2xl rounded-lg p-1 bg-black/40"
                >
                  <FaYoutube className="text-white/50" />
                </a>
              </li>
            </ul>
          </div>
          {/* section 1 */}
          <div className="flex mx-[7%] md:mx-auto   md:block justify-between pt-4">
            <ul className="flex flex-col  w-full md:w-full text-sm text-gray-400 ">
              <Link className="py-1 font-bold text-white">Products</Link>
              <Link
                to="/kayoola-evs"
                className="py-1 hover:text-red-400 transition-all duration-100 ease-in"
              >
                Kayoola EVS
              </Link>
              <Link
                to="/kayoola-coach"
                className="hover:text-red-400 transition-all duration-100 ease-in"
              >
                Kayoola Coach
              </Link>
              <Link
                to="/chargers"
                className="hover:text-red-400 transition-all duration-100 ease-in"
              >
                Chargers
              </Link>
            </ul>

            <ul className="flex pt-4  w-full flex-col text-gray-400 text-sm ">
              <Link className="py-1 font-bold text-white ">KMC Shop</Link>
              <Link
                to="/auto-parts"
                className="py-1 hover:text-red-400 transition-all duration-100 ease-in"
              >
                Auto parts
              </Link>
            </ul>
          </div>


          {/* section 2*/}
          <div className="flex mx-[7%] md:mx-auto   md:block justify-between">
          <div className="pt-4  w-full  md:pl-auto ">
            <ul className="flex flex-col w-full text-sm text-gray-400">
              <li className="py-1 font-bold text-white">Services</li>

              <Link
                to="/contract-manufacturing"
                className="py-1 hover:text-red-400 transition-all duration-100 ease-in"
              >
                Contract Manufacturing
              </Link>
              <Link
                to="/product-support"
                className="hover:text-red-400 transition-all duration-100 ease-in"
              >
                Product Support Services
              </Link>
              <Link
                to="/engineering-services"
                className="hover:text-red-400 transition-all duration-100 ease-in"
              >
                Engineering Services
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Property Lease and Rental Services
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Consulting and Advisory Services
              </Link>
              <Link
                to="/vehicle-hire"
                className="hover:text-red-400 transition-all duration-100 ease-in"
              >
                Vehicle Hire
              </Link>
            </ul>
          </div>

          <div className="pt-4  w-full  md:pl-auto">
            <ul className="flex flex-col w-full text-sm text-gray-400">
              <li className="py-1 font-bold text-white ">Discover</li>
              <Link className="py-1 hover:text-red-400 transition-all duration-100 ease-in">
                Events
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Articles
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Mobility clubs
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Annual Report
              </Link>
              <Link className="py-1 hover:text-red-400 transition-all duration-100 ease-in">
                Investor
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Service & maintenance
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Become a partner
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                About Us
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Career
              </Link>
              <Link className="hover:text-red-400 transition-all duration-100 ease-in">
                Projects
              </Link>
            </ul>
          </div>
          </div>

        </div>
      </center>

      <li className="flex md:hidden py-2 justify-center gap-2">
        <a
          href="https://www.facebook.com/kiiramotors/"
          className="md:text-2xl text-xl rounded-lg p-1 bg-black/40"
        >
          <FaFacebookF className="text-white/50" />
        </a>
        <a
          href="https://www.instagram.com/kiiramotorsofficial?igsh=MWxtanZicnRwcm4wdA=="
          className="md:text-2xl text-xl rounded-lg p-1 bg-black/40"
        >
          <FaInstagram className="text-white/50" />
        </a>
        <a
          href="https://x.com/KiiraMotors?t=HlSrjtZ-qVARNukxF6r_nA&s=08"
          className="md:text-2xl text-xl rounded-lg p-1 bg-black/40"
        >
          <FaTwitter className="text-white/50" />
        </a>
        <a
          href="https://youtube.com/@kiiramotors?si=463ul-BHodb3ZU8V"
          className="md:text-2xl text-xl rounded-lg p-1 bg-black/40"
        >
          <FaYoutube className="text-white/50" />
        </a>
      </li>

      <center>
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 w-11/12" />
      </center>
      <div className="flex text-sm justify-around py-3">
        Copyright &#169; 2024 Kiira Motors Corporation
      </div>
    </div>
  );
};

export default Footer;
