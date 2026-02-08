import Img from '../../assets/img/img.png'
import CardsLibrary from './CardsLibrary/CardsLibrary'

const LibraryComponents = () => {
  return (
    <div>
      <CardsLibrary image={Img} title="cantante" />
      <CardsLibrary image={Img} title="cantante" />
    </div>
  )
}

export default LibraryComponents
