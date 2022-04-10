import React from "react";

// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components
import Navbar from "../components/navbar/Navbar.js";
import Footer from "../components/footer/Footer.js";
import Header4 from "../components/headers/Header4.js";
import Feature6 from "../components/features/Feature6.js";
import Feature6_1 from "../components/features/Feature6_1.js";
import Feature1 from "../components/features/Feature1.js";
import Pricing5 from "../components/pricings/Pricing5.js";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Navbar type="transparent" />
      <div className="wrapper">
        <Header4 />
        <Feature6 />
        <Feature6_1 />
        <Feature1 />
        <Pricing5 />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
