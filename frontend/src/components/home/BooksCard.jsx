import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";
import BookSingleCard from "./BookSingleCard";

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
    <>
      <section className="max-w-screen-2xl mx-auto flex gap-6 flex-wrap md:px-3 md:py-2 lg:place-content-start place-content-center">
        {books.data.map((item) => (
          <BookSingleCard key={item._id} book={item} />
        ))}
      </section>
    </>
  );
};

export default BooksCard;
