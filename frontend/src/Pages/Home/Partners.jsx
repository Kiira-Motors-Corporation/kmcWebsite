import a from "../../assets/images/partners/NEC.png";
import b from "../../assets/images/partners/Luwero.png";
import c from "../../assets/images/partners/Gmatch.png";

const Part = () => {
  return (
    <div className="px-4 bg-white  h-auto  md:px-[6rem] md:py-[7%] py-[1rem]">
      <center>
        <div className="text-[2rem]  font-medium py-3 mb-4">
          Strategic Partners
        </div>
      </center>

      <center data-aos="fade-down" data-aos-once="true" data-aos-duration="800">
        <div className="md:text-base text-lg  py-3  mb-4">
          Kiira Motors Corporation collaborates with industry-leading partners
          to <br /> deliver innovative and sustainable mobility solutions.
        </div>
      </center>

      <div className="flex justify-center items-center md:flex-wrap">
        <div className=" text-6xl rounded-xl overflow-hidden  pt-3  mx-5 ">
          <img src={a} alt="" />
        </div>

        <div className=" text-6xl rounded-xl overflow-hidden  pt-3  mx-5 text-gray-500">
          <img src={b} alt="" />
        </div>
        <div className=" text-6xl rounded-xl overflow-hidden  pt-3  mx-5 text-gray-500">
          <img src={c} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Part;
