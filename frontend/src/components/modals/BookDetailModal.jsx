import { AiOutlineCloseCircle } from "react-icons/ai";

const BookDetailModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px]  bg-white rounded-xl p-4 flex-col relative"
      >
        <AiOutlineCloseCircle
          className="text-red-800 absolute right-4 top-4 cursor-pointer text-2xl"
          onClick={onClose}
        />
        <h2 className="text-4xl uppercase">{book.title}</h2>
        <p></p>
      </div>
    </div>
  );
};

export default BookDetailModal;
