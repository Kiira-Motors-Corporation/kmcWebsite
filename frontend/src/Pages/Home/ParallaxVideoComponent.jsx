import vid from "../../assets/videos/new_video.mp4";
import caption from "./assets/images/caption.png";

const ParallaxVideoComponent = () => {
  return (
    <div className="relative ">
      <span className="absolute w-full h-full bg-black/50"></span>
      <div id="ParallaxVideo" className="h-[100vh] py-[50px] ">
        <video autoPlay muted loop src={vid} className="md:min-w-[100%] md:h-auto h-[100vh] fixed top-0 z-[-999]" />
        <span className="text-white relative flex flex-col gap-[4rem] px-[7%] items-start justify-center w-full h-full ">
          <p className="text-3xl font-bold md:w-6/12 ">
            The Future is Green, The Future is Now.
          </p>
          <p className="text-base md:w-6/12">
            Join us at Kiira Motors Corporation's Sustainable Mobility Expo,
            where innovation and sustainability converge to shape the future of
            transportation in Africa. Under the inspiring tagline, “The Future
            is Green, The Future is Now,”
          </p>

          <p className="font-bold text-2xl">1000+</p>
          <img className="w-3/12 " src={caption} alt="" />
        </span>
      </div>
    </div>
  );
};

export default ParallaxVideoComponent;
