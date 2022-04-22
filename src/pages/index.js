import * as React from 'react'
import Layout from "../components/layout/layout";
import "../ui/_index.scss"
import {graphql} from "gatsby";
import {pagesWithContent} from "../helpers/dataTransforms";
import ContentSections from "../components/contentSections";
import WebformDrupal from "../components/webform";
import {useState} from "react";
import Webform from 'gatsby-drupal-webform'


const IndexPage = ({data}) => {
  let homePagedata = pagesWithContent(data)
  // console.log(data)
  // console.log(homePagedata)

  const [submitted, setSubmitted] = useState(false)
  return (
    <Layout pageTitle={homePagedata.title}>
      {homePagedata.content_section && homePagedata.content_section.map((page) => (
        <ContentSections key={page.id} section={page} />
      ))}

      {/*<Webform*/}
      {/*  id="webform"*/}
      {/*  webform={data.webformWebform}*/}
      {/*  endpoint={config.env.ENDPOINT}*/}
      {/*  onSuccess={() => {*/}
      {/*    setSubmitted(true)*/}
      {/*  }}*/}
      {/*/>*/}
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query getHomeData {
    nodePage(id: {eq: "4b86d89f-da4f-5830-9e75-f00b7248d3b8"}) {
      id
      title
      relationships {
        field_section_text {
          id
          field_id
          field_title {
            value
            format
            processed
          }
          field_styles
          relationships {
            field_column {
              id
              field_column_size
              field_column_text_size
              field_column_content {
                value
              }
                 relationships {
                field_maps {
                  id
                  field_map_styles
                  field_map {
                    height
                    width
                    lat
                    lon
                    zoom
                  }
                }
              }
            }
            field_image_background {
              uri {
                url
                value
              }
            }
             field_slideshow_paragraph {
              field_background_color
              id
              relationships {
                field_background_image {
                  uri {
                    url
                  }
                }
                field_slide_column {
                  field_column_size
                  field_column_text_size
                  field_column_content {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }
}

`