import { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "./Spinner";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[Math.floor(Math.random() * 16)].text);
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <h2>{quote}</h2>
    </section>
  );
};

export default Hero;
