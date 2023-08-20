import { Box, Button } from '@material-ui/core'
import React from 'react'
import './hero.css'


const Hero = () => {
  // bgcolor:'#0D1117'
  return (
    <>
    <Box className='bg-hero-img'>
      <Box sx={{fontSize:{xs:'2rem',sm:'2.5rem',md:'3rem',lg:'3.5rem'}}}>به فردا خوش آمدید.</Box>
    </Box>
    </>
  )
}

export default Hero