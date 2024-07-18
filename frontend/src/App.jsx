import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoachOrder from "./Pages/KayoolaCoach/Order";
import OrdersList from "./Pages/OrdersList";
import Shop from "./Pages/Shop/Main";
import About from "./Pages/About/Main";
import Autoparts from "./Pages/Shop/AutoPart";
import Reports from "./Pages/Reports/Reports";
import CartPage from "./Pages/Cart/CartPage";
import Blog from "./Pages/Shop/Blog";
import Clubs from "./Pages/Clubs/Clubs";
import Projects from "./Pages/Projects";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import NotFound from "./Pages/NotFound";
import Concepts from "./Pages/Products/Concepts";
import Plant from "./Pages/Plant";
import ContractManufacturing from "./Pages/Services/Contract Manufacturing/Main";
import Main from "./Pages/Services/Engineering Services/Main";
import VehicleHire from "./Pages/Services/Vehicle Hire/Main";
import ProductSupport from "./Pages/Services/Product Support/Main";
import Charger from "./Pages/Charger/Main";
import { AuthProvider } from "./Components/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Logout from "./Components/Logout";
import { useEffect } from "react";
import Navbar from "./Components/ui/Navbar";

// import Headroom from "react-headroom";
import { CartProvider } from "./Pages/Cart/CartContext";
import icon from "./assets/images/icon.png";
import ProductPage from "./Pages/Shop/ProductPage";
import ScrollToTop from "./Components/ScrollToTop";
import DisplayData from "./Pages/KayoolaEVS/DisplayData";

import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home"));
const KayoolaEVS = lazy(() => import("./Pages/KayoolaEVS/Main"));
const KayoolaCoach = lazy(() => import("./Pages/KayoolaCoach/Main"));
const EVSOrder = lazy(() => import("./Pages/KayoolaEVS/Order"));
const DetailsEVS = lazy(() => import("./Pages/KayoolaEVS/Details"));
const DetailsCoach = lazy(() => import("./Pages/KayoolaCoach/Details"));

import { OrderProvider } from "./Pages/KayoolaEVS/OrderContext";
import Career from "./Pages/Career/Main"

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

                {/* put back in protected route */}

                {/*  */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/coach/:id" element={<CoachOrder />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/evs/:id" element={<EVSOrder />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/display" element={<DisplayData />} />
                </Route>
                <Route path="/shop" element={<Shop />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/plants" element={<Plant />} />
                <Route path="/vehicle-hire" element={<VehicleHire />} />
                <Route path="/orders-list" element={<OrdersList />} />

                <Route path="/career" element={<Career />} />

                <Route path="/about" element={<About />} />
                <Route path="/auto-parts" element={<Autoparts />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/project" element={<Projects />} />
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
