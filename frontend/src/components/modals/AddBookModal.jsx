import { useMutation } from "@tanstack/react-query";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";

const AddBookModal = ({ onClose }) => {
  const mutation = useMutation({
    mutationFn: (newBook) => {
      return axios.post("http://localhost:3000/books", newBook);
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
        <h3 className="text-2xl">Create Book</h3>
        {/* testing mutation */}
        <div>
          {mutation.isLoadding ? (
            <Spinner />
          ) : (
            <>
              {mutation.isError ? <div>{mutation.error.message}</div> : null}
              {mutation.isSuccess ? <div>New Book added</div> : null}

              <button
                onClick={() => {
                  mutation.mutate({
                    id: new Date(),
                    title: "do laundry4",
                    author: "ses",
                    publishYear: 50505,
                  });
                  onClose();
                }}
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddBookModal;
