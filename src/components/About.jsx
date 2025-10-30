// src/components/About.jsx
function About() {
  return (
    <section className="about">
      <h2>📘 Sobre este Blog</h2>
      <p>
        Este proyecto usa la API pública <strong>Jikan API</strong> (
        <a href="https://api.jikan.moe/v4/anime" target="_blank" rel="noreferrer">
          https://api.jikan.moe/v4/anime
        </a>
        ) para mostrar información sobre tus animes favoritos.  
        Hecho con React + Vite 💻
      </p>
    </section>
  );
}

export default About;
