import * as React from 'react'
import Layout from "../components/layout/layout";
import "../ui/_index.scss"
import {graphql} from "gatsby";
import {pagesWithContent, webformForm, YAMLToJSON} from "../helpers/dataTransforms";
import ContentSections from "../components/contentSections";
import {useState} from "react";


const IndexPage = ({data}) => {
  let homePagedata = pagesWithContent(data)

  return (
    <Layout pageTitle={homePagedata.title}>
      {homePagedata.content_section && homePagedata.content_section.map((page) => (
        <ContentSections key={page.id} section={page} />
      ))}
    </Layout>)
}
export default IndexPage

export const query = graphql`
  query getHomeData {
   nodePage(path: {alias: {eq: "/home"}}) {
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
            field_slideshow {
              id
              relationships {
                field_slides {
                  field_background_color
                  relationships {
                    field_background_image {
                      uri {
                        url
                      }
                    }
                    field_slide_column {
                      field_column_text_size
                      field_column_size
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
  }
}
`