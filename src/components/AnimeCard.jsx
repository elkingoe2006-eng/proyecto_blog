// src/components/AnimeCard.jsx
function AnimeCard({ anime }) {
  return (
    <div className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>
          {anime.synopsis
            ? anime.synopsis.slice(0, 120) + "..."
            : "Sin descripción disponible."}
        </p>
        <a href={anime.url} target="_blank" rel="noreferrer">
          Ver en MyAnimeList
        </a>
      </div>
    </div>
  );
}

export default AnimeCard;
