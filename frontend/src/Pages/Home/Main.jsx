// Home.js

import Carousel from "./CarouselTest2";
import SocialProof from "./SocialProof";
import Partners from "./Partners";
import Footer from "../../Components/ui/Footer";
import UpdateSlider from "./Updates";
import Introduction from "./Section_1";
import CardSlider from "./CardSlider";
import ParallaxVideoComponent from "./ParallaxVideoComponent";

const Main = () => {
  return (
    <div className="font-poppins  overscroll-y-none">
      <Carousel />
      <CardSlider />
      <Introduction />
      <Partners />
      <ParallaxVideoComponent />

      <SocialProof />
      <UpdateSlider />
      <Footer />
    </div>
  );
};

export default Main;
