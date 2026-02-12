import { cardsMock } from '../../data/cardsMook'
import CardRectangular from '../Cards/CardRectangular/CardRectangular'

import './FavoriteAlbum'
const FavoriteAlbum = () => {
  return (
    <div className="card-rectangular">
      {cardsMock.map(data => (
        <CardRectangular key={data.id} image={data.image} title={data.title} />
      ))}
    </div>
  )
}

export default FavoriteAlbum
