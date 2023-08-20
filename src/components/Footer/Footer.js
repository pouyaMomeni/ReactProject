import { Box,Divider } from '@material-ui/core';
import React from 'react';
import logo from '../../assets/img/top-logo.png'
import flag from '../../assets/img/footer/flag.png'
import TelegramIcon from '@material-ui/icons/Telegram';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';


const Footer = () => {
    return (

        <Box style={{background:'#224331'}} sx={{padding:'1.3rem'}}>
            <Box sx={{display:'flex',justifyContent:'space-around',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}}>

                <Box>
                    <img src={logo} alt="Logo" width={215} height={50} />
                    <Box sx={{display:'flex',gridGap:'15px',color:'#AEC3B0',alignItems:'center',marginTop:'1rem',fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
                        <Box >ارتباط با ما :</Box>
                        <Box sx={{display:'flex',alignItems:'center',gridGap:'5px'}}>
                            <CallIcon style={{width:'18px'}}/>
                            <Box>۸۸۹۴۰۷۹۴ ۰٢١</Box>
                         </Box>
                        <Box>|</Box>
                         <Box sx={{display:'flex',alignItems:'center',gridGap:'5px'}}>
                            <MailIcon style={{width:'18px'}}/>
                            <Box>info@iranaic.com</Box>
                        </Box>
                    </Box>                    
                </Box>

                <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'center',md:'end',lg:'end'},marginTop:{xs:'15px',sm:'10px',md:'0',lg:'0'}}}>
                    {/* <img style={{width:100,height:90}} src={"/img/hamkari-logo.png"}/>
                    <img style={{width:90,height:80}} src={flag}/> */}
                </Box>

            </Box>

            <Box sx={{marginTop:{xs:'1rem',sm:'1rem',md:'2rem',lg:'2rem5rem'},marginRight:{xs:'0',sm:'0',md:'4rem',lg:'5rem'},display:'flex',alignItems:'center',color:'#AEC3B0',gridGap:'5px',fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'},flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},justifyContent:{xs:'start',sm:'start',md:'center',lg:'center'}}}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <Box>
                        <LocationOnIcon style={{width:'20px',marginBottom:'3px',marginLeft:'3px'}} />
                    </Box>
                    <Box sx={{}}>آدرس :</Box>
                </Box>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                تهران خیابان استاد نجات‌اللهی خیابان ارشد . ساختمان مراکز تحقیقاتی دانشگاه شاهد. طبقه پنجم. موسسه تفکر توسعه آینده نگر
                </Box>
            </Box>
            <Divider style={{background:'#AEC3B0',height:'2px'}}/>
            <Box sx={{color:'#AEC3B0',fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'0.9rem'}}}>
            موسسه تفکر توسعه آینده‏‌نگر برای اولین بار و با تحلیل ریشه های طلاق در کشور، و همچنین با بهره گیری از متخصصان هوش مصنوعی و متخصصان روانشناسی و روانسنجی، «سامانه هوشمند مشاوره ازدواج» را بر اساس هوش مصنوعی طراحی نموده است که با انجام تست شخصیت و تحلیل آن و با ضریب صحت بالا، رضایت زناشویی آتی زوجین را پیش بینی نموده و توصیه های لازم را به زوجین می نماید.
            </Box>
            <Box sx={{display:'flex',justifyContent:'center',marginTop:'2rem',height:'10%',color:'#AEC3B0'}}> All rights reserved by Masir</Box>
        </Box>
    );
};

export default Footer;
