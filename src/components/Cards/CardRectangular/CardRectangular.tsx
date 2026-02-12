import './CardRectangular.css'

type HorizontalCardProps = {
  image: string
  title: string
}

const CardRectangular = ({ image, title }: HorizontalCardProps) => {
  return (
    <div className="horizontal-card">
      <img src={image} alt={title} className="horizontal-card__image" />
      <span className="horizontal-card__title">{title}</span>
    </div>
  )
}

export default CardRectangular
