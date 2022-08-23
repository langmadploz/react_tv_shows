// ratings: TV-PG, TV-14, TV-MA

const Rating = (props) => {
  let text_color

  switch (props.rating.name) {
    case 'TV-PG':
      text_color = 'mediumseagreen'
      break
    case 'TV-14':
      text_color = 'orange'
      break
    case 'TV-MA':
      text_color = 'red'
      break
    default:
      text_color = 'burlywood'
      break
  }

  return (
    <div style={{ color: text_color }} className="rating">
      {props.rating.name}
    </div>
  )
}

export default Rating
