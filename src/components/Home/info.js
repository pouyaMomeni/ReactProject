import React from 'react'
import imgOne from '../../assets/img/home/ic_1.png'
import imgTwo from '../../assets/img/home/ic_2.png'
import imgThree from '../../assets/img/home/ic_3.png'
import imgFour from '../../assets/img/home/ic_4.png'
import { Box } from '@material-ui/core'
const Info = () => {
  return (
<section className="section-percent">
  <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'space-around',bgcolor:'white',padding:'1rem'}}>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'15px',width:{xs:'45%',sm:'50%',md:'23%',lg:'23%'}}}>
      <img width={50} height={50} src={imgOne}/>
      <Box>
        <p>۸٣%</p>
        <p>دقت هوش مصنوعی در<br/>
        پیش بینی رضایت زناشویی</p>
      </Box>
    </Box>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'15px',width:{xs:'45%',sm:'50%',md:'23%',lg:'23%'}}}>
      <img src={imgTwo}/>
      <Box>
      <p>٣١%</p>
      <p>در کشور ما: یک طلاق به<br/> ازای هر 3 ازدواج</p>
      </Box>
    </Box>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'15px',width:{xs:'45%',sm:'50%',md:'23%',lg:'23%'}}}>
      <img src={imgThree}/>
      <Box>
        <p>۴٣%</p>
        <p>دقت روشهای فعلی در<br/>
            پیش بینی رضایت زناشویی</p>
      </Box>
    </Box>
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'15px',width:{xs:'45%',sm:'50%',md:'23%',lg:'23%'}}}>
      <img src={imgFour}/>
      <Box>
        <p>%۴۵</p>
        <p>ضعف مهارتهای ارتباطی، از<br/> مهمترین دلایل طلاق</p>
      </Box>
    </Box>
  </Box>
</section>
  )
}

export default Info