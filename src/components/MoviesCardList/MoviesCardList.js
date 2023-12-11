import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  moviesCardList,
  onSave,
  onDelete,
  isSaved,
  isMarked,
}) {
  return (
    <ul className="movies-list">
      {movies.map((moviesCard) => (
        <MoviesCard
          key={moviesCard.id || moviesCard.movieId}
          moviesCard={moviesCard}
          moviesCardList={moviesCardList}
          onSave={onSave}
          onDelete={onDelete}
          isSaved={isSaved}
          isMarked={isMarked}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
