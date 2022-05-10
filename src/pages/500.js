import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle={'500 Internal Server Error'}>
      <section className="section section-first">
        <h2>500</h2>
        <p>Internal Server Error</p>
        <Link href="/"><span className="btn mt-4">Go to home page</span></Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
