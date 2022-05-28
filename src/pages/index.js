import React from "react"
import Layout from '../components/Layout'
import Headers from '../components/Headers'
import '../examples/main.scss'
export default function Home() {
  return (
	<Layout>
		<Headers />
		<section className="container">
          <div className="row">
            <div className="main">test for home page</div>
          </div>
        </section>
	</Layout>
	)
}
