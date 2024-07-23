import cover from "./assets/images/cover.png";
import background from "./assets/images/background.png";
import Footer from "../../../Components/ui/Footer";

const Main = () => {
  return (
    <>
      <div
        className="h-auto md:h-auto gap-[4rem] py-[4rem] w-full flex flex-wrap md:flex-nowrap justify-center pt-[9rem] font-poppins px-[7%]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          objectFit: "cover",
        }}
      >
        <div id="main">
          <div className="lg:w-[22rem] md:w-[18rem]  text-white bg-[#555555] p-8 rounded-2xl">
            <h1 className="text-3xl md:text-2xl  font-medium">Product Support</h1>
            <p className="text-sm  py-8">
              Kiira Motors Corporation provides product support services to
              clients and customers using KMC products. Contact us to get the
              support you need.
            </p>
          </div>
        </div>
        <div className="md:w-6/12 w-11/12">
          <img
            src={cover}
            className="w-full object-cover object-center"
            alt=""
          />
        </div>
      </div>

      <div id="form" className="flex justify-center w-full py-[5rem]">
        <div className="md:w-10/12 w-11/12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.038771235777!2d33.2051834388891!3d0.5569143814312408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177e87060fb30669%3A0x1811778f26938482!2sKiira%20Vehicle%20Plant!5e0!3m2!1sen!2sug!4v1718021031648!5m2!1sen!2sug"
            className="rounded-2xl md:h-[90vh]"
            style={{ border: "0", width: "100%", height: "40vh" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
