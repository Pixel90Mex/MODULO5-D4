import React from 'react'
import MyNav from '../components/MyNav'
import MyCarousel from '../components/MyCarousel'
import MyFooter from '../components/MyFooter'
import MyBookList from '../components/MyBookList'

const Home = () => {

  return (
    <>
      <MyNav />
      <MyCarousel/>
      <MyBookList/>
      <MyFooter />
    </>
  )
}

export default Home;