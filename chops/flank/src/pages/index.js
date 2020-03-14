import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useShopify } from "../store"

const Home = () => {
  const { checkout, shop, products } = useShopify()

  console.log({ checkout, shop, products })

  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default Home
