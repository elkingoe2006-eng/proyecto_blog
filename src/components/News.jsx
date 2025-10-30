// src/components/News.jsx
import { useEffect, useState } from "react";

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://somoskudasai.com/")
      .then((res) => res.json())
      .then((data) => setNews(data.data || []))
      .catch((err) => console.error("Error cargando noticias:", err));
  }, []);

  // 👉 Función para redirigir al sitio principal
  const handleRedirect = () => {
    window.open("https://somoskudasai.com/", "_blank"); 
  };

  return (
    <section className="news">
      {/* Botón con estilo que lleva al sitio público */}
      <button className="news-button" onClick={handleRedirect}>
        📰 Noticias Anime
      </button>

      <div className="news-list">
        {news.map((item) => (
          <div key={item.mal_id} className="news-card">
            <img src={item.images.jpg.image_url} alt={item.title} />
            <h4>{item.title}</h4>
            <a href={item.url} target="_blank" rel="noreferrer">
              Leer más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
