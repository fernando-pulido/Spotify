import Card from '../Card/Card'
import { cardsMock } from '../../data/cardsMook'
import './PlayList.css'
const PlayList = () => {
  return (
    <div className="card-playlist">
      {cardsMock.map(data => (
        <Card key={data.id} image={data.image} title={data.title} />
      ))}
    </div>
  )
}

export default PlayList
