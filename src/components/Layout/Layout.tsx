import Album from '../Album/Album'
import NavBar from '../NavBar/NavBar'
import Buttons from '../Buttons/Buttons'
import PlayList from '../PlayList/PlayList'

import './layout.css'
import FavoriteAlbum from '../FavoriteAlbum/FavoriteAlbum'

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <Buttons />
          <br />
          <PlayList />
        </aside>
        <main className="content2">
          <Buttons />
          <br />
          <FavoriteAlbum />
          <br />
          <Album />
        </main>
      </div>
    </>
  )
}

export default Layout
