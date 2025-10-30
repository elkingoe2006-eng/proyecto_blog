// src/components/Favorites.jsx
function Favorites({ favorites, toggleFavorite }) {
  return (
    <section className="favorites">
      <h2>⭐ Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No has agregado animes a favoritos todavía.</p>
      ) : (
        <div className="anime-list">
          {favorites.map((anime) => (
            <div key={anime.mal_id} className="anime-card">
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <div className="anime-info">
                <h3>{anime.title}</h3>
                <button onClick={() => toggleFavorite(anime)} className="remove-btn">
                  Quitar ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;
