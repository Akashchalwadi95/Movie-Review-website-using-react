const Movie = (element) => {
  return (
    <div className="Movie">
      <img src={element.poster} alt=""/>
      <p>{element.title}</p>
      <p>{element.year}</p>

    </div>
  )
}

export default Movie