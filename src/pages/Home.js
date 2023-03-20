import React from "react"
import {Link} from "react-router-dom"
import Layout from "../components/Layout"
import Banner from "../images/banner.avif"
import "../style/Home.css"

function Home() {
  return (
    <>
      <Layout>
        <div className="home" style={{backgroundImage: `url(${Banner})`}}>
          <div className="headerContainer">
            <h1>Restaurant Website</h1>
            <Link to="/menu">
              <button>Order Now</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
