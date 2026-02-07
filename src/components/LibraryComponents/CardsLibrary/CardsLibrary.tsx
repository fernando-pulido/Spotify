import './CardsLibrary.css'

type CardRoundType = {
  image: string
  title: string
}
const CardsLibrary = ({ image, title }: CardRoundType) => {
  return (
    <div className="round-card">
      <div className="card-top">
        <img src={image} alt={title} className="card-img" />

        <p className="round-title">{title}</p>
      </div>
    </div>
  )
}

export default CardsLibrary
