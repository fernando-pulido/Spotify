import './CardAlbum.css'

type AlbumCardProps = {
  image: string
  title: string
  description?: string
}

const CardAlbum = ({ image, title, description }: AlbumCardProps) => {
  return (
    <div className="album-card">
      <div className="album-card__image">
        <img src={image} alt={title} />

        <button className="album-card__play">▶</button>
      </div>

      <h3 className="album-card__title">{title}</h3>
      {description && <p className="album-card__description">{description}</p>}
    </div>
  )
}

export default CardAlbum
