import RandomQuote from "./hero/RandomQuote";

const Hero = () => {
  return (
    <section>
      <div className="text-center h-[50vh] flex place-items-center justify-center hero">
        <div>
          <RandomQuote />
        </div>
      </div>
    </section>
  );
};

export default Hero;
