import './card.css'

import { type Card } from '../../../type/typeCard'

const CardMusic = ({ image, title }: Card) => {
  return (
    <div className="side-card">
      <img src={image} alt={title} className="side-card-image" />
      <h3 className="side-card-title">{title}</h3>
    </div>
  )
}

export default CardMusic
