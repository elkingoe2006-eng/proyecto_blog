// src/App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AnimeList from "./components/AnimeList";
import Favorites from "./components/Favorites";
import News from "./components/News";
import Recommendations from "./components/Recommendations";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  // Estado para guardar animes y término de búsqueda
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("Naruto");
  const [favorites, setFavorites] = useState([]);

  // 🚀 Fetch API pública de Jikan
  const fetchAnimes = async (query) => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=9`);
      const data = await response.json();
      setAnimes(data.data || []);
    } catch (error) {
      console.error("Error al obtener datos de la API:", error);
    }
  };

  // Llamar la API cada vez que cambia la búsqueda
 useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

 const toggleFavorite = (anime) => {
    const exists = favorites.some((fav) => fav.mal_id === anime.mal_id);
    let updated;
    if (exists) {
      updated = favorites.filter((fav) => fav.mal_id !== anime.mal_id);
    } else {
      updated = [...favorites, anime];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };


  return (
    
    
    <div className="app-container">

        {/* 🎥 VIDEO DE FONDO */}
      <video autoPlay loop muted className="background-video">
        <source src="/videos/Sanemi_2.mp4" type="video/mp4" />
      </video>

      {/* 🔲 CAPA OSCURA para que el texto se lea mejor */}
      <div className="overlay"></div>
      
      <Header />
      <SearchBar setSearch={setSearch} />
      <h2 className="api-title">Resultados de la API: <span>{search}</span></h2>
          <AnimeList animes={animes} toggleFavorite={toggleFavorite} favorites={favorites} />
           <Favorites />
           <Recommendations />
      <News />
      <About />
      
      <Footer />
    </div>
  );
}

export default App;
