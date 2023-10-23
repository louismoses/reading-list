import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";

import axios from "axios";
import Hero from "../components/Hero";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="h-full w-full">
        <p>
          Effortlessly compile your reading and media wishlist while keeping
          tabs on your completed items.
        </p>
        <button>ADD</button>
        <hr />
        {loading ? (
          <Spinner />
        ) : (
          <div className="container">
            {books.map((item) => (
              <h2>{item.title}</h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
