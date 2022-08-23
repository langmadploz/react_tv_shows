import { createPortal } from 'react-dom'

const Kid = (props) => {
  let color

  switch (props.for_kids.answer) {
    case 'Yes':
      color = 'chartreuse'
      break
    case 'Maybe':
      color = 'yellow'
      break
    case 'No':
      color = 'red'
      break
    default:
      color = 'burlywood'
      break
  }

  return (
    <div style={{ color: color }} className="kid">
      {props.for_kids.answer}
    </div>
  )
}

export default Kid
