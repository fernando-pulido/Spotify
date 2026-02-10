import Album from '../Album/Album'
import NavBar from '../NavBar/NavBar'
import Buttons from '../Buttons/Buttons'
import PlayList from '../PlayList/PlayList'

import './layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <Buttons />
          <PlayList />
        </aside>
        <main className="content">
          <Buttons />
          <Album />
        </main>
      </div>
    </>
  )
}

export default Layout
