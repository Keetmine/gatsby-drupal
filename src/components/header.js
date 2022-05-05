import React from "react"
import {useSiteMetadata} from "../hooks/use-site-metadata";
import {graphql, Link, useStaticQuery} from "gatsby";

const Header = () => {
  const {title} = useSiteMetadata()
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMenuItems {
        nodes {
          id
          title
          url
        }
      }
      blockContentBasic(id: {eq: "20abfd6f-d945-5d4f-a742-c4e2d685865c"}) {
        id
        body {
          value
        }
      }
    }
  `)
  return (
    <header className="header">
      <div className="container navbar ">
      <Link to="/" className="navbar-brand">
        {title}
      </Link>
      <nav  className="navigation">
        <ul className="nav">
          {data && data.allMenuItems.nodes.map((menu) => (
            <li key={menu.id} className="nav-link">
              <Link to={menu.url} className="nav-link">
                {menu.title}
              </Link>
            </li>
          ))}
          {data.blockContentBasic ? <div dangerouslySetInnerHTML={{__html: data.blockContentBasic.body.value}} /> : '' }
         {/* <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>*/}
        </ul>
      </nav>
      </div>
    </header>
  )
}
export default Header