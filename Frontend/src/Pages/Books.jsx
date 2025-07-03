import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/books");
        setBooks(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again.");
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto mt-20 md:px-20 px-4">
      <div className=" text-center">
        <h1 className="text-2xl md:text-4xl font-bold ">
          Discover, Learn & Escape —
          <span className="text-pink-500">
            {" "}
            Books for Every Mood and Mind!!
          </span>
        </h1>
        <p className="text-gray-600 mt-4 md:text-lg">
          Explore our curated collection of books across various genres. Whether
          you're into fiction, non-fiction, or educational gems — we have it all
          waiting for you.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back to Home
          </button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center mt-12 text-lg font-semibold">
          Loading books...
        </div>
      ) : error ? (
        <div className="text-center mt-12 text-red-500 font-semibold">
          {error}
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {books.map((book) => (
            <div key={book._id}>
              <Cards
                id={book._id}
                title={book.title}
                image={book.image}
                category={book.category}
                description={book.description}
                price={book.price}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
