import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Heading from "../components/home/Heading";

import { useState } from "react";

import BooksCard from "../components/home/BooksCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Heading />
    </div>
  );
};

export default Home;
