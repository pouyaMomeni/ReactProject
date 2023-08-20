import { Box } from '@material-ui/core'
import React from 'react'
import { CustomButton } from '../../components/Button'
import chair from '../../assets/img/chair.png'
import './index.css'
const Explain = () => {
  return (
    <Box className='bg-explaine' sx={{bgcolor:'white',height:'40rem',padding:'2rem',display:'flex'}}>
        {/* 1 */}
        <Box sx={{display:'flex',flexDirection:'column',width:'50%',gridGap:'5px'}}>
            <Box sx={{marginBottom:'1.5rem'}}>
                <CustomButton>مقایسه</CustomButton>
                <Box sx={{marginTop:'10px',fontSize:'1.4rem',fontWeight:'bold'}}>هوش مصنوعی یا روش رایج</Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
                <Box sx={{fontSize:'1.3rem',fontWeight:'bold'}}>
                مشاوره غیرحضوری
                </Box>
                <Box>
                عدم احساس شرم در هنگام ورود یا ترک کلینیک، احساس راحتی بیشتر در دادن اطلاعات دقیق‌تر، ورود اطلاعات در هرساعت از شبانه‌روز، میزان بیشتر افشای اطلاعات توسط مراجع، دسترسی مداوم به ساختار مشاوره از جمله مزایای هوش مصنوعی در قالب غیرحضوری بودن آن است.
                </Box>
            </Box>

            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
                <Box sx={{fontSize:'1.3rem',fontWeight:'bold'}}>
              پیش‌بینی دقیق‌تر  
                </Box>
                <Box>
                عدم احساس شرم در هنگام ورود یا ترک کلینیک، احساس راحتی بیشتر در دادن اطلاعات دقیق‌تر، ورود اطلاعات در هرساعت از شبانه‌روز، میزان بیشتر افشای اطلاعات توسط مراجع، دسترسی مداوم به ساختار مشاوره از جمله مزایای هوش مصنوعی در قالب غیرحضوری بودن آن است.
                </Box>
            </Box>

            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
                <Box sx={{fontSize:'1.3rem',fontWeight:'bold'}}>
                رویکرد سلف‌سرویس 
                </Box>
                <Box>
                در دسترس بودن هوش مصنوعی و در نتیجه تکمیل و یا اضافه کردن اطلاعات در هر زمان می‌تواند یکی از مزایای آن باشد که مراجع می‌تواند به سهولت و در هر زمان به آن دسترسی داشته باشد در حالیکه تنظیم قرار ملاقات تحت تاثیر زمانی است که لزوما در اختیار مراجع نیست.
                </Box>
            </Box>


        </Box>
        {/* 1 */}

    </Box>
  )
}

export default Explain