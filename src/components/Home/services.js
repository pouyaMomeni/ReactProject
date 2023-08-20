import React from 'react'
import imgThree from '../../assets/img/services/ic_5.png'
import imgTow from '../../assets/img/services/ic_6.png'
import imgOne from '../../assets/img/services/ic_7.png'
import { Box, Typography } from '@material-ui/core'
import './index.css'
const Services = () => {
  return (
<Box sx={{display:'flex',flexDirection:'column',padding:'1rem'}}>
  {/* <Box sx={{fontSize:'0.9rem',bgcolor:'#006666',width:'5rem',color:'white',display:'flex',justifyContent:'center',padding:'4px',marginBottom:'1.5rem',marginRight:{xs:'1rem',sm:'1.5rem',md:'2rem',lg:'3rem'},marginTop:'2rem'}}>خدمات ما</Box> */}
  <Box sx={{fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'},padding:'4px',marginBottom:'2rem',marginRight:{xs:'0.7rem',sm:'1.5rem',md:'2rem',lg:'3rem'},display:'flex',justifyContent:'center',marginTop:'1rem'}}>سامانه هوش مصنوعی چه خدماتی میدهد</Box>

  <Box sx={{display:'flex',justifyContent:'space-around',marginTop:'10px',flexWrap:'wrap',gridGap:'15px'}}>
    <Box className='hover-2' sx={{display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'60%',sm:'50%',md:'31%',lg:'31%'},flexDirection:'column'}}>
      <img src={imgOne}/>
      <p style={{marginTop:'10px'}}>1.تحلیل شخصیت</p>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>شناخت جامع از شخصیت خود<br/> با بالاترین دقت و اعتماد</Box>
    </Box>
    <Box className='hover-3' sx={{display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'60%',sm:'50%',md:'31%',lg:'31%'},flexDirection:'column'}}>
      <img width={50} height={50} src={imgTow}/>
      <p style={{marginTop:'10px'}}>2.پیش بینی رضایت</p>
      <p>دقیق‌ترین پیش‌بینی سطح<br/> رضایت زناشویی خود در آینده</p>
    </Box>
    <Box className='hover-1' sx={{display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'60%',sm:'50%',md:'31%',lg:'31%'},flexDirection:'column',padding:'0.4rem'}}>
      <img src={imgThree}/>
      <p style={{marginTop:'10px'}}>3.ارائه راهکار</p>
      <p>دانستن رفتارهای صحیح <br/>با تحلیل تیپ شخصیت و سطح رضایت </p>
    </Box>
  </Box>
</Box>
  )
}

export default Services