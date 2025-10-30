// src/components/Favorites.jsx
import { useEffect, useState } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // ✅ Cargar favoritos desde localStorage al inicio
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // ✅ Eliminar un anime de favoritos
  const removeFavorite = (id) => {
    const updated = favorites.filter((anime) => anime.mal_id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <section className="favorites">
      <h2>⭐ Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes animes guardados aún.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((anime) => (
            <div key={anime.mal_id} className="favorite-card">
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <h4>{anime.title}</h4>
              <button onClick={() => removeFavorite(anime.mal_id)}>
                ❌ Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
