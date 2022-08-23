import { createPortal } from 'react-dom'

// genres: Sitcom, Mockumentary, Cringe Comedy, Political Satire, Crime Drama, Thriller, Neo-Western, Black Comedy, Tragedy, Comedy-Drama, Historical Fiction, Satire, Period Drama, Science Fiction, Alternate History, Drama, Comedy, Action, Adventure, Fantasy, Teen Drama, Coming-of-Age, Romantic Comedy, Family Drama, Mystery, Dystopia, Reality, Horror, Sports, Historial Fiction, Serial Drama, Political Drama, Romance, Medical Drama, Romantic Drama

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
      color = 'orangered'
      break
    case 'Crime Drama':
      color = 'darkviolet'
      break
    case 'Thriller':
      color = 'firebrick'
      break
    case 'Neo-Western':
      color = 'navajowhite'
      break
    case 'Black Comedy':
      color = 'greenyellow'
      break
    case 'Tragedy':
      color = 'darkred'
      break
    case 'Comedy-Drama':
      color = 'dodgerblue'
      break
    case 'Historical Fiction':
      color = 'gold'
      break
    case 'Satire':
      color = 'mediumvioletred'
      break
    case 'Period Drama':
      color = 'mediumturquoise'
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
      color = 'indianred'
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
      color = 'mediumpurple'
      break
    case 'Mystery':
      color = 'lightslategray'
      break
    case 'Dystopia':
      color = 'lightcyan'
      break
    case 'Reality':
      color = 'whitesmoke'
      break
    case 'Horror':
      color = 'maroon'
      break
    case 'Sports':
      color = 'powderblue'
      break
    case 'Historical Fiction':
      color = 'rosybrown'
      break
    case 'Serial Drama':
      color = 'mediumblue'
      break
    case 'Political Drama':
      color = 'crimson'
      break
    case 'Romance':
      color = 'pink'
      break
    case 'Medical Drama':
      color = 'slategray'
      break
    case 'Romantic Drama':
      color = 'palevioletred'
      break
  }

  return (
    <div style={{ backgroundColor: color }} className="genre">
      {props.genre.name}
    </div>
  )
}

export default Genre
