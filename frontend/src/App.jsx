import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoachOrder from "./Pages/Products/KayoolaCoach/Order/Order";
import Shop from "./Pages/Shop/Main";
import About from "./Pages/DiscoverMore/About/Main";
import Reports from "./Pages/DiscoverMore/Reports/Main";
import CartPage from "./Pages/Shop/Cart/CartPage";
import Clubs from "./Pages/DiscoverMore/Clubs/Main";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import NotFound from "./Pages/NotFound";
import Concepts from "./Pages/DiscoverMore/Concepts/Main";
import Plant from "./Pages/DiscoverMore/Plant/Main";
import ContractManufacturing from "./Pages/Services/Contract Manufacturing/Main";
import Main from "./Pages/Services/Engineering Services/Main";
import VehicleHire from "./Pages/Services/Vehicle Hire/Main";
import ProductSupport from "./Pages/Services/Product Support/Main";
import Charger from "./Pages/Products/Charger/Main";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Context/ProtectedRoute";
import { useEffect } from "react";
import Navbar from "./Components/ui/Navbar";
import ModalOrder from "./Pages/Products/KayoolaEVS/Order/ModalOrder";

// import Headroom from "react-headroom";
import { CartProvider } from "./Context/CartContext";
import icon from "./assets/images/icon.png";
import ProductPage from "./Pages/Shop/ProductPage";
import ScrollToTop from "./Components/ScrollToTop";
import DisplayData from "./Pages/Products/KayoolaEVS/Order/DisplayData";
import CheckoutPage from "./Pages/Shop/Cart/CheckoutPage";

import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home"));
const KayoolaEVS = lazy(() => import("./Pages/Products/KayoolaEVS/Description/Main"));
const KayoolaCoach = lazy(() => import("./Pages//Products/KayoolaCoach/Description/Main"));
const EVSOrder = lazy(() => import("./Pages/Products/KayoolaEVS/Order/Main"));
const DetailsEVS = lazy(() => import("./Pages/Products/KayoolaEVS/Details/Main"));
const DetailsCoach = lazy(() => import("./Pages/Products/KayoolaCoach/Details/Details"));

import { OrderProvider } from "./Context/OrderContext";
import Career from "./Pages/DiscoverMore/Career/Main"

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      // Optional configuration options for AOS
    });
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <BrowserRouter>
            <div className={`fixed top-0 z-10 w-full `}>
              <Navbar />
            </div>

            <Suspense
              fallback={
                <div className="absolute z-[10] w-full flex justify-center items-center h-full bg-black">
                  <div id="spinner">
                    <img src={icon} alt="" />
                  </div>
                </div>
              }
            >
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kayoola-evs" element={<KayoolaEVS />} />
                <Route path="/kayoola-coach" element={<KayoolaCoach />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/details-evs" element={<DetailsEVS />} />
                <Route path="/details-coach" element={<DetailsCoach />} />
                <Route path="/concepts" element={<Concepts />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                {/* put back in protected route */}

                {/*  */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/coach/:id" element={<CoachOrder />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/evs/:id" element={<EVSOrder />} />

                  <Route path="/display" element={<DisplayData />} />
                </Route>
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/shop" element={<Shop />} />

                <Route path="/plants" element={<Plant />} />
                <Route path="/vehicle-hire" element={<VehicleHire />} />


                <Route path="/career" element={<Career />} />

                <Route path="/about" element={<About />} />

                <Route path="/reports" element={<Reports />} />
                <Route path="/modal-order" element={<ModalOrder />} />
                <Route path="/clubs" element={<Clubs />} />

                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/engineering-services" element={<Main />} />
                <Route
                  path="/contract-manufacturing"
                  element={<ContractManufacturing />}
                />
                <Route path="/vehicle-hire" element={<VehicleHire />} />
                <Route path="/product-support" element={<ProductSupport />} />
                <Route path="/chargers" element={<Charger />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
