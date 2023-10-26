import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "../Spinner";

const EditBookModal = ({ book, onClose }) => {
  const [editBook, setEditBook] = useState(book);

  const queryClient = useQueryClient();

  const editing = useMutation({
    mutationFn: (updateBook) => {
      return axios
        .put(`http://localhost:3000/books/${book._id}`, updateBook)
        .then(() => queryClient.invalidateQueries({ queryKey: ["books"] }));
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
    onClose();
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
        <h3 className="text-4xl uppercase">Edit Book</h3>
        <hr />
        <div>
          {editing.isLoadding ? (
            <Spinner />
          ) : (
            <>
              {editing.isError ? <div>{editing.error.message}</div> : null}
              {editing.isSuccess ? <div>New Book added</div> : null}
              <div>
                <input
                  value={book.title}
                  name="title"
                  onChange={handleChange}
                  className="border w-full text-black"
                />
                <input
                  value={book.author}
                  name="author"
                  onChange={handleChange}
                  className="border w-full text-black"
                />
                <input
                  value={book.publishYear}
                  name="publishYear"
                  onChange={handleChange}
                  className="border w-full text-black"
                />
                <select
                  name="status"
                  onChange={handleChange}
                  value={book.status}
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
                  defaultValue={book.note}
                  onChange={handleChange}
                  className="border w-full text-black"
                ></textarea>
                <button onClick={handleSaveEdit}>Update Book</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditBookModal;
