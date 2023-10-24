import RandomQuote from "./hero/RandomQuote";

const Hero = () => {
  return (
    <section>
      <div className="text-center min-h-[30vh] flex place-items-center justify-center hero">
        <div>
          <RandomQuote />
        </div>
      </div>
    </section>
  );
};

export default Hero;
