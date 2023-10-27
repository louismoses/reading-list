import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { FcNews } from "react-icons/fc";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Spinner from "../Spinner";
import axios from "axios";
import { useFormContext } from "react-hook-form";

const AddBookModal = ({ onClose }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publishYear: "",
    status: "To Read",
    note: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newBook) => {
      return axios
        .post("http://localhost:3000/books", newBook)
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ["books"] });
          enqueueSnackbar("Added Successfully", { variant: "success" });
          onClose();
        })
        .catch((error) => {
          enqueueSnackbar("Check on required fields", {
            variant: "error",
          });
        });
    },
  });
  const handleSave = () => {
    mutation.mutate(newBook);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setNewBook((prevBook) => {
      return {
        ...prevBook,
        [name]: value,
      };
    });
  }

  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="max-w-[600px] max-w-full min-h-[400px]  bg-white rounded-xl p-4 flex-col relative"
      >
        <AiOutlineCloseCircle
          className="text-red-800 absolute right-4 top-4 cursor-pointer text-2xl"
          onClick={onClose}
        />
        <div className="flex place-items-center gap-2">
          <FcNews className="text-3xl" />
          <h3 className="text-3xl uppercase text-slate-800">New Book</h3>
        </div>
        <div>
          {mutation.isLoadding ? (
            <Spinner />
          ) : (
            <>
              <div>
                <label htmlFor="title" className="text-sm text-gray-400 italic">
                  Title:{" "}
                  <span className="text-xs text-red-300">
                    {!newBook.title && "(required)"}
                  </span>
                </label>
                <input
                  value={newBook.title}
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  className="border border-green-700 p-2 my-1 w-full rounded-lg "
                />
                <label
                  htmlFor="author"
                  className="text-sm text-gray-400 italic"
                >
                  Author:{" "}
                  <span className="text-xs text-red-300">
                    {!newBook.title && "(required)"}
                  </span>
                </label>
                <input
                  value={newBook.author}
                  placeholder="Author"
                  name="author"
                  onChange={handleChange}
                  className="border border-green-700 p-2 my-1 w-full rounded-lg "
                />
                <label htmlFor="title" className="text-sm text-gray-400 italic">
                  Publish Year:{" "}
                  <span className="text-xs text-red-300">
                    {!newBook.title && "(required)"}
                  </span>
                </label>
                <input
                  value={newBook.publishYear}
                  placeholder="Publish Year"
                  name="publishYear"
                  onChange={handleChange}
                  type="number"
                  className="border border-green-700 p-2 my-1 w-full rounded-lg"
                />
                <label
                  htmlFor="status"
                  className="text-sm text-gray-400 italic"
                >
                  Status:
                </label>
                <select
                  name="status"
                  onChange={handleChange}
                  value={newBook.status}
                  className="border border-green-700 p-2 my-1 w-full rounded-lg"
                >
                  <option value="To Read">To Read</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
                <label htmlFor="notes" className="text-sm text-gray-400 italic">
                  Personal note:
                </label>
                <textarea
                  name="note"
                  cols="100%"
                  rows="10"
                  defaultValue={newBook.note}
                  onChange={handleChange}
                  className="border border-green-700 p-2 my-1 w-full rounded-lg"
                ></textarea>
                <button
                  onClick={handleSave}
                  className="p-2 bg-green-500 w-full rounded-lg text-white uppercase"
                >
                  Save
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
