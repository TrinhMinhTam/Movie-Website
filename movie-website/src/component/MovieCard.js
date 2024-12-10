import React from "react";

const MovieCard = ({ movie, onClick }) => {
  const imageUrl = `https://img.ophim.live/uploads/movies/${movie.poster_url}`;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={movie.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {movie.name}
        </h2>
        <p className="text-sm text-gray-500">
          {movie.origin_name || "No description available."}
        </p>
        <p className="text-sm text-gray-400 mt-2">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
