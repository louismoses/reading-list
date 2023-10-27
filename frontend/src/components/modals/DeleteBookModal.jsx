import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Spinner from "../Spinner";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FcFullTrash } from "react-icons/fc";
import { useSnackbar } from "notistack";

const DeleteBookModal = ({ book, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const deletion = useMutation({
    mutationFn: (deleteBook) => {
      return axios
        .delete(`http://localhost:3000/books/${book._id}`, deleteBook)
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ["books"] });
          enqueueSnackbar("Deleted Successfully", { variant: "success" });
          onClose();
        })
        .catch((error) => {
          enqueueSnackbar("Unable to Delete");
        });
    },
  });

  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full min-h-[200px]  bg-white rounded-xl p-4 flex-col relative m-4"
      >
        <AiOutlineCloseCircle
          className="text-red-800 absolute right-4 top-4 cursor-pointer text-2xl"
          onClick={onClose}
        />

        {deletion.isLoadding ? (
          <Spinner />
        ) : (
          <>
            <div className="flex place-items-center gap-2">
              <FcFullTrash className="text-3xl text-orange-600" />
              <h2 className="text-3xl uppercase text-gray-600">Delete Book</h2>
            </div>
            <p className="p2 text-red-500 text-center">Confirm deleting</p>
            <h3 className="text-center text-3xl uppercase italic text-gray-600">
              <span className="text-3xl uppercase">"</span>
              {book.title} <span className="text-3xl uppercase">"</span>
            </h3>

            <button
              className="max-w-[300px] m-auto block my-4 p-2 bg-red-600 w-full rounded-lg text-white uppercase"
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
