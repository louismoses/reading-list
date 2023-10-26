import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "../Spinner";

import { AiOutlineCloseCircle } from "react-icons/ai";

const DeleteBookModal = ({ book, onClose }) => {
  const queryClient = useQueryClient();
  const deletion = useMutation({
    mutationFn: (deleteBook) => {
      return axios
        .delete(`http://localhost:3000/books/${book._id}`, deleteBook)
        .then(() => queryClient.invalidateQueries({ queryKey: ["books"] }));
    },
  });

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

        {deletion.isLoadding ? (
          <Spinner />
        ) : (
          <>
            {deletion.isError ? <div>{deletion.error.message}</div> : null}
            {deletion.isSuccess ? (
              <div>
                <h2>Book Deleted</h2>
                <button onClick={onClose}>Close</button>
              </div>
            ) : null}

            <button
              onClick={() => {
                deletion.mutate();
              }}
            >
              Yes, Delete it!
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteBookModal;
