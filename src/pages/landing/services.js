import { Box } from '@material-ui/core'
import React from 'react'
import card5 from '../../assets/img/ic_5.png'
import card6 from '../../assets/img/ic_6.png'
import card7 from '../../assets/img/ic_7.png'
const Services = () => {
  return (
    <Box sx={{height:{xs:'45rem',sm:'40rem',md:'35rem',lg:'30rem'},bgcolor:'black',padding:'5rem'}}>
        <Box style={{background: 'linear-gradient( #1A5BF5, black)',border:'10px',borderColor:'white'}} sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',borderRadius:'20px',padding:'1rem'}}>
            <Box sx={{color:'white',fontSize:'1.8rem',fontWeight:'bold'}}>خدمات ما</Box>
            <Box sx={{color:'white',fontSize:'1.5rem',fontWeight:'bold'}}>سامانه هوش مصنوعی چه خدماتی می دهد</Box>
            <Box sx={{display:'flex',justifyContent: "space-evenly",alignItems:'center',flexWrap: "wrap",padding:'1rem',marginTop:'1rem',gridGap:'15px'}}>

                <Box sx={{bgcolor:'white',padding:'1rem',borderRadius:'15px',gridGap:'7px',display:'flex',flexDirection:'column',}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gridGap:'10px'}}>
                        <Box sx={{fontWeight:'bold',fontSize:'1rem'}}>تحلیل شخصیت</Box>
                        <img src={card5} alt="pic" style={{color:'black',backgroundColor:'gray',padding:'3px',borderRadius:'50%'}} width={40} height={40} />
                    </Box>
                    <Box>
                         شناخت جامع از شخصیت خود با بالاترین دقت و اعتماد 
                    </Box>
                </Box>

                <Box sx={{bgcolor:'white',padding:'1rem',borderRadius:'15px',gridGap:'7px',display:'flex',flexDirection:'column',}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gridGap:'10px'}}>
                        <Box sx={{fontWeight:'bold',fontSize:'1rem'}}>پیشبینی رضایت</Box>
                        <img src={card6} alt="pic" style={{color:'black',backgroundColor:'gray',padding:'3px',borderRadius:'50%'}} width={40} height={40} />
                    </Box>
                    <Box>
                    دقیق ترین پیشبینی سطح زناشویی خود در حال و آینده
                    </Box>
                </Box>

                <Box sx={{bgcolor:'white',padding:'1rem',borderRadius:'15px',gridGap:'7px',display:'flex',flexDirection:'column',}}>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gridGap:'10px'}}>
                        <Box sx={{fontWeight:'bold',fontSize:'1rem'}}>ارائه راهکار</Box>
                        <img src={card7} alt="pic" style={{color:'black',backgroundColor:'gray',padding:'3px',borderRadius:'50%'}} width={40} height={40} />
                    </Box>
                    <Box>
                        <Box>
                            دانستن راهکار های صحیح با تحلیل تیپ شخصیت و رضایت 
                        </Box>
                    </Box>
                </Box>


            </Box>
        </Box>

    </Box>
  )
}

export default Services

// 09357674584