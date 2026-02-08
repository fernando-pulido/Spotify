import CardMusic from './Card/CardMusic'
import Img from '../../assets/img/Img.png'

import './AlbumMusic.css'
import Buttons from '../Buttons/Buttons'

const AlbumMusic = () => {
  return (
    <div className="content">
      <div>
        <Buttons />
      </div>
      <div className="Cards">
        <CardMusic image={Img} title="cantante de musica pop" />
        <CardMusic image={Img} title="Yeison gimenez " />
        <CardMusic image={Img} title="bab bunny benito" />
      </div>
      <div className="Cards-autores">
        <h1>hola</h1>
      </div>
      <div className="Cards-albums">cards albums</div>
    </div>
  )
}

export default AlbumMusic
