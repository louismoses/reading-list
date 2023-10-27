import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookMenu from "../components/BookMenu";
import BooksCard from "../components/home/BooksCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="pb-20">
      <Navbar />
      <Hero />
      <BookMenu />
      <BooksCard />
      <Footer />
    </main>
  );
};

export default Home;
