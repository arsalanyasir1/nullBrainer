import React from 'react';
import Common from "./Common";
import home from "./images/home.jpg";

const Home = () =>  {
  return (
    <>
   <Common name="Grow your business with" imgsrc={home} visit="/services" btname="Get Started" />
    </>
  );
}

export default Home;
