import { ImBooks } from "react-icons/im";
import { BsBookshelf } from "react-icons/bs";
import { TbBooksOff } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";
import { BiBookAdd } from "react-icons/bi";
import { useState } from "react";

import AddBookModal from "./modals/AddBookModal";

const BookMenu = () => {
  const [addBook, setAddBook] = useState(false);
  return (
    <section className="max-w-screen-2xl mx-auto py-3 flex place-content-center flex-wrap gap-6  sm:place-content-between">
      <div className="flex-wrap flex gap-6 lg:place-content-start md:px-2 place-content-center">
        <div className=" flex items-center gap-1">
          <BsBookshelf className="text-2xl" /> All Books
        </div>
        <div className=" flex items-center gap-1 opacity-40">
          <ImBooks className="text-2xl" /> Books to Read
        </div>
        <div className=" flex items-center gap-1 opacity-40">
          <TbBooksOff className="text-2xl" /> Books Finished
        </div>
        <div className=" flex items-center gap-1 opacity-40">
          <IoBookSharp className="text-2xl" /> Progress
        </div>
      </div>
      <div className=" md:px-2">
        <button
          className="flex place-items-center gap-1 text-green-600 border rounded-lg py-1 px-4 border-green-700"
          onClick={() => {
            setAddBook(true);
          }}
        >
          <BiBookAdd /> Add Book
        </button>
      </div>

      {addBook && <AddBookModal onClose={() => setAddBook(false)} />}
    </section>
  );
};

export default BookMenu;
