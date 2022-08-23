import Genre from './Genre'
import Rating from './Rating'
import Emmy from './Emmy'

const Show = (props) => {
  return (
    <div className="show">
      <h2>{props.show.title}</h2>
      <img src={props.show.image_path} alt={props.show.title} />
      <p>{props.show.description}</p>
      <h3>Years: {props.show.years}</h3>
      <h3>Network: {props.show.network}</h3>
      <h3>Rotten Tomatoes Score: {props.show.rotten_tomatoes}</h3>
      {props.show.genres.map((genre, index) => (
        <Genre genre={genre} key={index} />
      ))}
      {props.show.emmys?.map((emmy, index) => (
        <Emmy emmy={emmy} key={index} />
      ))}
      {props.show.ratings.map((rating, index) => (
        <Rating rating={rating} key={index} />
      ))}
    </div>
  )
}

export default Show
