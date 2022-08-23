import Genre from './Genre'

const Show = {props} => {
  return (
    <div className="show">
      <h1>{props.show.title}</h1>
      <img src={props.show.image_path} />
      <p>{props.show.description}</p>
      <h3>Years: {props.show.years}</h3>
      <h3>Network: {props.show.network}</h3>
      <h3>Rotten Tomatoes Score: {props.show.rotten_tomatoes}</h3>
      {props.show.genres.map((genre) => (
        <Genre genre={genre} />
      ))}
    </div>
  )
}