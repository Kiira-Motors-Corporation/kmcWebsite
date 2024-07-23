import vid from "../../assets/videos/new_video.mp4";
import caption from "./assets/images/caption.png";

const ParallaxVideoComponent = () => {
  return (
    <div className="relative ">
      <span className="absolute w-full h-full bg-black/50"></span>
      <div id="ParallaxVideo" className="relative lg:h-[100vh] h-auto py-[50px]">
      <video
        autoPlay
        muted
        loop
        src={vid}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <span className="text-white relative flex flex-col gap-[4rem] px-[7%] items-start justify-center w-full h-full">
        <p className="text-3xl font-bold md:w-6/12">
          The Future is Green, The Future is Now.
        </p>
        <p className="text-base md:w-6/12">
          Join us at Kiira Motors Corporation&apos;s Sustainable Mobility Expo,
          where innovation and sustainability converge to shape the future of
          transportation in Africa. Under the inspiring tagline, “The Future
          is Green, The Future is Now,”
        </p>
        <p className="font-bold text-2xl">1000+</p>
        <img className="w-3/12" src={caption} alt="" />
      </span>
    </div>
    </div>
  );
};

export default ParallaxVideoComponent;
