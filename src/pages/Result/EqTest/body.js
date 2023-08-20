import React, { useState ,useEffect} from 'react'
import { Box ,Button} from '@material-ui/core'
import { useUserState } from '../../../context/UserContext'
import { calculateTest } from '../../../api/TestApi'
import SituationPage from '../../Situation'
import { getPay } from '../../../api/TestApi'
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from "react-toastify";
import { CustomButton } from '../../../components/Button'
import {Chart as ChartJs} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'

const BodyEq = () => {
  const {identifier} = useUserState();
  // chart
  const [chart,setChart] = useState([])
  // const identifier = "HDZJH"
  const [valid,setValid] = useState(true)
  const [data,setData] = useState("")
  const [scale_1,setScale_1] = useState("")
  const [scale_2,setScale_2] = useState("")
  const [scale_3,setScale_3] = useState("")
  const [scale_4,setScale_4] = useState("")
  const [scale_5,setScale_5] = useState("")

  const [scale_11,setScale_11] = useState("")
  const [scale_22,setScale_22] = useState("")
  const [scale_33,setScale_33] = useState("")
  const [scale_44,setScale_44] = useState("")
  const [scale_55,setScale_55] = useState("")

  const [scale_16,setScale_16] = useState("")
  //
  const [status,setStatus] = useState(true)
  // is paid
  const [paid,setPaid] = useState()
  const [price,setPrice] = useState("")
  const [message,setMessage] = useState("")
  useEffect(() => {
    calculateTest(identifier).then( res => {
      console.log(res);
      setPaid(res?.is_paid)
      if(res?.is_paid){
        setData(res)
        setScale_1(res?.sub_subject_1?.scales_data)
        setScale_2(res?.sub_subject_2?.scales_data)
        setScale_3(res?.sub_subject_3?.scales_data)
        setScale_4(res?.sub_subject_4?.scales_data)
        setScale_5(res?.sub_subject_5?.scales_data)
        setScale_11(res?.sub_subject_1)
        setScale_22(res?.sub_subject_2)
        setScale_33(res?.sub_subject_3)
        setScale_44(res?.sub_subject_4)
        setScale_55(res?.sub_subject_5)
        setScale_16(res?.total)
        console.log(scale_55.name);
        click();
      }
      if(res?.is_paid == false){
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
  }, [identifier,scale_16.length]);

const click = () =>{
    setChart({
      labels: [scale_11?.name,scale_22?.name,scale_33?.name,scale_44?.name,scale_55?.name,scale_16?.name],
      datasets:[
        {
          label: 'نمودار هوش هیجانی',
          data: [scale_11?.point,scale_22?.point,scale_33?.point,scale_44?.point,scale_55?.point,scale_16?.point],
          backgroundColor: "#354f52",
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
    {paid == undefined  ?         
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
      <Box sx={{fontWeight:'bold',fontSize:{xs:'1.4rem',sm:'1.5rem',md:'1.6rem',lg:'1.7rem'},display:'flex',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>آزمون هوش هیجانی بار-اون (EQ-i)</Box>

      <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%'}}>
        {chart.length == 0   ? 
            <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'30rem',fontSize:'10rem' }}>
            <CircularProgress />
            </Box>
        :<Bar height='100%' options={options} data={chart}/>}
      </Box>
      </Box>

      <Box sx={{display:'flex',justifyContent:'center',padding:'2rem',width:'100%',flexDirection:'column'}}>
      <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:'4rem'}}>

        {/* Part  1 - sub 1 */}
        <Box sx={{display:'flex',flexDirection:'column',gridGap:'27px',marginBottom:'2rem'}}>
          <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
            <Box>({data?.sub_subject_1?.name})</Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1.1rem'}}}>
            <Box>امتیاز کلی در این مولفه : </Box>
            <Box>{data?.sub_subject_1?.point}</Box>
          </Box>
          {/* scale_1 */}
          {Object.values(scale_1).map((value,key)=>{
            return(
              <Box key={value?.name} sx={{display:'flex',flexDirection:'column',gridGap:'15px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'1rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>{value?.name}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value?.description}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>امتیاز : {value?.point}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>وضعیت : {value?.status}</Box>
              </Box>
            )
          })}
        </Box>
        {/* Part  1 - sub 1 */}
        {/* Part  2 - sub 2 */}
        <Box sx={{display:'flex',flexDirection:'column',gridGap:'27px',marginBottom:'2rem'}}>
          <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
            <Box>({data?.sub_subject_2?.name})</Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1.1rem'}}}>
            <Box>امتیاز کلی در این مولفه : </Box>
            <Box>{data?.sub_subject_2?.point}</Box>
          </Box>
          {Object.values(scale_2).map((value,key)=>{
            return(
              <Box key={value?.name} sx={{display:'flex',flexDirection:'column',gridGap:'15px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'1rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>{value?.name}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value?.description}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>امتیاز : {value?.point}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>وضعیت : {value?.status}</Box>
              </Box>
            )
          })}
        </Box>
        {/* Part  2 - sub 2 */}
        {/* Part  3 - sub 3 */}
        <Box sx={{display:'flex',flexDirection:'column',gridGap:'27px',marginBottom:'2rem'}}>
          <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
            <Box>({data?.sub_subject_3?.name})</Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1.1rem'}}}>
            <Box>امتیاز کلی در این مولفه : </Box>
            <Box>{data?.sub_subject_3?.point}</Box>
          </Box>
          {Object.values(scale_3).map((value,key)=>{
            return(
              <Box key={value?.name} sx={{display:'flex',flexDirection:'column',gridGap:'15px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'1rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>{value?.name}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value?.description}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>امتیاز : {value?.point}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>وضعیت : {value?.status}</Box>
              </Box>
            )
          })}
        </Box>
        {/* Part  3 - sub 3 */}
        {/* Part  4 - sub 4 */}
        <Box sx={{display:'flex',flexDirection:'column',gridGap:'27px',marginBottom:'2rem'}}>
          <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
            <Box>({data?.sub_subject_4?.name})</Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1.1rem'}}}>
            <Box>امتیاز کلی در این مولفه : </Box>
            <Box>{data?.sub_subject_4?.point}</Box>
          </Box>
          {Object.values(scale_4).map((value,key)=>{
            return(
              <Box key={value?.name} sx={{display:'flex',flexDirection:'column',gridGap:'15px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'1rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>{value?.name}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value?.description}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>امتیاز : {value?.point}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>وضعیت : {value?.status}</Box>
              </Box>
            )
          })}
        </Box>
        {/* Part  4 - sub 4 */}
        {/* Part  5 - sub 5 */}
        <Box sx={{display:'flex',flexDirection:'column',gridGap:'27px',marginBottom:'2rem'}}>
          <Box sx={{fontWeight:'bold',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1.1rem'}}}>
            <Box>({data?.sub_subject_5?.name})</Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1.1rem'}}}>
            <Box>امتیاز کلی در این مولفه : </Box>
            <Box>{data?.sub_subject_5?.point}</Box>
          </Box>
          {Object.values(scale_5).map((value,key)=>{
            return(
              <Box key={value?.name} sx={{display:'flex',flexDirection:'column',gridGap:'15px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'1rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>{value?.name}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value?.description}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>امتیاز : {value?.point}</Box>
                <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>وضعیت : {value?.status}</Box>
              </Box>
            )
          })}
        </Box>
        {/* Part  5 - sub 5 */}
        {/* Part  total */}
        <Box sx={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',padding:'1rem',marginTop:'20px'}}>
          <Box sx={{display:'flex',flexDirection:'column',gridGap:'27px',marginBottom:'1rem'}}>
            <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'}}}>
              <Box>{scale_16?.name} </Box>
            </Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>
              <Box>امتیاز کلی  : </Box>
              <Box>{scale_16?.point}</Box>
          </Box>
          <Box sx={{display:'flex',gridGap:'5px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'},marginTop:'5px'}}>
              <Box>{scale_16?.brief}</Box>
          </Box>
        </Box>
        {/* Part  total */}
      </Box>
  </Box>
  </>
        :
    ""
        }
    

      {paid ?  '': 
      
      <Box sx={{width:'100%',height:'18rem',display:'flex',justifyContent:'center',marginTop:'6rem',border:1,borderColor:'red'}}>
      <Box sx={{bgcolor:'#EFF6E0',width:'25rem',display:'flex',flexDirection:'column',borderRadius:'1rem',overflow:'auto'}}>
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

          <Box sx={{display:'flex',justifyContent:'center'}}>
              <Button
              onClick={payHandel}
              style={{ marginRight: "5px" }}
              size="small"
              variant="contained"
              >
              ورود به صفحه خرید
              </Button>
              <Button
              onClick={() => (window.location.href = "/start")}
              style={{ marginRight: "5px" }}
              size="small"
              variant="contained"
              >
              بازگشت به صفحه اصلی
              </Button>
          </Box>
      </Box>
  </Box>}          
        </>
        }
    
    </>
  )
}

export default BodyEq