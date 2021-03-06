import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle={'404 Not found'}>
      <section className="section section-first">
        <h2>404</h2>
        <p>Sorry{" "}
          <span role="img" aria-label="Pensive emoji">😔</span>{" "}
          we couldn’t find what you were looking for.</p>
        <Link href="/"><span className="btn mt-4">Go to home page</span></Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage
