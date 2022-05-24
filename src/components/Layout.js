import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Headers from "./Headers"
const Layout = ({ children }) => {
  return (
    <>
      <div className="navigation">
        <Navbar />
        <Headers/>
      </div>
      <div className="container">
        <section>
          <div className="row">
            <div className="main">{children}</div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Layout
