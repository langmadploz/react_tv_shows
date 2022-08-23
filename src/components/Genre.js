import { createPortal } from 'react-dom'

// genres: Sitcom, Mockumentary, Cringe Comedy, Political Satire, Crime Drama, Thriller, Neo-Western, Black Comedy, Tragedy, Comedy-Drama, Historical Fiction, Satire, Period Drama, Science Fiction, Alternate History, Drama, Comedy, Action, Adventure, Fantasy, Teen Drama, Coming-of-Age, Romantic Comedy, Family Drama, Mystery, Dystopia, Reality, Horror, Sports, Historial Fiction, Serial Drama, Political Drama, Romance, Medical Drama, Romantic Drama, Psychological Thriller

const Genre = (props) => {
  let color

  switch (props.genre.name) {
    case 'Sitcom':
      color = 'darkorange'
      break
    case 'Mockumentary':
      color = 'darkgoldenrod'
      break
    case 'Cringe Comedy':
      color = 'darkkhaki'
      break
    case 'Political Satire':
      color = 'red'
      break
    case 'Crime Drama':
      color = 'silver'
      break
    case 'Thriller':
      color = 'peru'
      break
    case 'Neo-Western':
      color = 'navajowhite'
      break
    case 'Black Comedy':
      color = 'lime'
      break
    case 'Tragedy':
      color = 'indianred'
      break
    case 'Comedy-Drama':
      color = 'mediumturquoise'
      break
    case 'Historical Fiction':
      color = 'gold'
      break
    case 'Satire':
      color = 'mediumvioletred'
      break
    case 'Period Drama':
      color = 'papayawhip'
      break
    case 'Science Fiction':
      color = 'mediumspringgreen'
      break
    case 'Alternate History':
      color = 'mistyrose'
      break
    case 'Drama':
      color = 'lightsteelblue'
      break
    case 'Comedy':
      color = 'palegreen'
      break
    case 'Action':
      color = 'darkorange'
      break
    case 'Adventure':
      color = 'mediumseagreen'
      break
    case 'Fantasy':
      color = 'orchid'
      break
    case 'Teen Drama':
      color = 'olivedrab'
      break
    case 'Coming-of-Age':
      color = 'plum'
      break
    case 'Romantic Comedy':
      color = 'salmon'
      break
    case 'Family Drama':
      color = 'thistle'
      break
    case 'Mystery':
      color = 'mediumpurple'
      break
    case 'Dystopia':
      color = 'lightcyan'
      break
    case 'Reality':
      color = 'whitesmoke'
      break
    case 'Horror':
      color = 'orangered'
      break
    case 'Sports':
      color = 'powderblue'
      break
    case 'Historical Fiction':
      color = 'rosybrown'
      break
    case 'Serial Drama':
      color = 'dodgerblue'
      break
    case 'Political Drama':
      color = 'crimson'
      break
    case 'Romance':
      color = 'pink'
      break
    case 'Medical Drama':
      color = 'lightblue'
      break
    case 'Romantic Drama':
      color = 'palevioletred'
      break
    case 'Psychological Thriller':
      color = 'tomato'
      break
    default:
      color = 'gainsboro'
      break
  }

  return (
    <div style={{ backgroundColor: color }} className="genre">
      {props.genre.name}
    </div>
  )
}

export default Genre
