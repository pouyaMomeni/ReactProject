import React from "react";
import { Box } from "@material-ui/core";
import logo from '../../assets/img/bot-logo.png'
import { CustomButton } from "../Button";
import Typed from 'react-typed';

const NavBar = () => {
  return (
    <>
      <Box sx={{display:'flex',bgcolor:"#006666",padding:'0.5rem',justifyContent:'center',width:'100%',height:'3rem'}}>
        {/* part 1 */}
        <Box sx={{display:'flex',alignItems:'center',color:'white',padding:'0.3rem'}}>
          <Typed  
          strings={['اولین سامانه دستیار مشاوره مبتنی بر هوش مصنوعی',
          'ثبت شده به عنوان شرکت دانش بنیان',
          'با مجوز معاونت علمی فناوری ریاست جمهوری']}
          loop typeSpeed={40} backSpeed={30} />
        </Box>
      </Box>
      <Box sx={{height:'8rem',padding:'2rem',display:'flex',alignItems:'center'}}>
        <Box sx={{'&:hover': {cursor: 'pointer'}}}>
          <img src={logo} onClick={()=> window.location.href = '/start'} alt="Logo" width={215} height={50} />
        </Box>
      </Box>


    </>
  );
};

export default NavBar;
