import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieEpisodes from "./MovieEpisodes"; // Import MovieEpisodes

const MovieDetail = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Gọi API để lấy chi tiết phim
    fetch(`https://ophim1.com/phim/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.movie && data.episodes) {
          console.log("data", data.episodes[0].server_data);
          setMovie(data.movie); // Cập nhật dữ liệu bộ phim
          setEpisodes(data.episodes[0].server_data);
        } else {
          setError("Không tìm thấy phim.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Đã có lỗi xảy ra.");
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center text-xl">Đang tải...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      {movie && (
        <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Ảnh Poster */}
          <div className="lg:w-1/3">
            <img
              src={movie.poster_url}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thông tin chi tiết */}
          <div className="lg:w-2/3 p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {movie.name}
            </h1>
            <p className="text-lg text-gray-600 italic mb-4">
              {movie.origin_name}
            </p>
            <p className="text-gray-800 mb-4">{movie.content}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">
                Thông tin chi tiết
              </h2>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <strong>Thể loại:</strong>{" "}
                  {movie.category.map((cat) => cat.name).join(", ")}
                </li>
                <li>
                  <strong>Quốc gia:</strong>{" "}
                  {movie.country.map((c) => c.name).join(", ")}
                </li>
                <li>
                  <strong>Diễn viên:</strong> {movie.actor.join(", ")}
                </li>
                <li>
                  <strong>Thời lượng:</strong> {movie.time}
                </li>
                <li>
                  <strong>Chất lượng:</strong> {movie.quality}
                </li>
                <li>
                  <strong>Phụ đề:</strong> {movie.lang}
                </li>
                <li>
                  <strong>Số tập:</strong> {movie.episode_total}
                </li>
                <li>
                  <strong>Trạng thái:</strong> {movie.status}
                </li>
                <li>
                  <strong>Lượt xem:</strong> {movie.view}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Danh sách tập phim */}
      {episodes && episodes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Danh sách các tập
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.map((episode) => (
              <MovieEpisodes key={episode.slug} episode={episode} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
