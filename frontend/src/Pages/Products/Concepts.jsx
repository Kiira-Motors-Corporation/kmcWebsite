import coach_concept from "../../assets/images/concepts/coach_concept.png";
import evs from "../../assets/images/concepts/evs_concept.png";
import ev from "../../assets/images/concepts/ev_concept.png";
import gradient from "../../assets/images/order/back.png";
import ev_cover from "../../assets/images/concepts/ev_cover.png";
import evs_cover from "../../assets/images/concepts/evs_cover.png";
import coach_cover from "../../assets/images/concepts/coach_cover.png";
import Footer from "../../Components/ui/Footer";
import UpdateSlider from "./Updates";

const Concepts = () => {
  return (
    <div className="font-poppins ">

      <div
        className="lg:h-[100vh]   "
        style={{ backgroundImage: `url(${gradient})`,backgroundPosition:'center',objectFit:'cover' }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <div className="flex md:flex-row flex-wrap gap-6 lg:flex-nowrap justify-around  md:justify-center  w-full  md:gap-8">
          <p className="text-3xl text-center md:text-left font-semibold pt-[4rem] md:pt-[7rem]">
            Pioneering African
            <br /> Innovation
          </p>
          <p className="w-11/12 md:w-4/12 text-base  md:pt-[7rem] pb-[2rem] ">
            Discover the Kiira EV, Africa's first electric vehicle, launched on
            November 24, 2011. Experience the luxury of the 4-seater Kiira EVS
            and the eco-friendly innovation of the Kayoola Solar Bus,{" "}
            <span className="hidden md:block">
              Africa's first solar-powered bus. Embrace the future of
              sustainable mobility with Kiira Motors Corporation.
            </span>
          </p>
        </div>
        <div className="md:hidden py-4">
        <UpdateSlider />
        </div>

        <div className="hidden md:flex flex-wrap md:flex-nowrap justify-center items-center  ">
          <div
            className="w-[350px] md:rounded-none rounded-[2rem] h-[170px] md:h-[250px]"
            style={{
              backgroundImage: `url(${coach_concept})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              borderTopLeftRadius: "30px",
              borderEndStartRadius: "30px",
            }}
          ></div>
          <div
            className="w-[350px] md:rounded-none rounded-[2rem] h-[170px] md:h-[250px]"
            style={{
              backgroundImage: `url(${evs})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
            }}
          ></div>
          <div
            className="w-[350px] md:rounded-none rounded-[2rem] h-[170px] md:h-[250px]"
            style={{
              backgroundImage: `url(${ev})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              borderTopRightRadius: "30px",
              borderEndEndRadius: "30px",
            }}
          ></div>
        </div>
      </div>

      <div
        className="h-[100dvh] bg-black/10 relative "
        // style={{
        //   backgroundImage: `url(${ev_cover})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        //   objectFit: "cover",
        // }}
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="800"
      >
        <img
          src={ev_cover}
          alt=""
          className="absolute z-[-1] w-full h-full  object-cover object-top"
        />
        <div className="flex w-full h-full  gap-6  items-center flex-col pt-[1rem]">
          <p className="text-4xl font-bold">Kiira EV</p>
          <p className="w-11/12  sm:w-9/12 md:w-6/12 text-center  md:text-base">
            The Kiira EV is Africa’s first electric vehicle launched on 24th
            November 2011. It employs a simple battery electric vehicle
            powertrain consisting of an Energy storage bank,

               energy converter and an electric motor. It is powered by
              electricity which is stored in the battery bank through repetitive
              charging.
              <span className="hidden md:block "></span>
          </p>
        </div>
      </div>

      <div
        className="h-[100dvh] "
        style={
          {
            // backgroundImage: `url(${evs_cover})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // objectFit: "cover",
          }
        }
      >
        <img
          src={evs_cover}
          alt=""
          className="absolute z-[-1] w-full h-full  object-cover object-center"
        />
        <div className="flex w-full h-full  gap-6  items-center flex-col pt-[1rem] ">
          <p className="text-4xl font-bold">Kiira EVS</p>
          <p className="w-11/12  sm:w-9/12 text-center md:w-6/12  md:text-base">
            The Kiira EVS is a 4-Seater Executive Vehicle built off the Kiira EV
            SMACK Platform fitted with a 2 liter petrol engine, 5 speed
            automatic transmission and an exquisite beige interior trim.
          </p>
        </div>
      </div>

      <div
        className="h-[100dvh] "
        style={
          {
            // backgroundImage: `url(${coach_cover})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // objectFit: "cover",
          }
        }
      >
        <img
          src={coach_cover}
          alt=""
          className="absolute z-[-1] w-full h-full  object-cover object-center"
        />
        <div className="flex    w-full h-full  gap-6  items-center flex-col pt-[1rem]">
          <p className="text-4xl font-bold">Kayoola Solar Bus</p>
          <p className="w-11/12  sm:w-9/12 md:w-6/12 text-center  md:text-base">
            The first of its kind on the African continent. It relies on
            lithium-ion batteries to power an electric motor that is coupled to
            a 2-speed pneumatic shift transmission.{" "}

              This technology serves to conserve the environment and public
              health.
              <span className="hidden md:block"> </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Concepts;
