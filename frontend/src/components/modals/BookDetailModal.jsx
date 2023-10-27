import { AiOutlineCloseCircle } from "react-icons/ai";

const BookDetailModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full border-sky-300 border-4    bg-white rounded-xl p-4 flex-col relative"
      >
        <AiOutlineCloseCircle
          className="text-red-800 absolute right-4 top-4 cursor-pointer text-2xl"
          onClick={onClose}
        />
        <div className="flex place-items-center gap-2">
          {/* <FcNews className="text-3xl" /> */}
          <h2 className="text-3xl uppercase text-slate-800 p-2 flex-wrap overflow-auto max-h-16">
            {book.title}
          </h2>
        </div>

        <h3 className="overflow-auto max-h-16 p-2 my-1 w-full border rounded-lg border-sky-300">
          <span className="mr-1">Author : </span> {book.author}
        </h3>

        <div className="p-2 my-1 w-full  border border-sky-300 rounded-lg flex place-items-center">
          <span className="mr-1">Publish Year : </span>
          <h3> {book.publishYear}</h3>
        </div>
        <div className="p-2 my-1 w-full rounded-lg border  border-sky-300 flex place-items-center">
          <span className="mr-1">Status : </span>
          <h3> {book.status}</h3>
        </div>

        <p className="max-h-[130px] min-h-10 overflow-auto border border-sky-300 rounded-lg p-1.5">
          <span className="italic">Note :</span> {book.note}
        </p>
        <div className="  text-sm italic pt-2">
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
