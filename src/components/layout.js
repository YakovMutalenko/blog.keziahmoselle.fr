import React from 'react'

import Header from './Header'
import Footer from './Footer'

import './index.css'
import './markdown.css'

function Layout ({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = <Header isHomepage />
  } else {
    header = <Header />
  }

  return (
    <div id="root">
      {header}

      <main className="container medium">
        <h3>Derniers articles</h3>
        <div className="block">{children}</div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout