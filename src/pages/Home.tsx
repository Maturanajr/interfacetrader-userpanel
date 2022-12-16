import React from 'react'
import Container from '../components/Home/Container/Container'
import Footer from '../components/Home/Footer/Footer'
import Header from '../components/Home/Header/Header'

export default function Home() {
  return (
    <div style={{display:'flex', flexDirection: 'column',justifyContent:'space-between', height:'100vh', width:'100vw'}}>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}
