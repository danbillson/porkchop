import React from 'react'
import Layout from '../components/layout'
import Link from '../components/link'
import Modal from '../components/modal'

const Home = () => (
  <Layout title="Welcome">
    <Modal>
      <h2>Hey there, you look a bit lost.</h2>
      <p>
        You must be wanting to know how to handle multi page form submissions...
        Unfortunately I have no idea how to do that but maybe we can both learn
        something if you follow me into the world of Next.js
      </p>
      <Link href="/you">Let's go</Link>
    </Modal>
  </Layout>
)

export default Home
