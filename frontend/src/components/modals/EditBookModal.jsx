import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import Spinner from "../Spinner";
import { useSnackbar } from "notistack";

const EditBookModal = ({ book, onClose }) => {
  const [editBook, setEditBook] = useState(book);

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const editing = useMutation({
    mutationFn: (updateBook) => {
      return axios
        .put(`http://localhost:3000/books/${book._id}`, updateBook)
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ["books"] });
          enqueueSnackbar("Update Successfully", { variant: "success" });
          onClose();
        })
        .catch((error) => {
          enqueueSnackbar("Check on required fields", {
            variant: "error",
          });
        });
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setEditBook((prevBook) => {
      return {
        ...prevBook,
        [name]: value,
      };
    });
  }

  const handleSaveEdit = () => {
    editing.mutate(editBook);
  };
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
          <BiEditAlt className="text-3xl text-orange-600" />
          <h2 className="text-3xl uppercase text-slate-800">Edit Book</h2>
        </div>
        <div>
          {editing.isLoadding ? (
            <Spinner />
          ) : (
            <>
              <div>
                <label
                  htmlFor="title"
                  className="text-sm text-gray-400 italic p-2"
                >
                  Title:
                  <span className="text-xs text-red-300">
                    {!editBook.title && " (required)"}
                  </span>
                </label>
                <input
                  defaultValue={book.title}
                  name="title"
                  onChange={handleChange}
                  className="border border-orange-600 p-2 my-1 w-full rounded-lg "
                />
                <label
                  htmlFor="author"
                  className="text-sm text-gray-400 italic p-2"
                >
                  Author:
                  <span className="text-xs text-red-300">
                    {!editBook.author && " (required)"}
                  </span>
                </label>
                <input
                  defaultValue={book.author}
                  name="author"
                  onChange={handleChange}
                  className="border border-orange-600 p-2 my-1 w-full rounded-lg "
                />
                <label
                  htmlFor="publishYear"
                  className="text-sm text-gray-400 italic p-2"
                >
                  Publish Year:
                  <span className="text-xs text-red-300">
                    {" "}
                    {!editBook.publishYear && " (required)"}
                  </span>
                </label>
                <input
                  defaultValue={book.publishYear}
                  name="publishYear"
                  onChange={handleChange}
                  className="border border-orange-600 p-2 my-1 w-full rounded-lg "
                  type="number"
                />
                <label
                  htmlFor="status"
                  className="text-sm text-gray-400 italic p-2"
                >
                  Status:
                  <span className="text-xs text-red-300"></span>
                </label>
                <select
                  name="status"
                  onChange={handleChange}
                  defaultValue={book.status}
                  className="border border-orange-600 p-2 my-1 w-full rounded-lg "
                >
                  <option value="To Read">To Read</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
                <label
                  htmlFor="status"
                  className="text-sm text-gray-400 italic p-2"
                >
                  Personal note:
                  <span className="text-xs text-red-300"></span>
                </label>
                <textarea
                  name="note"
                  cols="100%"
                  rows="10"
                  defaultValue={book.note}
                  onChange={handleChange}
                  className="border border-orange-600 p-2 my-1 w-full rounded-lg "
                ></textarea>
                <button
                  onClick={handleSaveEdit}
                  className="p-2 bg-orange-600 w-full rounded-lg text-white uppercase"
                >
                  Update Book
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBookModal;
