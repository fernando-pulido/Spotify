import CardMusic from './Card/CardMusic'

import './AlbumMusic.css'
import Buttons from '../Buttons/Buttons'
import { cardsMock } from '../../data/cardsMook'

const AlbumMusic = () => {
  return (
    <div className="content">
      <div>
        <Buttons />
      </div>
      <div className="Cards">
        {cardsMock.map(card => (
          <CardMusic image={card.image} title={card.title} key={card.id} />
        ))}
      </div>
      <div className="Cards-autores">
        <h1>hola</h1>
      </div>
      <div className="Cards-albums">cards albums</div>
    </div>
  )
}

export default AlbumMusic
