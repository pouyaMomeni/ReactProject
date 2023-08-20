import React, { useState ,useEffect} from 'react'
import { Box ,Button} from '@material-ui/core'
import { useUserState } from '../../../context/UserContext'
import { calculateTest } from '../../../api/TestApi'
import { getPay } from '../../../api/TestApi'
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from "react-toastify";
import {Chart as ChartJs} from 'chart.js/auto'
import {Bar} from 'react-chartjs-2'
import { CustomButton } from '../../../components/Button'
const BodyEnrichResult = () => {
    const {identifier} = useUserState();
    // const identifier = "IYQTG"
    // chart
    const [chart_1,setChart_1] = useState([])
    const [chart_2,setChart_2] = useState([])
    // data
    const [data,setData] = useState("")
    const [dataTotal,setDataTotal] = useState("")
    // is paid
    const [paid,setPaid] = useState()
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")

    const [valid,setValid] = useState(true)
    useEffect(() => {
        calculateTest(identifier).then( res => {
          console.log(res);
          setPaid(res?.is_paid)
          if(res?.is_paid){
            setData(res?.data?.enrich?.feature)
            setDataTotal(res?.data?.enrich?.total)
            click();
            click1();
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
      }, [identifier,dataTotal.length]);

      const click = () =>{
 
        setChart_1({
          labels: [data[0]?.name,data[1]?.name,data[2]?.name,data[3]?.name,data[4]?.name,data[5]?.name,data[6]?.name,data[7]?.name,data[8]?.name],
          datasets:[
            {
              label: " ",
              data: [data[0]?.point,data[1]?.point,data[2]?.point,data[3]?.point,data[4]?.point,data[5]?.point,data[6]?.point,data[7]?.point,data[8]?.point],
              backgroundColor: ["#354f52"]
            }
          ]
        })
     }
     const click1 = () =>{
 
      setChart_2({
        labels: [dataTotal?.name],
        datasets:[
          {
            label: " ",
            data: [dataTotal?.value],
            backgroundColor: ["#354f52"]
          }
        ]
      })
   }

    const options = {
        maintainAspectRatio : false,
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 25,
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
                size: 13,
                weight:'bold'
              }
            }
          }
        }
      }
      const options1 = {
        maintainAspectRatio : false,
        scales: {
          y: {
            suggestedMin: 100,
            suggestedMax: 200,
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
                size: 13,
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
    <div>
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
                <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%',marginBottom:'2rem'}}>
                    {chart_1.length == 0 ?
                    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'20rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
                    <Box>لطفا شکیبا باشید</Box>
                    <CircularProgress />
                    </Box>
                    :<Bar options={options} data={chart_1}/>}
                </Box>
              </Box>

                {Object.values(data).map((value,index)=>{
                    return(
                        <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}} key={index}>
                            <Box sx={{display:'flex',alignItems:'center',gridGap:'10px'}}>
                              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{value?.name}</Box>
                            </Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
                            نمره نهایی در این بعد {value?.point}
                            </Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>توضیحات : {value?.description}</Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
                              نمره {value?.point} نشانگر {value?.state_level} در این زیر مقیاس است .
                            </Box>
                        </Box>
                    )
                })}

                <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
                  <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'60%',marginBottom:'2rem'}}>
                      {chart_2.length == 0 ?
                      <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'20rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
                      <Box>لطفا شکیبا باشید</Box>
                      <CircularProgress />
                      </Box>
                      :<Bar options={options1} data={chart_2}/>}
                  </Box>                 
                </Box>

                <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px'}} >
                        <Box sx={{display:'flex',alignItems:'center',gridGap:'10px'}}>
                            <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{dataTotal?.name}</Box>
                        </Box>
                        <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
                        نمره کسب شده در بعد {dataTotal?.name} نشان دهنده {dataTotal?.state_level} است. 
                        </Box>
                        <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>{dataTotal?.description}</Box>
                </Box>
                

                </>
      :""}
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
    </div>
  )
}

export default BodyEnrichResult