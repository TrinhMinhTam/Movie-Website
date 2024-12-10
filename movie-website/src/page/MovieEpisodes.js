import React from "react";

const MovieEpisodes = ({ episode }) => {
  const handleDownload = (link) => {
    window.open(link, "_blank"); // Mở link tải về trong tab mới
  };

  const handleEmbed = (link) => {
    window.open(link, "_blank"); // Mở link embed trong tab mới
  };

  return (
    <li className="mb-4">
      <div className="flex justify-around items-center p-2 ">
        {/* Nút bấm xem ngay nếu có */}
        {episode.link_embed && (
          <button
            onClick={() => handleEmbed(episode.link_embed)}
            className="text-green-500  w-1/3 hover:underline bg-gray-200 p-2 rounded"
          >
            Xem ngay Tập {episode.name}
          </button>
        )}

        {/* Nút bấm tải về */}
        <button
          onClick={() => handleDownload(episode.link_m3u8)}
          className="text-blue-500 w-1/3 hover:underline bg-gray-200 p-2 rounded"
        >
          Tải về
        </button>
      </div>
    </li>
  );
};

export default MovieEpisodes;
