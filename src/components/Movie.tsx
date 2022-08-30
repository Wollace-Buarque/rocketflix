import { useEffect, useState } from "react";
import { getMovie } from "../data/Data";
import Button from "./Button";
import Title from "./Header";

interface Movie {
  title?: string;
  description?: string;
  image?: string;
}

export default function Movie() {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    updateMovie();
  }, []);

  function updateMovie() {
    const movieData = getMovie();

    movieData.then(response => {

      if (!response || !response.title || !response.description || !response.image) {
        if (movie?.title != "Carregando...")
          setMovie({ title: "Carregando...", description: "Carregando...", image: "" });

        updateMovie();
        return;
      }

      setMovie({ title: response.title, description: response.description, image: response.image })
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen mobile:py-10 mobile:h-max">
      <Title />

      <div className="flex w-2/5 gap-5 mb-[30px] min-h-[288px] max-h-[288px] mobile:flex-col mobile:items-center mobile:w-10/12 mobile:max-h-max">
        <CustomImage src={movie?.image ?? ""} />

        <div className="flex flex-col text-title">
          <h2 className="text-xl font-bold pb-5 mobile:text-center">
            {movie?.title}
          </h2>

          <p className="overflow-hidden text-ellipsis text-justify mobile:text-center">
            {movie?.description}
          </p>
        </div>
      </div>

      <Button onClick={() => updateMovie()} />

      <p className="text-title text-lg text-center md:w-1/3 w-10/12 pt-[26px]">
        Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
      </p>
    </div>
  );
}

function CustomImage(props: { src: string }) {
  if (props.src) {
    return <img src={props.src} width={180} height={288} className={`min-w-[180px] bg-[#21293b] border-none shadow-md shadow-black`} />;
  }

  return (
    <svg className="animate-spin -ml-1 mr-3 w-[180px] h-[120px] text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}