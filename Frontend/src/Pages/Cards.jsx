import React from "react";

const Cards = ({ id, title, image, description, category, price }) => {
  return (
    <div className="mt-4 mb-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-45 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </figure>

        <div className="card-body p-4 flex flex-col justify-between min-h-[120px]">
          <h2 className="card-title text-lg font-bold flex items-center justify-between">
            {title}
            <span className="badge badge-secondary text-xs">{category}</span>
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
            {description}
          </p>

          <div className="card-actions flex justify-between items-center mt-4">
            <span className="badge badge-outline text-sm px-3 py-1">
              ${price}
            </span>
            <button className="px-4 py-1 text-sm rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
