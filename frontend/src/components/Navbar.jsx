import { FcReadingEbook, FcSearch } from "react-icons/fc";

const Navbar = () => {
  return (
    <section className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto ">
      <div className="flex place-items-center px-2 py-3 hover:translate-x-1 hover:bg-slate-50 cursor-pointer ">
        <FcReadingEbook className="text-5xl" />
        <h1 className="self-center text-2xl font-semibold whitespace-nowrap">
          Reading List
        </h1>
      </div>
      <div className="nav-menu px-2 py-3 gap-6 flex flex-wrap">
        <a
          href="#"
          className="flex gap-2 border p-2 rounded-lg bg-slate-200 hover:bg-slate-100"
        >
          <FcSearch className="text-2xl" />
          Search
        </a>
      </div>
    </section>
  );
};

export default Navbar;
