import React from "react"
import Layout from "../components/Layout"
import Headers from "../components/Headers"
import AllNote from "../components/AllNote"
import "../examples/main.scss"

export default function Home() {
  return (
    <Layout>
      <Headers />
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
