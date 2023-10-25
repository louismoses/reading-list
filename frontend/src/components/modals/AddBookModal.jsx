import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";

const AddBookModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handelSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
        onClose;
      })
      .catch((err) => {
        console.log(err.message);
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
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
        <div>
          <h2 className="text-3xl my4">Create Book</h2>
          {loading ? <Spinner /> : ""}
          <div className="flex flex-col rounded-xl w[600px] p-4 mx-auto">
            <div className="my-4">
              <label htmlFor="" className="text-xl mr-4 text-gray-500">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />
              <label htmlFor="" className="text-xl mr-4 text-gray-500">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />
              <label htmlFor="" className="text-xl mr-4 text-gray-500">
                Publish Year
              </label>
              <input
                type="text"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
              />
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handelSaveBook}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
