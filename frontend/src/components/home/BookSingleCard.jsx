const BookSingleCard = ({ book }) => {
  return (
    <div key={book._id} className=" max-w-[230px] border rounded-lg">
      <img
        src="https://placehold.co/228x228"
        alt={book.title}
        className="rounded-t-lg"
      />
      <div className="py-2 px-3">
        <h2 className=" text-2xl font-bold uppercase">{book.title}</h2>
        <h3 className="text-xl ">Author : {book.author}</h3>
        <p>Year Published: {book.publishYear}</p>
        <p>Status: {book.status}</p>
      </div>
    </div>
  );
};

export default BookSingleCard;
