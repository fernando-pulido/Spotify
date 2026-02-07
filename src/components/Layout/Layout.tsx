import NavBar from '../NavBar/NavBar'
import AlbumMusic from '../AlbumMusic/AlbumMusic'
import LibraryComponents from '../LibraryComponents/LibraryComponents'

import './layout.css'

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <LibraryComponents />
        </aside>
        <main className="content">
          <AlbumMusic />
        </main>
      </div>
    </>
  )
}

export default Layout
