import React from 'react'
import Boxes from './Boxes'
import NavBar from '../../components/Header/NavBarMain'
import Info from '../../components/Home/info'
import Services from '../../components/Home/services'
import TabPanel from '../../pages/landing/tabs.js'
import FormLanding from '../landing/form'
import Comments from '../../components/Home/commnets'
import SliderPage from '../../components/Home/slider'
const StartTest = () => {
  return (
    <>
      <NavBar/>
      {/* <Info/> */}
      <Boxes/>
      <Services/>
      <TabPanel/>
      {/* <FormLanding/> */}
      <SliderPage/>
      {/* <Comments/> */}
    </>
  )
}

export default StartTest