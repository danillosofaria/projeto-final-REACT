
const API_URL = "https://api.themoviedb.org/3";


const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWZhMGY4ZTExMTI1ODNkMGEzYWNlOWI0OWE4NTlmYyIsIm5iZiI6MTc1ODgwODcxMC4wMjIsInN1YiI6IjY4ZDU0YTg2Y2ZhMzk5YTdhMzg4NDY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hELO-8TSNVstIqPQ_p02v3DOql5_GNN725CyjYOLt0k";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};


async function fetchFromAPI(endpoint) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, options);
    if (!response.ok) throw new Error(`Erro na API: ${response.status}`);
    return response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    return null;
  }
}


export async function getPopularMovies(page = 1) {
  return fetchFromAPI(`/movie/popular?language=pt-BR&page=${page}`);
}

export async function getPopularTV(page = 1) {
  return fetchFromAPI(`/tv/popular?language=pt-BR&page=${page}`);
}

export async function getMovieDetails(id) {
  return fetchFromAPI(`/movie/${id}?language=pt-BR`);
}

export async function getTVDetails(id) {
  return fetchFromAPI(`/tv/${id}?language=pt-BR`);
}

export async function searchMulti(query, page = 1) {
  return fetchFromAPI(`/search/multi?language=pt-BR&query=${encodeURIComponent(query)}&page=${page}`);
}
