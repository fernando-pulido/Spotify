import './card.css'

const CardMusic = () => {
  return (
    <div className="card">
      <div className="card-top">
        <img
          src="https://via.placeholder.com/120"
          alt="imagen"
          className="card-img"
        />

        <p className="card-text">Este es un texto descriptivo.</p>
      </div>

      <h3 className="card-title">Título de la card</h3>
    </div>
  )
}

export default CardMusic
