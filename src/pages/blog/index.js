import React from "react"
import Layout from "../../components/Layout"
import Image from "../../examples/image"
const index = () => {
  return (
    <Layout>
      <section className="container">
        <div className="row">
          <div className="main">
						<Image/>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
