import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/layout/layout'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`
export default BlogPage