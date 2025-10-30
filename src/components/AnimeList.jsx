// src/components/AnimeList.jsx
import AnimeCard from "./AnimeCard";

function AnimeList({ animes }) {
  return (
    <section className="anime-list">
      {animes.length > 0 ? (
        animes.map((anime) => (
          <div key={anime.mal_id} className="anime-item">
            <AnimeCard anime={anime} />

            {/* ✅ Botón para agregar a favoritos sin alterar tu estructura */}
            <button
              className="fav-btn"
              onClick={() => {
                const stored =
                  JSON.parse(localStorage.getItem("favorites")) || [];
                const exists = stored.some((fav) => fav.mal_id === anime.mal_id);
                if (!exists) {
                  stored.push(anime);
                  localStorage.setItem("favorites", JSON.stringify(stored));
                  alert(`${anime.title} fue agregado a tus favoritos 💖`);
                } else {
                  alert(`${anime.title} ya está en tus favoritos.`);
                }
              }}
            >
              💾 Agregar a Favoritos
            </button>
          </div>
        ))
      ) : (
        <p className="no-results">No se encontraron resultados en la API.</p>
      )}
    </section>
  );
}

export default AnimeList;
