import { AiOutlineCloseCircle } from "react-icons/ai";

const BookDetailModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full min-h-[400px]  bg-white rounded-xl p-4 flex-col relative"
      >
        <AiOutlineCloseCircle
          className="text-red-800 absolute right-4 top-4 cursor-pointer text-2xl"
          onClick={onClose}
        />
        <div className="flex place-items-center gap-2">
          {/* <FcNews className="text-3xl" /> */}
          <h2 className="text-3xl uppercase text-slate-800 p-2 flex-wrap">
            {book.title}
          </h2>
        </div>
        <div className="p-2 my-1 w-full  border-b flex place-items-center">
          <span className="mr-1">Author : </span>
          <h3> {book.author}</h3>
        </div>
        <div className="p-2 my-1 w-full  border-b flex place-items-center">
          <span className="mr-1">Publish Year : </span>
          <h3> {book.publishYear}</h3>
        </div>
        <div className="p-2 my-1 w-full   flex place-items-center">
          <span className="mr-1">Status : </span>
          <h3> {book.status}</h3>
        </div>

        <p className="max-h-[130px] overflow-auto border p-1.5">
          <span className="italic">Note :</span> {book.note}
        </p>
        <div className=" absolute bottom-2 text-sm italic">
          <p>
            Last Updated : <span>{book.updatedAt}</span>
          </p>
          <p>
            Created : <span>{book.createdAt}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailModal;
