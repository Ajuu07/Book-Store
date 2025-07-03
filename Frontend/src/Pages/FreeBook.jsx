import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const FreeBook = () => {
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

  const freeBooks = books.filter((book) => book.category === "Free");
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-4">
      <div>
        <h1 className="text-3xl font-semibold pb-2 my-8">
          Free <span className="text-pink-400">Books</span>
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Explore our collection of free books available for download. These
          books cover a wide range of topics and genres, providing valuable
          knowledge and entertainment at no cost.
        </p>
      </div>
      <div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : freeBooks.length === 0 ? (
          <p className="text-center">No free books available.</p>
        ) : (
          <Slider {...settings}>
            {freeBooks.map((book) => (
              <Cards
                key={book._id}
                id={book._id}
                title={book.title}
                image={book.image}
                category={book.category}
                description={book.description}
                price={book.price}
              />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default FreeBook;
