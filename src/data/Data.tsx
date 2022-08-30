import axios from "axios";

interface Movie {
  title: string;
  description: string;
  image: string;
}

export async function getMovie(): Promise<Movie | undefined> {
  const random = Math.ceil(Math.random() * 7000);

  try {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${random}${import.meta.env.VITE_API_KEY}&language=pt-BR`);

    return { title: data.title, description: data.overview, image: `https://image.tmdb.org/t/p/w500${data.poster_path}` };
  } catch (error: any) {
    console.log("ERRO: ", error.message);
  }

}