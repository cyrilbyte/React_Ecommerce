import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import ComparePages from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";
import Vj from "./pages/Vj";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blog" element={<Blog />} />
            <Route path="comparepage" element={<ComparePages />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="vj" element={<Vj />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="refundpolicy" element={<RefundPolicy />} />
            <Route path="shippingpolicy" element={<ShippingPolicy />} />
            <Route path="termsandconditions" element={<TermAndConditions />} />
            <Route path="product" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
