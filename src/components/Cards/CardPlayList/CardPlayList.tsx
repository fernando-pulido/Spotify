import { type Card } from '../../../type/typeCard'

import './CardPlayList.css'

const CardPlayList = ({ image, title }: Card) => {
  return (
    <div className="round-full-card">
      <img src={image} alt={title} className="round-full-image" />
      <span className="round-full-title">{title}</span>
    </div>
  )
}

export default CardPlayList
