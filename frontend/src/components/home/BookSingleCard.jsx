import { FcInfo, FcFullTrash } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";

import BookDetailModal from "../modals/BookDetailModal";
import DeleteBookModal from "../modals/DeleteBookModal";
import EditBookModal from "../modals/EditBookModal";

const BookSingleCard = ({ book }) => {
  const [showBookDetail, setShowBookDetail] = useState(false);
  const [deleteBook, setDeleteBook] = useState(false);
  const [editBook, setEditBook] = useState(false);

  return (
    <section>
      <div key={book._id} className=" max-w-[230px] border rounded-lg">
        <img
          src="https://placehold.co/228x228"
          alt={book.title}
          className="rounded-t-lg"
          width="228px"
          height="228px"
        />
        <div className="py-2 px-3">
          <h2 className=" text-2xl font-bold uppercase">{book.title}</h2>
          <h3 className="text-xl ">Author : {book.author}</h3>
          <p>Year Published: {book.publishYear}</p>
          <p>Status: {book.status}</p>
        </div>
        <div className="flex px-6 py-2 gap-4 place-content-between">
          <FcInfo
            className="text-2xl cursor-pointer"
            onClick={() => setShowBookDetail(true)}
          />
          <CiEdit
            className="text-2xl cursor-pointer"
            onClick={() => setEditBook(true)}
          />
          <FcFullTrash
            className="text-2xl cursor-pointer"
            onClick={() => setDeleteBook(true)}
          />
        </div>
      </div>
      {showBookDetail && (
        <BookDetailModal book={book} onClose={() => setShowBookDetail(false)} />
      )}
      {editBook && (
        <EditBookModal
          book={book}
          onClose={() => {
            setEditBook(false);
          }}
        />
      )}
      {deleteBook && (
        <DeleteBookModal book={book} onClose={() => setDeleteBook(false)} />
      )}
    </section>
  );
};

export default BookSingleCard;
