import { useState } from "react";
import Button from "./components/Button";
import Movie from "./components/Movie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/global.css'

export function App() {
  const [movie, setMovie] = useState(false);

  if (movie) {
    return <Movie />;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Header />

      <Button onClick={() => setMovie(true)} />

      <Footer />
    </div>
  );
}

export default App;
