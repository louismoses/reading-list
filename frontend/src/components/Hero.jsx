import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import axios from "axios";

const Hero = () => {
  const [quotes, setQuotes] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setQuotes(response.data);
        console.log(response.data[0].text);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  }, []);

  return <section></section>;
};

export default Hero;
