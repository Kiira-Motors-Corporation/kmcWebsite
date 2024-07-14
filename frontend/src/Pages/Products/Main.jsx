import coach_1 from "./assets/images/coach_1.png";
import coach_2 from "./assets/images/coach_2.png";
import gradient from "./assets/images/gradient.png";
import Footer from "../../Components/ui/Footer";

const Main = () => {
  return (
    <>

      <div
        className="md:h-[100vh] px-[2vh] pt-[10vh] md:px-[6rem] flex flex-col justify-center "
        style={{ backgroundImage: `url(${gradient})`,backgroundPosition:'center', objectFit:'cover' }}
      >
        <h1 className="text-2xl py-4 font-medium">
          12 METER KAYOOLA CNG CITY BUS
        </h1>
        <div
          className="flex border border-gray-400 rounded-t-2xl text-base justify-between items-center"
          id="content"
        >
          <span className="w-5/12">
            <img className='object-center object-cover' src={coach_1} alt="" />
          </span>
          <span>
            <ul>
              <li>Dimensions L*W*H</li>
              <li>Wheelbase</li>
              <li>Range</li>
              <li>Gross Vehicle Weight</li>
              <li>Battery Pack</li>
              <li>Power</li>
              <li>Carrying Capacity</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>12300(L)x 2,550(W)x 3,170</li>
              <li>7,500 mm</li>
              <li>300km</li>
              <li>19,500 kg</li>
              <li>350.1 KWhr</li>
              <li>200 kW</li>
              <li>80 (40 Seated + 40 Standing)</li>
            </ul>
          </span>
        </div>
      </div>

      <div className="md:h-[100vh] px-[2vh] md:px-[6rem] flex flex-col justify-center ">
        <h1 className="text-2xl py-4 font-medium">
          12 METER KAYOOLA CNG CITY BUS
        </h1>
        <div
          className="flex border rounded-t-2xl text-base justify-between items-center"
          id="content"
        >
          <span className="w-5/12">
            <img className='object-center object-cover' src={coach_2} alt="" />
          </span>
          <span>
            <ul>
              <li>Dimensions L*W*H</li>
              <li>Wheelbase</li>
              <li>Range</li>
              <li>Gross Vehicle Weight</li>
              <li>Battery Pack</li>
              <li>Power</li>
              <li>Carrying Capacity</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>12300(L)x 2,550(W)x 3,170</li>
              <li>7,500 mm</li>
              <li>300km</li>
              <li>19,500 kg</li>
              <li>350.1 KWhr</li>
              <li>200 kW</li>
              <li>80 (40 Seated + 40 Standing)</li>
            </ul>
          </span>
        </div>
      </div>

      <div className="md:h-[100vh] px-[2vh] md:px-[6rem] flex flex-col justify-center ">
        <h1 className="text-2xl py-4 font-medium">
          12 METER KAYOOLA CNG CITY BUS
        </h1>
        <div
          className="flex border rounded-t-2xl text-base justify-between items-center"
          id="content"
        >
          <span className="w-5/12">
            <img className='object-center object-cover' src={coach_1} alt="" />
          </span>
          <span>
            <ul>
              <li>Dimensions L*W*H</li>
              <li>Wheelbase</li>
              <li>Range</li>
              <li>Gross Vehicle Weight</li>
              <li>Battery Pack</li>
              <li>Power</li>
              <li>Carrying Capacity</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>12300(L)x 2,550(W)x 3,170</li>
              <li>7,500 mm</li>
              <li>300km</li>
              <li>19,500 kg</li>
              <li>350.1 KWhr</li>
              <li>200 kW</li>
              <li>80 (40 Seated + 40 Standing)</li>
            </ul>
          </span>
        </div>
      </div>

      <div className="md:h-[100vh] md:px-[6rem] px-[2vh]  flex flex-col justify-center ">
        <h1 className="text-2xl py-4 font-medium">
          12 METER KAYOOLA CNG CITY BUS
        </h1>
        <div
          className="flex border rounded-t-2xl text-base justify-between items-center"
          id="content"
        >
          <span className="w-5/12">
            <img loading="lazy" className='object-center object-cover' src={coach_2} alt="" />
          </span>
          <span>
            <ul>
              <li>Dimensions L*W*H</li>
              <li>Wheelbase</li>
              <li>Range</li>
              <li>Gross Vehicle Weight</li>
              <li>Battery Pack</li>
              <li>Power</li>
              <li>Carrying Capacity</li>
            </ul>
          </span>
          <span>
            <ul>
              <li>12300(L)x 2,550(W)x 3,170</li>
              <li>7,500 mm</li>
              <li>300km</li>
              <li>19,500 kg</li>
              <li>350.1 KWhr</li>
              <li>200 kW</li>
              <li>80 (40 Seated + 40 Standing)</li>
            </ul>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
