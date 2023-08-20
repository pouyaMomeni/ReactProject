import { Box,TextField } from '@material-ui/core'
import React from 'react'
import { CustomButton } from '../../components/Button'
const FormLanding = () => {
  return (
    <>
    <Box style={{background:'radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)'}} sx={{height:'25rem',display:'flex',padding:'2rem',flexDirection:'column'}}>
        <Box sx={{fontSize:'1.3rem',color:'white',display:'flex',justifyContent:'center',marginBottom:'30px'}}>
            برای مشاوره و گفتگو این فرم را پر کنید
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gridGap:'20px'}}>
            <TextField
            id="outlined-uncontrolled"
            label="نام"
            style={{width:'50%'}}
            />
            <TextField
            id="outlined-uncontrolled"
            label="نام شرکت"
            style={{width:'50%'}}
            />
            <TextField
            id="outlined-uncontrolled"
            label="شماره ثابت یا همراه"
            style={{width:'50%'}}
            />
            <CustomButton style={{width:'30%'}}>
                ارسال فرم
            </CustomButton>
        </Box>
    </Box>
    </>
  )
}

export default FormLanding