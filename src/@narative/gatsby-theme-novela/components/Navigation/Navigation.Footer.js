import Section from '@components/Section'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Customfooter from '../../../../components/customfooter'

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
            }
          }
        }
      }
    }
  }
`

function Footer() {
  const results = useStaticQuery(siteQuery)
  const { name, social } = results.allSite.edges[0].node.siteMetadata

  return (
    <>
      <Section narrow>
        <FooterContainer>
          <Customfooter />
        </FooterContainer>
      </Section>
    </>
  )
}

export default Footer

const FooterContainer = styled.div`
  position: relative;
`
