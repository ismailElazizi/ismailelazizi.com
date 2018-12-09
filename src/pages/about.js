import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Project from "../components/project"
import Header from "../components/header"

const IndexPage = ({data }) => (

  

  <Layout>
    <div className='hero-section' >
        <div className="container">
            <Header></Header>
        </div> 
    </div>   
    


  </Layout>
)

export default IndexPage


