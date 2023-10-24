import { FcInfo, FcFullTrash } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

import { Link } from "react-router-dom";

const BookSingleCard = ({ book }) => {
  return (
    <div key={book._id} className=" max-w-[230px] border rounded-lg">
      <img
        src="https://placehold.co/228x228"
        alt={book.title}
        className="rounded-t-lg"
      />
      <div className="py-2 px-3">
        <h2 className=" text-2xl font-bold uppercase">{book.title}</h2>
        <h3 className="text-xl ">Author : {book.author}</h3>
        <p>Year Published: {book.publishYear}</p>
        <p>Status: {book.status}</p>
      </div>
      <div className="flex px-6 py-2 gap-4 place-content-between">
        <FcInfo className="text-2xl" />
        <CiEdit className="text-2xl" />
        <FcFullTrash className="text-2xl" />
      </div>
    </div>
  );
};

export default BookSingleCard;
