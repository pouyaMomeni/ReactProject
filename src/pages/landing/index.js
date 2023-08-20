import React from 'react'
import HeaderLanding from './header'
import HeroLanding from './hero'
import Services from './services'
import BasicTabs from './tabs'
import Footer from '../../components/Footer/Footer'
import FormLanding from './form'
import Explain from './explain'
const LandingPage = () => {
  return (
    <>
        <HeaderLanding/>
        <HeroLanding/>
        <Services/>
        <BasicTabs/>
        <FormLanding/>
        <Explain/>
        <Footer/>
    </>
  )
}

export default LandingPage