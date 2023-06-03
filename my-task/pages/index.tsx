import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageBackground from './components/ImageBackground/ImageBackground'
import StickHeader from './components/StickHeader/StickHeader'
import Table from './components/Table/Table'
import Head from 'next/head'
import { store } from './store'
import { Provider } from 'react-redux'

const Home: NextPage = () => {
  return (
    <Provider store={store}>
    <>


<Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
</Head>


    <div className="container">
        
        <ImageBackground />

        <div className="content">
          
          <StickHeader />

          <Table />
            
        </div>
    </div>
    <style jsx>{`
    .container {
      width: 100%;
      height: 100%;
      font-family: "Roboto", sans-serif;
    }
    .content {
      padding: 10px 25px;
      background-color: none;
      position: relative;
      bottom: 250px;
      z-index: 999;
    }
    `}</style>
    </>
    </Provider>
  )
}

export default Home
