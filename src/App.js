import React from 'react'
import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import Bodytop from './Bodytop/Bodytop'
import Bodyimage from './Bodyimage/Bodyimage'
import Bodycenter from './Bodycenter/Bodycenter'
import Footer from './Footer/Footer'
import FooterButtom from './FooterButtom/FooterButtom'
//import Footer from './Footer/Footer'
function App() {
  return (
    <div className='app'>
      <Header />
      <Carousel />
      <Bodytop />
      <Bodyimage />
      <Bodycenter/>
      <Footer/>
      <FooterButtom/>
    </div>
  )
}

export default App
