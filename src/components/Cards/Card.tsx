import { type Card } from '../../type/typeCard'

import './Card.css'

const Card = ({ image, title }: Card) => {
  return (
    <div className="round-full-card">
      <img src={image} alt={title} className="round-full-image" />
      <span className="round-full-title">{title}</span>
    </div>
  )
}

export default Card
