import './App.css'
import showData from './data/show.json'
import Show from './components/Show'

const App = () => {
  return (
    <div className="App">
      <h1>Lang's Favorite Shows In No Particular Order</h1>
      <div className="show-list">
        {showData.map((show) => (
          <Show show={show} key={show.image_path} />
        ))}
      </div>
    </div>
  )
}

export default App
