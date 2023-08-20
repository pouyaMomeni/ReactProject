import { Box } from '@material-ui/core'
import React from 'react'
import { Settings } from './setting'
import { Data } from './data'
import './index.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pic from '../../../assets/img/slider/pic.png'
const SliderPage = () => {
  return (
    <Box sx={{padding:'2rem',marginBottom:'2rem'}}>
          <Box sx={{fontSize:'1rem',bgcolor:'#006666',width:'8rem',color:'white',display:'flex',justifyContent:'center',padding:'4px',marginBottom:'1.5rem',marginRight:{xs:'1rem',sm:'1.5rem',md:'2rem',lg:'3rem'},marginTop:'2rem'}}>دیدگاه نخبگان </Box>
            <Box sx={{fontSize:'1.7rem',padding:'4px',marginBottom:'2rem',marginRight:{xs:'1rem',sm:'1.5rem',md:'2rem',lg:'3rem'}}}>کاربرد هوش مصنوعی در روانشناسی</Box>
    <Slider rtl={true} currentSlide={0} {...Settings}>
    {Data.map((index,key)=>{
        return(
        <Box key={key} dir='rtl' sx={{marginX:'10px'}}>
            <Box sx={{bgcolor:'#f7f7f7',height:{xs:'9rem',sm:'9rem',md:'8rem',lg:'8rem'},width:{xs:'18rem',sm:'20rem',md:'23rem',lg:'25rem'}}} >
                <Box  sx={{fontSize:index.id === 3 ? '0.6rem': '0.7rem',display:'flex',alignItems:'center',padding:'0.8rem'}}>{index.des}</Box>
                <Box sx={{display:'flex',justifyContent:'end',marginLeft:'1rem'}}>
                <img width={30} src={pic} alt="" />
                </Box>
            </Box>
            <Box sx={{display:'flex',gridGap:'10px',marginRight:'30px',marginTop:'10px'}}>
                <img className='img-border' src={index.img} width={40} alt="pic" />
                <Box sx={{display:'flex',flexDirection:'column',gridGap:'5px'}}>
                    <Box sx={{fontSize:'0.7rem'}}>{index.name}</Box>
                    <Box sx={{fontSize:'0.7rem'}}>{index.univercity}</Box>
                </Box>
            </Box>
        </Box>
        )
    })
    }
    </Slider>
    </Box>
  )
}

export default SliderPage