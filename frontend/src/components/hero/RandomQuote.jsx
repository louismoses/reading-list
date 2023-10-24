import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const RandomQuote = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://type.fit/api/quotes").then((res) => res.json()),
  });

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return "An error has occured:" + error.message;
  }

  const randomIndex = Math.floor(Math.random() * data.length);
  const { text, author } = data[randomIndex];

  const [quoteAuthor, quoteType] = author.split(",");

  console.log(data);
  return (
    <div>
      <h2>{text}</h2>
      <h3>~{quoteAuthor}</h3>
    </div>
  );
};

export default RandomQuote;
