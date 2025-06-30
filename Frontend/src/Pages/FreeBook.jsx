import React from "react";
import list from "../data/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  const freeBooks = list.filter((book) => book.category === "Free");
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
        <Slider {...settings}>
          {freeBooks.map((book) => (
            <Cards
              key={book.id}
              id={book.id}
              title={book.title}
              image={book.image}
              description={book.description}
              category={book.category}
              price={book.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
