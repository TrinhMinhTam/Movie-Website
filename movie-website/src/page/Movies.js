import React, { useState, useEffect } from "react";
import { getNewMovies } from "../service/api";
import MovieCard from "../component/MovieCard";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true); // Hiển thị trạng thái đang tải
    getNewMovies(page)
      .then((data) => {
        if (data && data.status && data.items) {
          setMovies(data.items); // Lấy danh sách phim từ trường 'items'
        } else {
          setMovies([]); // Nếu không có phim, set mảng rỗng
        }
        setLoading(false); // Kết thúc trạng thái tải
      })
      .catch((error) => {
        console.error("Lỗi khi tải phim mới:", error);
        setMovies([]);
        setLoading(false);
      });
  }, [page]);

  const handleMovieClick = (slug) => {
    navigate(`/movies/${slug}`); // Dùng navigate để điều hướng đến đúng đường dẫn
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
        Movies
      </h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onClick={() => handleMovieClick(movie.slug)} // Thêm onClick vào MovieCard
            />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page <= 1}
          className="bg-gray-700 text-white px-6 py-2 rounded-full disabled:opacity-50 hover:bg-gray-800 transition duration-300"
        >
          Previous
        </button>
        <div>Page {page}</div>
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
