// src/components/Recommendations.jsx
import { useEffect, useState } from "react";

function Recommendations() {
  const [recs, setRecs] = useState([]);

  const getRandomAnimes = async () => {
    const randomPage = Math.floor(Math.random() * 20) + 1;
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?page=${randomPage}&limit=6`);
      const data = await res.json();
      setRecs(data.data || []);
    } catch (err) {
      console.error("Error al obtener recomendaciones:", err);
    }
  };

  useEffect(() => {
    getRandomAnimes();
  }, []);

  return (
    <section className="recommendations">
      <h2>🎯 Recomendaciones Aleatorias</h2>
      <button className="reload-btn" onClick={getRandomAnimes}>🔄 Recargar</button>
      <div className="anime-list">
        {recs.map((anime) => (
          <div key={anime.mal_id} className="anime-card">
            <img src={anime.images.jpg.image_url} alt={anime.title} />
            <div className="anime-info">
              <h3>{anime.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recommendations;
