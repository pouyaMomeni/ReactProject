import React from "react";
import { Box } from "@material-ui/core";
import logo from '../../assets/img/logo_old.png'
import { CustomButton } from "../Button";


const NavBar = () => {
  const exiteFun = () =>{
    sessionStorage.clear();
    window.location.href = '/start'
  }

  return (
    <>
      <Box sx={{display:'flex',bgcolor:'#42474c',padding:'0.5rem',justifyContent:'center',width:'100%',height:'3rem'}}>
        {/* part 1 */}
        <Box sx={{display:'flex',gridGap:'15px',borderRight:1}}>
          <Box sx={{display:'flex',alignItems:'center',gridGap:'5px'}}>
            <Box sx={{color:'white'}}>اولین</Box>
            <Box sx={{color:'#919191'}}>سامانه هوشمند مبتنی بر هوش مصنوعی</Box>
          </Box>
          <Box sx={{display:{xs:'none',sm:'none',md:'flex',lg:'flex'},alignItems:'center',gridGap:'5px'}}>
            <Box sx={{color:'#919191'}}>ثبت شده به عنوان</Box>
            <Box sx={{color:'white'}}>شرکت دانش بنیان</Box>
          </Box>
          <Box sx={{display:{xs:'none',sm:'flex',md:'flex',lg:'flex'},alignItems:'center',gridGap:'5px'}}>
            <Box sx={{color:'#919191'}}>تحت نظارت معاونت علمی فناوری</Box>
            <Box sx={{color:'white'}}>ریاست جمهوری</Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box sx={{height:'8rem',padding:'2rem',display:'flex',alignItems:'center',justifyContent:'space-around',bgcolor:'	#E8E8E8'}}>
        <img src={logo} alt="Logo" width={230} height={50} />
        <Box></Box>
        <CustomButton onClick={exiteFun}>خروج</CustomButton>
      </Box>
    </>
  );
};

export default NavBar;
