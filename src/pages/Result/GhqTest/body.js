import React, { useState ,useEffect} from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import { Box ,Button} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
// 
import { calculateTest } from '../../../api/TestApi'
import { useUserState } from '../../../context/UserContext'
import { getPay } from '../../../api/TestApi'
import { toast } from "react-toastify";
import { CustomButton } from '../../../components/Button';

const BodyGhq = () => {
  const {identifier} = useUserState();
  // const identifier = "HTQ33"
  const [valid,setValid] = useState(true)
  const [scale_a,setScale_a] = useState("")
  const [scale_b,setScale_b] = useState("")
  const [scale_c,setScale_c] = useState("")
  const [scale_d,setScale_d] = useState("")
  const [scale_total,setScale_total] = useState("")
  const [chart,setChart] = useState([])
  // is paid
  const [paid,setPaid] = useState()
  const [price,setPrice] = useState("")
  const [message,setMessage] = useState("")

  useEffect(() => {
    calculateTest(identifier).then( res => {
      setPaid(res?.is_paid)
      console.log(res);
      if(res?.is_paid){
      setScale_a(res?.scale_1)
      setScale_b(res?.scale_2)
      setScale_c(res?.scale_3)
      setScale_d(res?.scale_4)
      setScale_total(res.total)
      click();

      }
      if(!res?.is_paid){
        setPaid(res?.is_paid)
        setMessage(res?.message)
        setPrice(res?.price)
      }
    }).catch(err => {
      if(err.response){
        if (err.response.status == 400) {
          toast.error('کد اختصاصی نامعتبر است');
          setValid(false)
        }
      }
    });
  }, [identifier,scale_total.length]);
/////
const click = () =>{
    setChart({
      labels: [scale_a?.name,scale_b?.name,scale_c?.name,scale_d?.name,scale_total?.name],
      datasets:[
        {
          label: ' ',
          data: [scale_a?.point,scale_b?.point,scale_c?.point,scale_d?.point,scale_total?.point],
          backgroundColor: ["#354f52"]

        }
      ]
    })
}
const options = {
  maintainAspectRatio : false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 15,
        }
      }
    },
    x: {
      ticks: {
        font: {
          size: 15,
          weight:'bold'
        }
      }
    }
  }
}

const payHandel = () =>{
  getPay(identifier).then((res)=>{
    console.log(res?.data?.link);
    window.location.href = res?.data?.link
  }).catch(err =>{
    console.log(err);
  })
}
const exiteFun = () =>{
  sessionStorage.clear();
  window.location.href = '/start'
}

  return (
    <>
    {paid == undefined ?    
      <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'30rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
      {
        valid ? 
        <>
          <Box>لطفا شکیبا باشید</Box>
          <CircularProgress />
        </>
        :
        <CustomButton onClick={exiteFun}>بازگشت به صفحه اصلی</CustomButton>
      }
      </Box>
      :
    <>
    {paid ? 
    <>
      <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
      <Box sx={{display:'flex',justifyContent:'center',marginBottom:'3rem',fontWeight:'bold',fontSize:{xs:'1.2rem',sm:'1.4rem',md:'1.5rem',lg:'1.6rem'}}}>
      آزمون غربالگری سلامت عمومی (GHQ)
      </Box>



        <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%'}}>
        {chart.length == 0   ? 
            <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'30rem',fontSize:'10rem' }}>
            <CircularProgress />
            </Box>
        :<Bar height='100%' options={options} data={chart}/>}
        </Box>
      </Box>

      <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center',fontSize:{xs:'1.2rem',sm:'1.4rem',md:'1.5rem',lg:'1.6rem'}}}>
        <Box sx={{fontWeight:'bold'}}>نتیجه کلی</Box>
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'0.9rem',sm:'0.9rem',md:'0.9rem',lg:'1rem'},margin:'30px',marginX:'20px'}}>
          <Box>نمره کسب شده در بعد  {scale_a?.name}، {scale_a?.message} </Box>
          <Box>نمره کسب شده در بعد {scale_b?.name}، {scale_b?.message} </Box>
          <Box>نمر کسب شده در بعد {scale_c?.name}، {scale_c?.message} </Box>
          <Box>نمره کسب شده در بعد {scale_d?.name}، {scale_d?.message} </Box>
          <Box>به صورت کلی، {scale_total.message}</Box>
      </Box>
      </>
    :''}

    {paid ?  '': 

      <Box sx={{width:'100%',height:'18rem',display:'flex',justifyContent:'center',marginTop:'6rem',border:1,borderColor:'red'}}>
      <Box sx={{bgcolor:'#EFF6E0',width:'30rem',display:'flex',flexDirection:'column',borderRadius:'1rem',overflow:'auto'}}>
        <Box sx={{bgcolor: '#5cb85c',color:'white',padding:'0.8rem',paddingRight:'1rem',fontSize:'1.2rem',display:'flex',justifyContent:'space-around'}}>
            <Box>پرداخت</Box>
        </Box>


        <Box sx={{marginY:'1.5rem',padding:'1rem',gridGap:'1.5rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Box>{message}</Box>
            </Box>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Box> قیمت :</Box>
                <Box>{price}</Box>
            </Box>
        </Box>

        <Box sx={{display:'flex',justifyContent:'center',gridGap:'20px',marginBottom:''}}>
        <Button
            // onClick={() => (window.location.href = "/start")}
            onClick={payHandel}
            style={{ marginRight: "5px" }}
            size="small"
            variant="contained"
            >
            رفتن به صفحه پرداخت
        </Button>
        <Button
            style={{ marginRight: "5px" }}
            size="small"
            variant="contained"
            onClick={exiteFun}
            >
            بازگشت به صفحه اصلی
          </Button>
        </Box>
      </Box>
      </Box>}  
    </>}
    </>
  )
}

export default BodyGhq