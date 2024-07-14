import c from "../assets/images/c.jpg";
import Footer from "../Components/ui/Footer";

const OrdersList = () => {
  return (
    <>

      <div className="flex h-[100vh]  relative z-[-1] top-[8rem] left-[25rem] gap-[8rem]">
        <div className="flex gap-[8rem]">
          <h1 className="text-2xl">Hi John</h1>
          <span>
            <h1 className="text-2xl font-semibold">Cart</h1>
            <p className="text-2xl">List of your orders</p>
          </span>
        </div>
        <div>
          <div className="flex gap-[2rem] text-2xl font-semibold items-center border-b-2 w-[500px]">
            <img
              className="w-[15rem]"
              style={{ transform: "scaleX(-1)" }}
              src={c}
              alt=""

            />
            <p>Kayoola EVs</p>
          </div>
          <div className="flex gap-[2rem] text-2xl font-semibold items-center border-b-2 w-[500px]">
            <img
              className="w-[15rem]"
              style={{ transform: "scaleX(-1)" }}
              src={c}
              alt=""
              srcset=""
            />
            <p>Kayoola EVs</p>
          </div>
          <div className="flex gap-[2rem] text-2xl font-semibold items-center border-b-2 w-[500px]">
            <img
              className="w-[15rem]"
              style={{ transform: "scaleX(-1)" }}
              src={c}
              alt=""
              srcset=""
            />
            <p>Kayoola EVs</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OrdersList;
