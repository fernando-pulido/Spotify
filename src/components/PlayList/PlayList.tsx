import { cardsMock } from '../../data/cardsMook'
import CardPlayList from '../Cards/CardPlayList/CardPlayList'

import './PlayList.css'

const PlayList = () => {
  return (
    <div className="card-playlist">
      {cardsMock.map(data => (
        <CardPlayList key={data.id} image={data.image} title={data.title} />
      ))}
    </div>
  )
}

export default PlayList
