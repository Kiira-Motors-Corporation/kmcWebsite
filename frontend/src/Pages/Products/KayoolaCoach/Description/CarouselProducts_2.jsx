import cover from "../assets/images/cover.png";

const CarouselProducts = () => {
  return (
    <div
      id="transparent"
      className="text-white h-[50dvh] md:h-[100vh] "
    >
       <div className="flex flex-col absolute z-1  px-[7%] justify-between h-[50dvh] md:h-[90vh]  w-full group">
       <div id="heading">
       <div className="text-2xl pt-[5rem] md:pt-[10rem] lg:text-4xl lg:pt-[7rem] font-bold">
            Premium Comfort for <br />
            Long-Distance Travel
          </div>
        </div>
        <div className="w-full h-auto pb-[3rem] ">
          <div className="flex justify-between  w-full">
            <div className="hidden text-sm md:block">
              <h1 className="text-2xl">Kayoola Coach</h1>
              <p className="w-7/12">
              Experience luxury and innovation with the Kayoola Diesel <br />{" "}
              Coach™, designed for comfortable, long-distance travel across
              <br /> Africa.
              </p>

            </div>

            <div className="font-bold flex items-center gap-4 justify-end   text-[1.2rem] md:text-lg">
              <ul className="">
                <li>340hp</li>
                <li className="font-normal text-sm  md:text-[1.3rem] text-gray-400">
                  Power
                </li>
              </ul>

              <ul>
                <li>61</li>
                <li className="font-normal text-sm md:text-[1.3rem] text-gray-400">
                  Capacity
                </li>
              </ul>

              <ul>
                <li>500L</li>
                <li className="font-normal text-sm md:text-[1.3rem] text-gray-400">
                  Fuel Tank Capacity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full relative   z-[-1]">
          <img src={cover} className="object-cover w-full h-full object-center" alt=""  />
        </div>
    </div>
  );
};

export default CarouselProducts;

{
  /* <div className="flex top-4 justify-center py-2 ">
{slides.map((slide, slideIndex) => (
  <div
    key={slideIndex}
    onClick={() => goToSlide(slideIndex)}
    className="text-2xl cursor-pointer"
  >
    <RxDotFilled />
  </div>
))}
</div> */
}

{
  /* <div id="description">
            <p className="font-medium text-[1.3rem] md:text-center">
              The Kayoola Coach is a novel and innovative public transport
              solution for
              <br /> comfortable long distance and intercity mobility. It is
              available with either an Internal <br />
              Combustion Engine (ICE) or Electric powertrain. The Kayoola Coach
              is infused with the <br />
              Brand DNA that includes iclusive design for Sub-Saharan Africa
              (Panoramic design, visual <br /> screens);Afro centric Material
            </p>
          </div> */
}

{
  /* <div className=" text-black md:pb-[200px] pt-4  text-2xl font-bold md:absolute  bottom-3 right-[100px]">
Kayoola Coach
<br />
<p className="font-medium text-[1.3rem]">
  KMC also offers the Kayoola Coach
  <br /> a High Floor Intercity Bus, with a <br />
  ranging from 31-70
  <br /> passengers
</p>
</div>

  <div
            id="image"
            className="md:w-[850px] relative top-[100px]   z-[-2] bg-black"
          >
            <img style={{ transform: "scaleX(-1)" }} src={c} alt="" />
          </div>

          */
}
