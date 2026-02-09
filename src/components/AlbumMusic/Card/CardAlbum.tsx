import { type Card } from '../../../type/typeCard'

const CardAlbum = ({ image, title }: Card) => {
  return (
    <div>
      <h1>album</h1>
      <div className="side-card">
        <img src={image} alt={title} className="side-card-image" />
        <h3 className="side-card-title">{title}</h3>
      </div>
    </div>
  )
}

export default CardAlbum
