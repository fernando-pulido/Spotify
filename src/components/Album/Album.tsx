import Card from '../Card/Card'
import { cardsMock } from '../../data/cardsMook'

import './Album.css'

const Album = () => {
  return (
    <div className="card-albums">
      {cardsMock.map(data => (
        <Card key={data.id} image={data.image} title={data.title} />
      ))}
    </div>
  )
}

export default Album
