import { Box } from '@material-ui/core'
import React from 'react'
import { CustomButtonLanding } from '../../components/Button'
import logoCard from '../../assets/img/logo-card.png'
import card2 from '../../assets/img/ic_2.png'
import card3 from '../../assets/img/ic_3.png'
import card4 from '../../assets/img/ic_4.png'
import './index.css'
const HeroLanding = () => {
  return (
    <div className='bg-image-landing' >

    <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',}}>
        <CustomButtonLanding style={{marginTop:'1rem',marginBottom:'1rem'}}>
            ورود به سامانه هوش مصنوعی
        </CustomButtonLanding>

        <Box sx={{height:'8rem'}}></Box>

        <Box sx={{width:'90%',height:{xs:'none',sm:'none',md:'23rem',lg:'27rem'},bgcolor:'white',borderRadius:'33px',display:{xs:'none',sm:'none',md:'flex',lg:'flex'},flexDirection:'column'}}>
            {/* for desktop */}
            <Box  className='bg-image-landing-sec' sx={{height:{xs:'none',sm:'none',md:'100%',lg:'80%'}}} >
                <Box sx={{width:'50%',padding:{xs:'1rem',sm:'1rem',md:'1rem'},display:'flex',flexDirection:'column'}}>
                    <Box sx={{fontSize:{xs:'1rem',sm:'1rem',md:'1.3rem',lg:'1.8rem'},fontWeight:'bold',color:'black'}}>به رویاهات تحقق ببخش.</Box>
                    <Box sx={{fontSize:{xs:'1rem',sm:'1rem',md:'1.3rem',lg:'1.8rem'},fontWeight:'bold',color:'black'}}>مشکلات احتمالی فردا را، امروز بدانید.</Box>
                    <Box sx={{marginTop:'20px',width:'80%',fontSize:'1rem'}}>
                    می توانید با بهره گیری از هوش مصنوعی، مشکلاتی که ممکن است در زندگی مشترک اتفاق بیافتد را بداتید و برای آن ها راهکار اختصاصی داشته باشید
                    </Box>
                    {/* <Box sx={{marginTop:'1rem',display:'flex',alignItems:'center',gridGap:'10px'}}>
                        <img src={logoCard} alt="pic" width={50} height={50}/>
                        <Box >
                            <Box sx={{color:'#1A5BF5'}}>مشاوره هوشمند</Box>
                            <Box sx={{color:'#1A5BF5'}}>سامانه آزمون مسیر</Box>
                        </Box>
                    </Box> */}
                </Box>
            </Box>
            <Box sx={{display:{xs:'none',sm:'none',md:'none',lg:'flex'},height:"20%",justifyContent: "space-evenly",alignItems:'center',flexWrap: "wrap",padding:'1rem'}}>
                <Box sx={{bgcolor:'#dee2e6',display:'flex',alignItems:'center',justifyContent:'center',padding:'0.5rem',borderRadius:'15px',gridGap:'5px',width:'20%',marginBottom:'0.8rem'}}>
                    <img src={logoCard} alt="pic" width={40} height={40}/>
                    <Box sx={{width:'60%'}}>دقت هوش مصنوعی در پیشبینی رضایت زناشویی</Box>
                    <Box sx={{fontWeight:'bold'}}>83%</Box>
                </Box>
                <Box sx={{bgcolor:'#dee2e6',display:'flex',alignItems:'center',justifyContent:'center',padding:'0.5rem',borderRadius:'15px',gridGap:'5px',width:'20%',marginBottom:'0.8rem'}}>
                    <img src={card2} alt="pic" width={40} height={40}/>
                    <Box sx={{width:'60%'}}>در کشور ما یک طلاق به ازای هر سه ازدواج</Box>
                    <Box sx={{fontWeight:'bold'}}>31%</Box>
                </Box>
                <Box sx={{bgcolor:'#dee2e6',display:'flex',alignItems:'center',justifyContent:'center',padding:'0.5rem',borderRadius:'15px',gridGap:'5px',width:'20%',marginBottom:'0.8rem'}}>
                    <img src={card3} alt="pic" width={40} height={40}/>
                    <Box sx={{width:'60%'}}>دقت روش های فعلی در پیشبینی رضایت زناشویی</Box>
                    <Box sx={{fontWeight:'bold'}}>43%</Box>
                </Box>
                <Box sx={{bgcolor:'#dee2e6',display:'flex',alignItems:'center',justifyContent:'center',padding:'0.5rem',borderRadius:'15px',gridGap:'5px',width:'20%',marginBottom:'0.8rem'}}>
                    <img src={card4} alt="pic" width={40} height={40}/>
                    <Box sx={{width:'60%'}}>ضعف مهارتهای ارتباطی، از دلایل طلاق</Box>
                    <Box sx={{fontWeight:'bold'}}>45%</Box>
                </Box>
            </Box>
        </Box>
        {/* for mobile */}
        <Box sx={{width:'85%',height:'18rem',bgcolor:'#f0ead2',borderRadius:'15px',display:{xs:'flex',sm:'flex',md:'none',lg:'none'},flexDirection:'column',alignItems:'center',padding:'1rem'}}>
            <Box sx={{marginTop:'0.2rem',marginBottom:'1.3rem',display:'flex',alignItems:'center',gridGap:'10px',}}>
                <img src={logoCard} alt="pic" width={50} height={50}/>
                <Box>
                    <Box sx={{color:'#1A5BF5'}}>مشاوره هوشمند</Box>
                    <Box sx={{color:'#1A5BF5'}}>سامانه آزمون مسیر</Box>
                </Box>
            </Box>            
            <Box sx={{fontSize:{xs:'1rem',sm:'1.4rem',md:'1.3rem',lg:'1.8rem'},fontWeight:'bold',color:'black'}}>به رویاهات تحقق ببخش.
            </Box>
            <Box sx={{fontSize:{xs:'1rem',sm:'1.4rem',md:'1.3rem',lg:'1.8rem'},fontWeight:'bold',color:'black'}}>مشکلات احتمالی فردا را، امروز بدانید.
            </Box>
            <Box sx={{marginTop:'20px',width:'80%',fontSize:'1rem',padding:'0.4rem'}}>
                    می توانید با بهره گیری از هوش مصنوعی، مشکلاتی که ممکن است در زندگی مشترک اتفاق بیافتد را بداتید و برای آن ها راهکار اختصاصی داشته باشید.
            </Box>
        </Box>
    </Box>
    </div>
  )
}

export default HeroLanding


