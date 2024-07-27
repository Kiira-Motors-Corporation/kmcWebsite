import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import icon from "./assets/images/navbar/icon.png";
import { NavLink, Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AuthContext } from "../../Context/AuthContext"
import { BsCart4 } from "react-icons/bs";
import { Fragment } from "react";
import ImageSlider from "./ImageSlider";
import DiscoverMore from "./ImageSlider_2";
import Products from "./ImageSlider_3";
import { OrderContext } from "../../Context/OrderContext";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ConfirmationModal from "./ConfirmationModal";
import { useNavigate } from "react-router-dom";


import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const { user,logout } = useContext(AuthContext);
  const { cartItems } = useCart();
  const { orderCount } = useContext(OrderContext);
  const uniqueItemCount = cartItems.length;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  function handleScroll() {
    if (window.scrollY > 0) {
      setIsScrolled(true); // Adjust breakpoint for mobile as needed
    } else {
      setIsScrolled(false);
    }
  }

  // console.log("Window scroll y:", window.scrollY);
// console.log(user);
  window.addEventListener("scroll", handleScroll);

  const [isHovered, setIsHovered] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isDiscoverMore, setIsDiscoverMore] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [fade, setFade] = useState(false);
  const [company, setCompany] = useState(false);
  const [media, setMedia] = useState(false);
  const [resources, setResources] = useState(false);
  const [support, setSupport] = useState(false);
  const [products, setProducts] = useState(false);
  const [services, setServices] = useState(false);
  const [query, setQuery] = useState(false);



  const handleLogout = () =>{
    setIsModalVisible(true)
  }

  const confirmRemove =  () => {
    logout();
    navigate('/login')
    setIsModalVisible(false);
    setIsAuth(false)
  };

  const cancelRemove = () => {
    setIsModalVisible(false);

  };

  // products
  const handleMouseEnter = () => {
    setIsHovered(true);
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 100); // Match the transition duration
  };

  // services
  const handleMouseEnterServices = () => {
    setIsServices(true);
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 100); // Match the transition duration
  };

  // services
  const handleMouseEnterDiscover = () => {
    setIsDiscoverMore(true);
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 100); // Match the transition duration
  };

  // auth
  const handleMouseEnterAuth = () => {
    setIsAuth(!isAuth);
  };

  // menu
  const handleMenuBar = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle("overflow-hidden");
  };



  //search functiionality
  const data = [
    {
      id: 1,
      name: "kayoola Evs",
      link: "/kayoola-evs",
    },
    { id: 2, name: "kayoola Coach", link: "/kayoola-coach" },
    { id: 3, name: "kayoola Chargers" },
  ];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Fragment>
      <div className="md:w-full w-[100dvw] md:px-0 font-poppins md:flex justify-center overscroll-none  text-[1.3rem] relative float-start ">
        <div
          className={`md:hover:bg-white h-auto w-full hover:text-black relative md:flex justify-between md:w-11/12  rounded-2xl md:mt-1 mt-0 ${
            isScrolled
              ? "bg-white shadow-xl transition ease-in duration-200"
              : "bg-transparent transition ease-out duration-200  text-white"
          }`}
        >
          {/* LOGO */}
          <div className="md:w-3/12 w-full flex justify-between items-center px-4 ">
            {" "}
            <Link to="/">
              <span className=" text-white relative z-10 text-3xl">
                <img
                  className="w-10  h-10 object-cover object-center"
                  src={icon}
                  alt="KMC"
                />
              </span>
            </Link>
            <button
              className=" md:hidden  p-4 rounded-full"
              style={{ transition: "all 4s ease" }}
              onClick={handleMenuBar}
            >
              <IoMdMenu
                className={`text-black text-3xl ${
                  isScrolled ? "" : "text-white"
                }`}
              />
            </button>
          </div>

          {/* SiteMap */}
          <div className="md:flex  px-4 md:px-0 justify-center items-center w-6/12">
            <ul className="md:flex lg:gap-[2rem] gap-[0.75rem] justify-around lg:justify-center ">
              <Link
                className="hidden md:block
                 cursor-pointer hover:text-white-500
                  hover:font-semibold text-base py-4 hover:text-red-400 transition-colors duration-200" //hover:border-[#d91c5c]  hover:border-l-2 hover:border-r-2
                onMouseEnter={handleMouseEnter}
                onMouseLeave={() => setIsHovered(false)}
              >
                Products
                <div className="font-normal">
                  {/* {isHovered && ( */}
                  <div>
                    <ul
                      className={`shadow-lg flex justify-center items-center absolute ${
                        fade ? "opacity-40" : "opacity-100"
                      }  rounded-br-2xl rounded-bl-2xl    left-0 ease-in-out   md:w-full text-black
                       bg-white transition-all duration-300 overflow-hidden ${
                         isHovered ? "h-[12rem] block " : "h-0 "
                       }`}
                      onMouseEnter={() => setIsHovered(true)}
                    >
                      <Products />
                    </ul>
                  </div>
                  {/* )} */}
                </div>
              </Link>
              <li
                className="hidden md:block
               cursor-pointer hover:text-white-500
                hover:font-semibold text-base py-4   hover:text-red-400 transition-all duration-200" //hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c]
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={() => setIsServices(false)}
              >
                Services
                {/* services */}
                <div className="font-normal">
                  <div>
                    <ul
                      className={`shadow-lg flex justify-center items-center absolute ${
                        fade ? "opacity-40" : "opacity-100"
                      }  rounded-br-2xl rounded-bl-2xl    left-0    md:w-full text-black
                       bg-white transition-all duration-300 overflow-hidden ${
                         isServices ? "h-[12rem] block " : "h-0 "
                       }`}
                      onMouseEnter={() => setIsServices(true)}
                    >
                      <ImageSlider />
                    </ul>
                  </div>
                </div>
              </li>
              <li
                className="hidden md:block
               cursor-pointer hover:text-white-500
                hover:font-semibold text-base py-4 hover:text-red-400 transition-all duration-200 " //hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c]
                onMouseEnter={handleMouseEnterDiscover}
                onMouseLeave={() => setIsDiscoverMore(false)}
              >
                Discover More
                {/* Discover More */}
                <div className="font-normal">
                  <div>
                    <ul
                      className={`shadow-lg flex justify-center items-center ${
                        fade ? "opacity-40" : "opacity-100"
                      } absolute  rounded-br-2xl rounded-bl-2xl    left-0 ease-in-out   md:w-full text-black
                       bg-white transition-all duration-300 overflow-hidden ${
                         isDiscoverMore ? "h-[12rem] block " : "h-0 "
                       }`}
                      onMouseEnter={() => setIsDiscoverMore(true)}
                    >
                      <DiscoverMore />

                      {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                    </ul>
                  </div>
                </div>
              </li>

              <Link
                to="/shop"
                className="hidden md:block
               cursor-pointer hover:text-white-500
                hover:font-semibold text-base py-4 hover:text-red-400 transition-all duration-200 " //hover:border-l-2 hover:border-r-2 hover:border-[#d91c5c]
              >
                Shop
              </Link>
            </ul>
          </div>

          {/* Functionality-Login,Logout,Search */}
          <div className="mx-4 overflow-y-hidden overscroll-none w-3/12 flex ">
            <button
              className=" py-4 lg:px-6 px-2 hidden md:block"
              onClick={() => {
                setQuery(!query);
              }}
            >
              <FaSearch className="text-lg" />
            </button>
            {query && (
              <div
                id="scale"
                className="shadow-lg absolute p-4  left-4   md:w-full text-black rounded-lg top-[3.5rem] bg-white hover:transition duration-700 ease-in-out"
                onMouseLeave={() => setQuery(false)}
              >
                <input
                  type="search"
                  name=""
                  id=""
                  className="bg-gray-100 w-full border-none"
                  placeholder="🏸 Search Here"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  // onClick={handleQuery}
                />
                <div id="template">
                  {data
                    .filter((val) => {
                      if (searchTerm == "") {
                        return <div>Not found</div>;
                      } else if (
                        val.name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .slice(0, 2)
                    .map((val) => (
                      <div key={val.id} className="block text-base">
                        <Link to={val.link}>{val.name}</Link>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* MenuBar */}

            <div id="menu-parent" className="overflow-visible text-white">
              {showMenu && (
                <div
                  className="absolute overflow-hidden top-0 left-0 w-full h-[120svh] z-[110]   md:hidden bg-[#1f1f1f]"
                  style={{ transition: "all 0.6s ease" }}
                >
                  <div
                    id="menu-scale"
                    style={{ transition: "all 4s ease-out" }}
                    className="relative   w-full h-auto"
                  >
                    <div
                      onClick={handleMenuBar}
                      className="  flex items-end flex-col  cursor-pointer "
                    >
                      <IoMdClose className="mx-7 mt-5 text-3xl" />
                    </div>
                    <div className=" h-full mt-8 px-8">
                      <ul>
                        <li
                          className="pt-6 cursor-pointer transition-all duration-200 "
                          onClick={() => setProducts(!products)}
                        >
                          <div className="flex">
                            <p>Products</p>{" "}
                            <div
                              className={`flex px-4 items-center transition-all duration-200 ${
                                products ? " rotate-90" : ""
                              }`}
                            >
                              <MdOutlineArrowForwardIos />
                            </div>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              products
                                ? "max-h-screen opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            {products && (
                              <ul className="px-6 text-lg transition-all duration-200">
                                <Link onClick={handleMenuBar} to="/details-evs">
                                  Kayoola Evs
                                </Link>
                                <br />
                                <Link
                                  onClick={handleMenuBar}
                                  to="/details-coach"
                                >
                                  Kayoola Coach
                                </Link>
                                <br />
                                <Link onClick={handleMenuBar} to="/chargers">
                                  {" "}
                                  Chargers
                                </Link>
                              </ul>
                            )}
                          </div>
                        </li>
                        <li
                          className="pt-6 cursor-pointer"
                          onClick={() => setServices(!services)}
                        >
                          <div className="flex">
                            <p>Services</p>{" "}
                            <div
                              className={`flex px-4 items-center transition-all duration-200 ${
                                services ? " rotate-90" : ""
                              }`}
                            >
                              <MdOutlineArrowForwardIos />
                            </div>
                          </div>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              services
                                ? "max-h-screen opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            {services && (
                              <ul className="px-6 text-lg">
                                <Link
                                  onClick={handleMenuBar}
                                  to="/contract-manufacturing"
                                >
                                  Contract Manufacturing
                                </Link>
                                <br />
                                <Link
                                  onClick={handleMenuBar}
                                  to="/product-support"
                                >
                                  Product Support
                                </Link>
                                <br />
                                <Link
                                  onClick={handleMenuBar}
                                  to="/engineering-services"
                                >
                                  Engineering Services
                                </Link>
                                <br />
                                <Link
                                  onClick={handleMenuBar}
                                  to="/vehicle-hire"
                                >
                                  Vehicle Hire
                                </Link>
                              </ul>
                            )}
                          </div>
                        </li>
                        <li className="py-6 ">
                          <p id="menu-parent">Discover More</p>

                          <ul className="cursor-pointer px-6 text-lg">
                            <li onClick={() => setCompany(!company)}>
                               <div className="flex">
                          <p>Company</p> <div className={`flex px-4 items-center transition-all duration-200 ${company ? " rotate-90":""}`}><MdOutlineArrowForwardIos /></div>
                            </div>
                            <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            company ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
                              {company && (
                                <ul className="flex flex-col text-base px-6 gap-1 py-2">
                                  <Link onClick={handleMenuBar} to="/about">
                                    About Us
                                  </Link>
                                  <Link onClick={handleMenuBar} to="/career">
                                    Career
                                  </Link>
                                  <Link onClick={handleMenuBar} to="/reports">
                                    Annual Report
                                  </Link>
                                  <Link onClick={handleMenuBar} to="/plants">
                                    Plants
                                  </Link>
                                  <Link onClick={handleMenuBar} to="/concepts">
                                    Concept Vehicles
                                  </Link>
                                </ul>
                              )}
                              </div>
                            </li>

                            <li onClick={() => setMedia(!media)}>
                              Media
                              {media && (
                                <ul className="flex flex-col text-base px-6 gap-1 py-2">
                                  <Link>New Press</Link>
                                  {/* <Link>Blogs</Link> */}
                                  <Link>Podcast</Link>
                                  {/* <Link>Invest</Link> */}
                                </ul>
                              )}
                            </li>
                            <li onClick={() => setResources(!resources)}>
                              Support
                              {resources && (
                                <ul className="flex flex-col text-base px-6 gap-1 py-2">
                                  <Link onClick={handleMenuBar} to="*">
                                    Service Location
                                  </Link>
                                  <Link onClick={handleMenuBar} to="*">
                                    Charging Location
                                  </Link>
                                  <Link onClick={handleMenuBar} to="*">
                                    Spare Parts
                                  </Link>
                                </ul>
                              )}
                            </li>

                            <Link
                              to="/shop"
                              onClick={() => setSupport(!support)}
                            >
                              Shop
                            </Link>
                          </ul>
                        </li>
                        <div className="flex gap-2">
                          <Link
                            onClick={handleMenuBar}
                            className="bg-white text-black rounded-lg text-base py-3 px-8"
                            to="/sign-up"
                          >
                            <button>Sign Up</button>
                          </Link>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {user ? (
              <div className="hidden md:flex gap-4">
                <Link
                  className="hidden  rounded-full  relative  md:flex px-[1.1rem]  cursor-pointer hover:text-white-500 hover:underline hover:font-semibold text-base py-4  active hover:transition-all ease-out"
                  onClick={handleMouseEnterAuth}
                  // onMouseLeave={handleMouseLeaveAuth}
                >
                  <button
                    style={
                      {
                        // backdropFilter: "blur(10px)",
                        // background: "rgba(0,0,0,0.2)",
                        // border: "1px solid black",
                      }
                    }
                    className="rounded-full hidden md:block"
                  >
                    <FaRegUser
                      className={`text-lg  ${isScrolled ? "text-black" : ""}`}
                    />
                  </button>
                </Link>

                <Link
                  to="/cart"
                  className={`hidden rounded-full  relative  md:flex px-[1.1rem]  cursor-pointer hover:text-white-500 hover:underline hover:font-semibold text-base py-4  active hover:transition-all ease-in`}
                  // onClick={handleMouseEnterAuth}
                  // onMouseLeave={handleMouseLeaveAuth}
                >
                  <button
                    style={
                      {
                        // backdropFilter: "blur(10px)",
                        // background: "rgba(0,0,0,0.2)",
                      }
                    }
                    className="  rounded-full hidden md:block"
                  >
                    <BsCart4
                      className={`text-lg   ${isScrolled ? "text-black" : ""}`}
                    />
                  </button>
                  <div className="bg-yellow-400 absolute text-center top-1 w-4 right-1 rounded-lg text-xs font-bold">
                    {uniqueItemCount}
                  </div>
                </Link>
              </div>
            ) : (
              <div className="md:flex gap-2 hidden items-center ">
                <Link
                  className=" py-2  text-base active:underline"
                  to="/login"
                >
                  Login
                </Link>
                <NavLink
                  to="/sign-up"
                  className=" py-2 md:px-2  bg-white rounded-2xl text-black  text-base active:underline"
                >
                  SignUp
                </NavLink>
              </div>
            )}

            {/* services */}
            <div
              id="parent"
              className="absolute top-20 right-1 rounded-md  bg-white md:w-2/12 text-black"
            >
              {isAuth && (
                <div
                  style={isAuth ? { transition: "0.3s" } : ""}
                  className="shadow-lg p-4   rounded-lg"
                >
                  <ul className="flex flex-col  text-base  py-4">
                    {user ? (
                      <>
                        <div className="flex  justify-end">
                          <IoMdClose
                            className="text-lg cursor-pointer text-right"
                            onClick={() => setIsAuth(false)}
                          />
                        </div>

                        <li>Hello, {user.name}</li>
                        <Link onClick={handleLogout}>Logout</Link>

                        <Link to="/display">
                          Orders{" "}
                          <span className="bg-black/70 font-bold text-white text-xs px-1 rounded-full  ">{orderCount}</span>
                        </Link>
                      </>
                    ) : (
                      ""
                    )}

                    {/* <span className="border-r-2 border-gray-400">&nbsp;</span> */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Products */}
      {isAuth && (
        <div
          id="smooth"
          style={{ transition: "all 0.6s ease-in" }}
          onClick={() => setIsAuth(false)}
          className="fixed z-[-1] w-[100%] transition-transform transform duration-300 overflow-hidden bg-black opacity-25 backdrop-blur-50  h-[200dvh]"
        ></div>
      )}

<ConfirmationModal
        isVisible={isModalVisible}
        onConfirm={confirmRemove}
        onCancel={cancelRemove}
        message="Are you sure you want to logout?"
      />
    </Fragment>
  );
};

export default Navbar;
