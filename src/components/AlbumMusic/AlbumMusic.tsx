import CardMusic from '../Card/CardMusic'
import './AlbumMusic.css'

const AlbumMusic = () => {
  return (
    <div className="content">
      <h1>Botones </h1>
      <div className="Cards">
        Fernando Pulido <br />
      </div>
      <div className="Cards-autores">
        <CardMusic />
      </div>
      <div className="Cards-albums">cards albums </div>
    </div>
  )
}

export default AlbumMusic
