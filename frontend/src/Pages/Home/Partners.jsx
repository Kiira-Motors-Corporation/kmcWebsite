import a from "../../assets/images/partners/NEC.png";
import b from "../../assets/images/partners/Luwero.png";
import c from "../../assets/images/partners/Gmatch.png";

const Part = () => {
  return (
    <div className="px-4  bg-white  h-auto  md:px-[6rem]  p">
      <center>
        <div className="text-2xl md:text-3xl  font-medium py-3 mb-4">
          Strategic Partners
        </div>
      </center>

      <center data-aos="fade-down" data-aos-once="true" data-aos-duration="800">
        <div className="md:text-base text-sm  py-3  mb-4">
          <p className="w-10/12">
          Kiira Motors Corporation collaborates with industry-leading partners
          to  deliver innovative and sustainable mobility solutions.
            </p>
        </div>
      </center>

      <div className="flex justify-center items-center lg:flex-wrap">
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
