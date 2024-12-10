const BASE_URL = "https://ophim1.com";

/**
 * Lấy danh sách phim mới cập nhật
 * @param {number} page - Số trang cần lấy
 * @returns {Promise<Object>} - Dữ liệu danh sách phim
 */
export const getNewMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/danh-sach/phim-moi-cap-nhat?page=${page}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch new movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching new movies:", error);
    return null;
  }
};

/**
 * Lấy thông tin phim và danh sách tập phim
 * @param {string} slug - Slug của phim
 * @returns {Promise<Object>} - Thông tin phim và danh sách tập phim
 */
export const getMovieDetails = async (slug) => {
  try {
    const response = await fetch(`${BASE_URL}/phim/${slug}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movie details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
