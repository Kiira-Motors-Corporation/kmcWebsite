import UpdateSlider from "./Updates";
import Footer from "../../Components/ui/Footer";
import back from "../Plant/assets/images/back.png"


const Reports = () => {
  return (
    <div className="font-poppins">
      <div style={{backgroundImage:`url(${back})`,backgroundPosition:'center',objectFit:'cover'}} className=" flex flex-col justify-around h-[100vh]  md:pt-[5%]  px-[10vw] ">
        <div className="md:mt-0 mt-[25%]">
        <p className="text-lg font-semibold md:py-[1rem]">Annual reports</p>
        <h1 className="md:text-3xl text-2xl font-bold">2023 Annual Report</h1>
        </div>

        <span className=" md:flex  md:justify-evenly w-full">


          <div className="md:flex  md:w-6/12 flex-col">
            <p className="text-base  md:py-[1rem]">
              Kiira Motors Corporation is a State Enterprise <br /> established
              to champion value addition in the nascent <br /> Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>

            <p className="text-base hidden md:block  ">
              Kiira Motors Corporation is a State Enterprise  established
              to champion value addition in the nascent  Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>
            <span className="text-left">
              <p className="text-sm underline md:text-base font-semibold md:py-0 py-4">Download this report</p>
              <p className="text-lg font-semibold">2023 Annual report</p>
            </span>
          </div>
          <div className="bg-gray-200 w-[20rem] mt-[4rem] md:mt-0 h-[15rem] md:h-[20rem] rounded-2xl"></div>
        </span>

        <hr className="md:mt-7" />
      </div>

      <div style={{backgroundImage:`url(${back})`,backgroundPosition:'center',objectFit:'cover'}} className=" flex flex-col justify-around h-[100vh]  md:pt-[5%]  px-[10vw] ">
        <div className="md:mt-0 mt-[25%]">
        <p className="text-lg font-semibold md:py-[1rem]">Annual reports</p>
        <h1 className="md:text-3xl text-2xl font-bold">2023 Annual Report</h1>
        </div>

        <span className=" md:flex  md:justify-evenly w-full">


          <div className="md:flex  md:w-6/12 flex-col">
            <p className="text-base  md:py-[1rem]">
              Kiira Motors Corporation is a State Enterprise <br /> established
              to champion value addition in the nascent <br /> Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>

            <p className="text-base hidden md:block  ">
              Kiira Motors Corporation is a State Enterprise  established
              to champion value addition in the nascent  Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>
            <span className="text-left">
              <p className="text-sm underline md:text-base font-semibold md:py-0 py-4">Download this report</p>
              <p className="text-lg font-semibold">2023 Annual report</p>
            </span>
          </div>
          <div className="bg-gray-200 w-[20rem] mt-[4rem] md:mt-0 h-[15rem] md:h-[20rem] rounded-2xl"></div>
        </span>

        <hr className="md:mt-7" />
      </div>

      <div style={{backgroundImage:`url(${back})`,backgroundPosition:'center',objectFit:'cover'}} className=" flex flex-col justify-around h-[100vh]  md:pt-[5%]  px-[10vw] ">
        <div className="md:mt-0 mt-[25%]">
        <p className="text-lg font-semibold md:py-[1rem]">Annual reports</p>
        <h1 className="md:text-3xl text-2xl font-bold">2023 Annual Report</h1>
        </div>

        <span className=" md:flex  md:justify-evenly w-full">


          <div className="md:flex  md:w-6/12 flex-col">
            <p className="text-base  md:py-[1rem]">
              Kiira Motors Corporation is a State Enterprise <br /> established
              to champion value addition in the nascent <br /> Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>

            <p className="text-base hidden md:block  ">
              Kiira Motors Corporation is a State Enterprise  established
              to champion value addition in the nascent  Motor Vehicle
              Industry in Uganda through Technology Transfer
            </p>
            <span className="text-left">
              <p className="text-sm underline md:text-base font-semibold md:py-0 py-4">Download this report</p>
              <p className="text-lg font-semibold">2023 Annual report</p>
            </span>
          </div>
          <div className="bg-gray-200 w-[20rem] mt-[4rem] md:mt-0 h-[15rem] md:h-[20rem] rounded-2xl"></div>
        </span>

        <hr className="md:mt-7" />
      </div>
      <UpdateSlider />
      <Footer />
    </div>
  );
};

export default Reports;
