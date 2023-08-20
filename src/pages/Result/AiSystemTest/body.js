import React, { useEffect,useState } from 'react'
import {Box, Tab, Tabs,Typography,Button} from "@material-ui/core";
import {toast} from "react-toastify";
import {calculateEnrichTest} from "../../../api/TestApi";
import {useHistory, useParams} from 'react-router-dom'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import CircularProgress from '@material-ui/core/CircularProgress';
import { CustomButton } from '../../../components/Button';
import { getPay } from '../../../api/TestApi'
function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const AiSystemBody = () => {
    
    const [value, setValue] = React.useState(0);
    const {man, woman} = useParams();
    const [manData,setManData] = useState("")
    const [womanData,setwomanData] = useState("")
    const [chart_1,setChart_1] = useState([])
    const [chart_2,setChart_2] = useState([])
    // is paid
    const [paid,setPaid] = useState()
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")
    const [valid,setValid] = useState(true)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        calculateEnrichTest(man, woman).then((res) => {
            console.log(res);
            setPaid(res?.is_paid)
            if(res?.is_paid){
            setManData(res?.man?.enrich?.features)
            setwomanData(res?.woman?.enrich?.features)
            click()
            click1()
            }
            if(res?.is_paid == false){
              setMessage(res?.message)
              setPrice(res?.price)
            }
        }).catch(err =>{
          if(err.response){
            if (err.response.status == 400) {
              toast.error('کد اختصاصی نامعتبر است');
              setValid(false)
            }
          }
        });
    }, [man, woman,womanData.length]);

    // for Man
    const click = () =>{
 
        setChart_1({
          labels: [manData[0]?.name,manData[1]?.name,manData[2]?.name,manData[3]?.name,manData[4]?.name,manData[5]?.name,manData[6]?.name,manData[7]?.name,manData[8]?.name,manData[9]?.name],
          datasets:[
            {
              label: " ",
              data: [manData[0]?.value,manData[1]?.value,manData[2]?.value,manData[3]?.value,manData[4]?.value,manData[5]?.value,manData[6]?.value,manData[7]?.value,manData[8]?.value,manData[9]?.value],
              backgroundColor: [manData[0]?.color,manData[1]?.color,manData[2]?.color,manData[3]?.color,manData[4]?.color,manData[5]?.color,manData[6]?.color,manData[7]?.color,manData[8]?.color,manData[9]?.color],
            }
          ]
        })
     }
     // for woman
     const click1 = () =>{
        
        setChart_2({
          labels: [womanData[0]?.name,womanData[1]?.name,womanData[2]?.name,womanData[3]?.name,womanData[4]?.name,womanData[5]?.name,womanData[6]?.name,womanData[7]?.name,womanData[8]?.name,womanData[9]?.name],
          datasets:[
            {
              label: " ",
              data: [womanData[0]?.value,womanData[1]?.value,womanData[2]?.value,womanData[3]?.value,womanData[4]?.value,womanData[5]?.value,womanData[6]?.value,womanData[7]?.value,womanData[8]?.value,womanData[9]?.value],
              backgroundColor: [womanData[0]?.color,womanData[1]?.color,womanData[2]?.color,womanData[3]?.color,womanData[4]?.color,womanData[5]?.color,womanData[6]?.color,womanData[7]?.color,womanData[8]?.color,womanData[9]?.color],
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
                size: 13,
                weight:'bold'
              }
            }
          }
        }
      }
      // const payHandel = () =>{
      //   getPay(identifier).then((res)=>{
      //     console.log(res?.data?.link);
      //     window.location.href = res?.data?.link
      //   }).catch(err =>{
      //     console.log(err);
      //   })
      // }
      const exiteFun = () =>{
        sessionStorage.clear();
        window.location.href = '/start'
      }
  return (
    <>
    { paid == undefined ? 
      <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'20rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
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
    <Box>
        <Box sx={{borderBottom: 1, borderColor: 'divider',marginTop:'0.4rem'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="نتیجه مربوط به آقا" {...a11yProps(0)} />
                <Tab label="نتیجه مربوط به خانم" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
              <Box sx={{display:'flex',marginBottom:'20px',padding:'1rem',gridGap:'8px',marginX:'20px',width:'100%',fontSize:{xs:'0.6rem',sm:'0.6rem',md:'0.7rem',lg:'0.8rem'},alignItems:'center',justifyContent:'center'}}>
                  <Box>رضایت مطلوب</Box>
                  <Box sx={{bgcolor:'green',borderRadius:'50%',width:'15px',height:'15px'}}></Box>

                  <Box>نارضایتی نسبی</Box>
                  <Box sx={{bgcolor:'yellow',borderRadius:'50%',width:'15px',height:'15px'}}></Box>

                  <Box>نارضایتی شدید</Box>
                  <Box sx={{bgcolor:'red',borderRadius:'50%',width:'15px',height:'15px'}}></Box>
                </Box>
                <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%',marginBottom:'2rem'}}>
                    {chart_1.length == 0 ?
                    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'20rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
                    <Box>لطفا شکیبا باشید</Box>
                    <CircularProgress />
                    </Box>
                    :<Bar options={options} data={chart_1}/>}
                </Box>
                {Object.values(manData).map((value,index)=>{
                    return(
                        <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px',width:'100%'}} key={index}>
                            <Box sx={{display:'flex',alignItems:'center',gridGap:'10px'}}>
                              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{value?.name}</Box>
                              <Box sx={{bgcolor:value?.color,borderRadius:'50%',width:'15px',height:'15px'}}></Box>
                            </Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>{value?.describtion}</Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
                            نمره‌ی کسب‌شده‌ی فرد نشان‌دهنده‌ی اینست که فرد در زندگی مشترک احتمالی با نامزد خود در این زمینه دارای {value?.state_level} است.
                            </Box>

                        </Box>
                    )
                })}
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
              <Box sx={{display:'flex',marginBottom:'20px',padding:'1rem',gridGap:'8px',marginX:'20px',width:'100%',fontSize:{xs:'0.6rem',sm:'0.6rem',md:'0.7rem',lg:'0.8rem'},alignItems:'center',justifyContent:'center'}}>
                <Box>رضایت مطلوب</Box>
                <Box sx={{bgcolor:'green',borderRadius:'50%',width:'15px',height:'15px'}}></Box>

                <Box>نارضایتی نسبی</Box>
                <Box sx={{bgcolor:'yellow',borderRadius:'50%',width:'15px',height:'15px'}}></Box>

                <Box>نارضایتی شدید</Box>
                <Box sx={{bgcolor:'red',borderRadius:'50%',width:'15px',height:'15px'}}></Box>
              </Box>
                <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%',marginBottom:'2rem'}}>
                    {chart_2.length == 0 ? 
                    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'20rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
                    <Box>لطفا شکیبا باشید</Box>
                    <CircularProgress />
                    </Box>
                    :<Bar options={options} data={chart_2}/>}
                </Box>
                {Object.values(womanData).map((value,index)=>{
                    return(
                        <Box sx={{display:'flex',flexDirection:'column',marginBottom:'20px',padding:'1rem',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px',width:'100%'}} key={index}>
                            <Box sx={{display:'flex',alignItems:'center',gridGap:'10px'}}>
                              <Box sx={{fontWeight:'bold',fontSize:{xs:'1rem',sm:'1.1rem',md:'1.3rem',lg:'1.4rem'}}}>{value?.name}</Box>
                              <Box sx={{bgcolor:value?.color,borderRadius:'50%',width:'15px',height:'15px'}}></Box>
                            </Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>{value?.describtion}</Box>
                            <Box sx={{fontSize:{xs:'0.7rem',sm:'0.8rem',md:'0.9rem',lg:'1rem'}}}>
                            نمره‌ی کسب‌شده‌ی فرد نشان‌دهنده‌ی اینست که فرد در زندگی مشترک احتمالی با نامزد خود در این زمینه دارای {value?.state_level} است.
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </TabPanel>
    </Box>:''}
    {paid ? "":
      <Box sx={{width:'100%',height:'15rem',display:'flex',justifyContent:'center',marginTop:'6rem',border:1,borderColor:'red'}}>
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
    </Box>
    }
    </>
    }
    </>
  )
}

export default AiSystemBody