import './CardsLibrary.css'

type CardRoundType = {
  image: string
  title: string
}
const CardsLibrary = ({ image, title }: CardRoundType) => {
  return (
    <div className="round-full-card">
      <img src={image} alt={title} className="round-full-image" />
      <span className="round-full-title">{title}</span>
    </div>
  )
}

export default CardsLibrary
