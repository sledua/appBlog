import React from "react"
import AllNote from "../../components/AllNote"
import Layout from "../../components/Layout"

const index = () => {
  return (
    <Layout>
      <section className="container">
        <div className="row">
          <div className="main">
						<AllNote/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
