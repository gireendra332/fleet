import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Crousel from "../components/Crousel";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Crousel />
      </div>
      <div className='m-3'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
