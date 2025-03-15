import './App.css'
import AnimesContainer from './components/animesContainer'

function App() {
  return (
    <>
      <h1 className="title">My fav animes!</h1>
      <main>
          <div className="animes-buttons">
              <button id="show-animes" className="btn btn-show"><span>Show Animes</span></button>
              <button id="add-anime" className="btn btn-add"><span>New Anime</span></button>
          </div>
          <hr></hr>
          <AnimesContainer />
      </main>
    </>
  )
}

export default App
