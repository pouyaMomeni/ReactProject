import { Box } from '@material-ui/core'
import React from 'react'
// pic
import picHeader from '../../assets/img/original.png'
import logoLanding from '../../assets/img/logo-landing.png'
const HeaderLanding = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',bgcolor:'#030014',padding:'1.5rem'}}>
        <img src={picHeader} alt="pic" width={500} height={300} />
        <img src={logoLanding} alt="pic" width={250} height={150} style={{marginBottom:'1rem'}} />
    </Box>
  )
}

export default HeaderLanding