import React, { useState ,useEffect} from 'react'
import { Box ,Button} from '@material-ui/core'
import { useUserState } from '../../../context/UserContext'
import { calculateTest } from '../../../api/TestApi'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import { getPay } from '../../../api/TestApi'
import { login } from '../../../api/TestApi'
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from "react-toastify";
import { CustomButton } from '../../../components/Button'
const BodyScl90 = () => {

  const {identifier} = useUserState();
  // const identifier = "dp4tl"
  const [scale_1,setScale_1] = useState("")
  const [scale_2,setScale_2] = useState("")
  const [scale_3,setScale_3] = useState("")
  const [scale_4,setScale_4] = useState("")
  const [scale_5,setScale_5] = useState("")
  const [scale_6,setScale_6] = useState("")
  const [scale_7,setScale_7] = useState("")
  const [scale_8,setScale_8] = useState("")
  const [scale_9,setScale_9] = useState("")
  const [scale_10,setScale_10] = useState("")
  const [scale_11,setScale_11] = useState("")
  const [scale_12,setScale_12] = useState("")
  const [scale_13,setScale_13] = useState("")
  const [scale_14,setScale_14] = useState("")
  const [scale_15,setScale_15] = useState("")
  const [scale_16,setScale_16] = useState("")
  const [scale_17,setScale_17] = useState("")
  //
  const [chart_1,setChart_1] = useState([])
  const [chart_2,setChart_2] = useState([])
  const [chart_3,setChart_3] = useState([])
  //
  const [status,setStatus] = useState(true)
      // is paid
      const [paid,setPaid] = useState()
      const [price,setPrice] = useState("")
      const [message,setMessage] = useState("")
      const [info,setInfo] = useState()
      const [valid,setValid] = useState(true)
  useEffect(() => {
    calculateTest(identifier).then( res => {
      if (res?.test_status) {
        setPaid(res?.is_paid)
        console.log(1);
      }
      else{
        setPaid(true)
        console.log(2);
      }
      if(res?.is_paid || paid){
        console.log(3);
        if(res?.test_status){
          setScale_1(res?.scale_1)
          setScale_2(res?.scale_2)
          setScale_3(res?.scale_3)
          setScale_4(res?.scale_4)
          setScale_5(res?.scale_5)
          setScale_6(res?.scale_6)
          setScale_7(res?.scale_7)
          setScale_8(res?.scale_8)
          setScale_9(res?.scale_9)
          setScale_10(res?.scale_10)
          setScale_11(res?.scale_11)
          setScale_12(res?.scale_12)
          setScale_13(res?.scale_13)
          setScale_14(res?.scale_14)
          setScale_15(res?.scale_15)
          setScale_16(res?.main_total)
          setScale_17(res?.other_total)
          click()
        }
        if (res?.test_status == false) {
          setPaid(false)
          setMessage(res?.message)
        }
      setInfo(res?.test_status)
      }
      if(!res?.is_paid ){
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
  }, [identifier,scale_15.length]);

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
            size: 14,
            weight:'bold'
          }
        }
      }
    }
  }
  const loginClick = () => {
    login(identifier)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", res.male);
        sessionStorage.setItem("single", "" + res.single);
        // sessionStorage.setItem("test_name", "" + res.test_name);
        // window.location.reload();
        // console.log(res.test_name);
        window.location.href = `/${res.test_name}`;
      })
      .catch(err => {
        
      });
  };
  const click = () =>{

    setChart_1({
      labels: [scale_1?.nick_name,scale_2?.nick_name,scale_3?.nick_name,scale_4?.nick_name,scale_5?.nick_name,scale_6?.nick_name,scale_7?.nick_name,scale_8?.nick_name,scale_9?.nick_name],
      datasets:[
        {
          label: "gsi_point",
          data: [scale_1?.gsi_point,scale_2?.gsi_point,scale_3?.gsi_point,scale_4?.gsi_point,scale_5?.gsi_point,scale_6?.gsi_point,scale_7?.gsi_point,scale_8?.gsi_point,scale_9?.gsi_point],
          backgroundColor: "#354f52",
        }
      ]
    })

   setStatus(!status)
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
    {info == undefined  ?  
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
        {info ? 
        <>
          <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>

            <Box sx={{display:'flex',justifyContent:'center',marginBottom:'3rem',fontWeight:'bold',fontSize:{xs:'1.2rem',sm:'1.4rem',md:'1.5rem',lg:'1.6rem'}}}>
              نتیجه آزمون چک‌لیست علائم اختلالات (SCL-90)
            </Box>
            <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%'}}>
              {chart_1.length == 0 ? '':<Bar options={options} data={chart_1}/>}
            </Box> 
          </Box>    



            {/* Title - main */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1.2rem',sm:'1.4rem',md:'1.5rem',lg:'1.6rem'}}}>بخش اصلی</Box>
            </Box>

            {/* Part _ 1 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_1.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_1.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_1.condition} است </Box>
            </Box>
            {/* Part _ 2 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_2.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_2.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_2.condition} است </Box>
            </Box>
            {/* Part _ 3 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_3.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_3.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_3.condition} است </Box>
            </Box>
            {/* Part _ 4 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_4.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_4.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_4.condition} است </Box>
            </Box>
            {/* Part _ 5 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_5.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_5.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_5.condition} است </Box>
            </Box>
            {/* Part _ 6 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_6.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_6.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_6.condition} است </Box>
            </Box>
            {/* Part _ 7 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_7.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_7.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_7.condition} است </Box>
            </Box>
            {/* Part _ 8 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_8.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_8.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_8.condition} است </Box>
            </Box>
            {/* Part _ 9 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_9.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_9.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>با توجه به نمره شما میزان بیماری شما در این مقیاس در محدوده {scale_9.condition} است </Box>
            </Box>

            {/* Title _ Not-Main */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1.2rem',sm:'1.4rem',md:'1.5rem',lg:'1.6rem'}}}>بخش فرعی</Box>
            </Box>
            {/* Part - 1 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_10.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_10.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>میزان درصد مشکل شما در این زمینه برابر است با {scale_10.precentage}</Box>
            </Box>
            {/* Part - 2 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_11.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_11.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>میزان درصد مشکل شما در این زمینه برابر است با {scale_11.precentage}</Box>
            </Box>
            {/* Part - 3 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_12.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_12.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>میزان درصد مشکل شما در این زمینه برابر است با {scale_12.precentage}</Box>
            </Box>
            {/* Part - 4 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_13.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_13.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>میزان درصد مشکل شما در این زمینه برابر است با {scale_13.precentage}</Box>
            </Box>
            {/* Part - 5 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_14.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_14.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>میزان درصد مشکل شما در این زمینه برابر است با {scale_14.precentage}</Box>
            </Box>
            {/* Part - 6 */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{scale_15.name}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>نمره شما {scale_15.point}</Box>
              <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>میزان درصد مشکل شما در این زمینه برابر است با {scale_15.precentage}</Box>
            </Box>
            {/* Title _ Totall */}
            <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px'}}>
              <Box sx={{fontWeight:'bold',fontSize:'2rem'}}></Box>
            </Box>

 
        </>
        :
        ''   
      }

        {paid ?  '':
         <>
         {info ? 
         <Box sx={{width:'100%',height:'18rem',display:info ? 'flex' : 'none',justifyContent:'center',marginTop:'6rem',border:1,borderColor:'red'}}>
         <Box sx={{bgcolor:'#EFF6E0',width:'25rem',display:'flex',flexDirection:'column',borderRadius:'1rem',overflow:'auto'}}>
           <Box sx={{bgcolor:'#5cb85c',color:'white',padding:'0.8rem',paddingRight:'1rem',fontSize:'1.2rem',display:'flex',justifyContent:'space-around'}}>
               <Box >پرداخت</Box>
           </Box>
         
         
           <Box sx={{marginY:'1.5rem',padding:'1rem',gridGap:'1.5rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
               <Box sx={{display:'flex',alignItems:'center'}}>
                   <Box>{message}</Box>
               </Box>
               <Box sx={{display:'flex',alignItems:'center'}}>
                   <Box > قیمت :</Box>
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
               رفتن به صفحه پرداخت
             </Button>
           <Button
               style={{ marginRight: "5px" }}
               size="small"
               variant="contained"
               >
               بازگشت به صفحه اصلی
             </Button>
           </Box>
         </Box>
         </Box> 
          :
          ''
          }
          {info ? 
          ''
          :
          <Box sx={{width:'100%',height:'15rem',display:info ? 'none' : 'flex',justifyContent:'center',marginTop:'12rem',border:1,borderColor:'red'}}>
          <Box sx={{bgcolor:'#EFF6E0',width:'25rem',display:'flex',flexDirection:'column',borderRadius:'1rem',overflow:'auto'}}>
          <Box sx={{bgcolor: 'red',color:'white',padding:'0.8rem',paddingRight:'1rem',fontSize:'1.2rem',display:'flex',justifyContent:'space-around'}}>
            <Box >خطا</Box>
          </Box>


          <Box sx={{marginY:'1.5rem',padding:'1rem',gridGap:'1.5rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Box>{message}</Box>
            </Box>
          </Box>

          <Box sx={{display:'flex',justifyContent:'center'}}>
          <Button
            onClick={loginClick}
            style={{ marginRight: "5px" }}
            size="small"
            variant="contained"
            >
            ادامه تست  
          </Button>
          <Button
            style={{ marginRight: "5px" }}
            size="small"
            variant="contained"
            >
            بازگشت به صفحه اصلی
          </Button>
          </Box>
          </Box>
          </Box>
          }
          </>
        }  
           </>
      }
    </>
  )
}

export default BodyScl90















