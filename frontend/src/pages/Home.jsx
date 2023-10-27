import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookMenu from "../components/BookMenu";
import BooksCard from "../components/home/BooksCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <BookMenu />
      <BooksCard />
      <Footer />
    </main>
  );
};

export default Home;
