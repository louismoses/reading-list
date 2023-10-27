import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import Spinner from "../Spinner";
import { useState } from "react";

const AddBookModal = ({ onClose }) => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    publishYear: "",
    status: "To Read",
    note: "",
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (newBook) => {
      return axios
        .post("http://localhost:3000/books", newBook)
        .then(() => queryClient.invalidateQueries({ queryKey: ["books"] }));
    },
  });
  const handleSave = () => {
    mutation.mutate(newBook);
    onClose();
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
        className="w-[600px] max-w-full min-h-[400px]  bg-white rounded-xl p-4 flex-col relative"
      >
        <AiOutlineCloseCircle
          className="text-red-800 absolute right-4 top-4 cursor-pointer text-2xl"
          onClick={onClose}
        />
        <h3 className="text-4xl uppercase">New Book</h3>
        <hr />
        <div>
          {mutation.isLoadding ? (
            <Spinner />
          ) : (
            <>
              {mutation.isError ? <div>{mutation.error.message}</div> : null}
              {mutation.isSuccess ? <div>New Book added</div> : null}
              <div>
                <input
                  value={newBook.title}
                  placeholder="Title"
                  name="title"
                  onChange={handleChange}
                  className="border w-full text-black"
                />
                <input
                  value={newBook.author}
                  placeholder="Author"
                  name="author"
                  onChange={handleChange}
                  className="border w-full text-black"
                />
                <input
                  value={newBook.publishYear}
                  placeholder="Publish Year"
                  name="publishYear"
                  onChange={handleChange}
                  type="number"
                  className="border w-full text-black"
                />
                <select
                  name="status"
                  onChange={handleChange}
                  value={newBook.status}
                  className="border w-full text-black"
                >
                  <option value="To Read">To Read</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </select>
                <textarea
                  name="note"
                  cols="100%"
                  rows="10"
                  defaultValue={newBook.note}
                  onChange={handleChange}
                  className="border w-full text-black"
                ></textarea>
                <button onClick={handleSave}>Save</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
