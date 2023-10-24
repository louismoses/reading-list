import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const BooksCard = () => {
  const {
    isLoading,
    error,
    data: books,
  } = useQuery({
    queryKey: ["books"],
    queryFn: () =>
      fetch("http://localhost:3000/books").then((res) => res.json()),
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return "Error loading Books" + error.message;
  }

  return (
    <div>
      {books.data.map((item) => (
        <h2 key={item._id} className="text-4xl">
          {item.title}
        </h2>
      ))}
    </div>
  );
};

export default BooksCard;
