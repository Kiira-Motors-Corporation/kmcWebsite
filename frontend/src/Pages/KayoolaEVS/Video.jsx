import React from "react";
import videofile2 from "../../assets/videos/KMC.mp4";

const Video = () => {
  return (
    <div class="w-full h-auto md:px-[16rem] px-6 py-[3rem]">
      <video
        className="inset-0 object-cover w-full h-[50vh] md:h-full z-10 rounded-2xl"
        autoPlay
        muted
        loop
      >
        <source src={videofile2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
