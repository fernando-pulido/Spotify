import './card.css'

type CardRoundType = {
  image: string
  title: string
}

const CardMusic = ({ image, title }: CardRoundType) => {
  return (
    <div className="side-card">
      <img src={image} alt={title} className="side-card-image" />
      <h3 className="side-card-title">{title}</h3>
    </div>
  )
}

export default CardMusic
