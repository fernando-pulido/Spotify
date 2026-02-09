import { cardsMock } from '../../data/cardsMook'
import CardsLibrary from './CardsLibrary/CardsLibrary'

import './LibraryComponents.css'
const LibraryComponents = () => {
  return (
    <div className="left">
      {cardsMock.map(card => (
        <CardsLibrary image={card.image} title={card.title} key={card.id} />
      ))}
    </div>
  )
}

export default LibraryComponents
