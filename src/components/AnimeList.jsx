// src/components/AnimeList.jsx
import AnimeCard from "./AnimeCard";

function AnimeList({ animes }) {
  return (
    <section className="anime-list">
      {animes.length > 0 ? (
        animes.map((anime) => <AnimeCard key={anime.mal_id} anime={anime} />)
      ) : (
        <p className="no-results">No se encontraron resultados en la API.</p>
      )}
    </section>
  );
}

export default AnimeList;
