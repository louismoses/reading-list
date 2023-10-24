import { ImBooks } from "react-icons/im";
import { BsBookshelf } from "react-icons/bs";
import { TbBooksOff } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";

const BookMenu = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-3 flex-wrap flex gap-6   lg:place-content-start md:px-2 place-content-center ">
      <div className=" flex items-center gap-1">
        <BsBookshelf className="text-2xl" /> All Books
      </div>
      <div className=" flex items-center gap-1">
        <ImBooks className="text-2xl" /> Books to Read
      </div>
      <div className=" flex items-center gap-1">
        <TbBooksOff className="text-2xl" /> Books Finished
      </div>
      <div className=" flex items-center gap-1">
        <IoBookSharp className="text-2xl" /> Progress
      </div>
    </section>
  );
};

export default BookMenu;
