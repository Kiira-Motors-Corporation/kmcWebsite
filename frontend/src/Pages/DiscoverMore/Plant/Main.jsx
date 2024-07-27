import gradient from './assets/images/back.png';
import fore from './assets/images/fore.png';
import plant_vid from './assets/images/plant_vid.png';
import plant from './assets/images/plant.png';
import map from './assets/images/map.png';
import UpdateSlider from './Updates';
import Footer from '../../../Components/ui/Footer';

const Plants = () => {

  return (
    <div className="font-poppins">

      <div
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundPosition:'center',
          objectFit: 'cover',
        }}
        className="lg:h-[100vh] md:h-[50dvh] relative"
      >
        <center className='flex items-center h-full justify-center '>
        <p className=" md:font-bold font-medium  text-3xl">
          Explore the Vehicle Plants
        </p>
        </center>
        <img src={fore} alt="" className="absolute opacity-50 h-full inset-0 object-cover   w-full object-center" />



      </div>
      <div className="lg:h-[100vh] md:h-[70dvh]  md:flex justify-between items-center mx-[7%]">
        <span className="w-4/12 ">
          <p className="font-medium md:text-3xl text-2xl py-6">Kiira Vehicle Plant (KVP)</p>
          <p className="text-base">
            The Kiira Vehicle Plant (KVP) is a state-of-the-art manufacturing facility situated on 100 acres in the Jinja Industrial and Business Park. Operated by Kiira Motors Corporation (KMC), KVP is dedicated to developing, producing, and selling sustainable mobility solutions for the region and all of Africa.
          </p>
        </span>
        <span>
          <img className="lg:w-[35rem] md:w-[25rem] md:py-0 py-4" src={plant_vid} alt="" />
        </span>
      </div>
      <div className="md:h-[100vh] md:mb-[10rem]">
        <UpdateSlider />
      </div>
      <div className="h-[50vh] text-white px-[7%] bg-black">
        <div className="md:flex w-full h-full justify-center pt-[5%] items-start gap-8 ">
          <p className="md:text-3xl w-6/12 text-2xl font-bold">
            Mobility Industrial and  Business Park (MITP)
          </p>
          <p className="md:w-4/12  text-base">
            Government through Kiira Motors Corporation purchased two (2) square miles (1,280 acres) of land for setting up the Uganda Eco - Automotive Industrial & Technology Park to support a wide range of investments in motor vehicle parts manufacturing, vehicle testing, and automotive technology innovation enterprises. The MITP is in Bbaale, Kayunga District Central Uganda.
          </p>
        </div>
      </div>
      <div
        className="md:h-[100vh] h-[70dvh]"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundPosition: 'center',
          objectFit: 'cover',
        }}
      ></div>
      <div
        className="md:h-[100vh] h-[70dvh]"
        style={{
          backgroundImage: `url(${map})`,
          backgroundPosition: 'center',
          objectFit: 'cover',
        }}
      ></div>
      <div className="h-auto flex justify-center md:text-center text-justify items-center py-[10rem] mx-[7%] ">
        {" "}
        The Uganda Eco - Mobility Industrial and Technology Park (MITP) is one of the <br className='hidden md:block' />strategic Program Projects in Uganda’s Third National Development Plan (NDPIII)<br /> 2020/21 - 2024/25 in line with the overall theme of Sustainable Industrialization for <br /> inclusive growth, employment, and sustainable wealth creation.
      </div>
      <Footer />
    </div>
  );
};

export default Plants;
