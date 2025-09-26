function MediaHero({ item }) {
  if (!item) return null; // evita erro se item não existir

  const backdropUrl = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <div
      className="media-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url('${backdropUrl}')`
      }}
    >
      <div className="hero-content">
        <div className="media-poster">
          <img alt={item.name || item.title} src={posterUrl} />
        </div>
        <div className="media-info">
          <h1>{item.name || item.title}</h1>
          <div className="meta-info">
            <span className="rating">⭐ {item.vote_average?.toFixed(1)}/10</span>
            <span>{(item.first_air_date || item.release_date)?.slice(0, 4)}</span>
            <span>
              {item.episode_run_time
                ? `${item.episode_run_time[0]}m`
                : item.runtime
                ? `${item.runtime}m`
                : ""}
            </span>
          </div>
          <div className="genres">
            {item.genres?.map((g) => (
              <span key={g.id} className="genre-tag">
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaHero;
