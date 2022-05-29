import React from "react"
import Layout from "../components/Layout"
import Headers from "../components/Headers"
import "../examples/main.scss"
import Test from "../examples/Test"
export default function Home() {
  return (
    <Layout>
      <Headers />
      <section className="container">
        <div className="row">
          <div className="main">
						<Test/>
						{/* 5:01 */}
					</div>
        </div>
      </section>
    </Layout>
  )
}
