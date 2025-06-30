import React, { useState } from "react";
import list from "../data/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold mt-0 md:mt-4  ">
            Discover, Learn & Escape —{" "}
            <span className="text-pink-500">
              Books for Every Mood and Mind!!
            </span>
          </h1>
          <p className="text-gray-600 mt-4 md:text-lg">
            Explore our curated collection of books across various genres.
            Whether you're into fiction, non-fiction, or educational gems — we
            have it all waiting for you.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {list.map((book) => (
            <div key={book.id}>
              <Cards
                id={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                description={book.description}
                category={book.category}
                price={book.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
