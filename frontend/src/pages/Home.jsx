import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookMenu from "../components/BookMenu";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookMenu />
      <BooksCard />
    </main>
  );
};

export default Home;
