import Card from '../Cards/Card'
import { cardsMock } from '../../data/cardsMook'

import './Album.css'
import CardAlbum from '../Cards/CardAlbum/CardAlbum'

const Album = () => {
  return (
    <div className="card-albums">
      {cardsMock.map(data => (
        <CardAlbum
          key={data.id}
          image={data.image}
          title={data.title}
          description={data.description}
        />
      ))}
    </div>
  )
}

export default Album
