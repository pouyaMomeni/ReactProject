import { Box } from '@material-ui/core'
import React from 'react'
import { CustomButton } from '../Button';
import logo from '../../assets/img/logo.png'
import pic from '../../assets/img/bgL.png'
import pic1 from '../../assets/img/bgRN.png'
const NaVTest = () => {
  return (


    <Box sx={{display:'flex',justifyContent:'space-around',width:'100%',padding:'2rem',alignItems:'center'}}>
        <Box></Box>
        <Box>
            <img src={logo} width={180} alt='logo'/>
        </Box>
        <Box>
            <CustomButton
            onClick={() => {
                sessionStorage.clear();
                window.location.reload();
            }}
            >
                خروج
            </CustomButton>
        </Box>
    </Box>

  )
}

export default NaVTest;