import CardMusic from './Card/CardMusic'

import './AlbumMusic.css'
import Buttons from '../Buttons/Buttons'
import { cardsMock } from '../../data/cardsMook'

const AlbumMusic = () => {
  return (
    <>
      <div>
        <Buttons />
      </div>

      <div className="content">
        <div className="Cards">
          {cardsMock.map(card => (
            <CardMusic image={card.image} title={card.title} key={card.id} />
          ))}
        </div>
        <div className="Cards-autores">
          <h1>hola</h1>
          {cardsMock.map(card2 => (
            <CardMusic image={card2.image} title={card2.title} key={card2.id} />
          ))}
        </div>
        <div className="Cards-albums">cards albums</div>
      </div>
    </>
  )
}

export default AlbumMusic
