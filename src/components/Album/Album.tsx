import { cardsMock } from '../../data/cardsMook'
import CardAlbum from '../Cards/CardAlbum/CardAlbum'

import './Album.css'

const Album = () => {
  return (
    <>
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
    </>
  )
}

export default Album
