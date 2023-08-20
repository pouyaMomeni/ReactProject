import React, {PureComponent, useEffect, useState} from 'react';
import PageTitle from "../../../components/PageTitle";
import {calculateTest} from "../../../api/TestApi";
import {useUserState} from "../../../context/UserContext";
import {Box, Grid,Button} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import {useHistory} from "react-router-dom";
import ResultHeader from '../../../components/resultNavBar'
import CircularProgress from '@material-ui/core/CircularProgress';
import { getPay } from '../../../api/TestApi'
import { toast } from "react-toastify";
import {Line,Scatter} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import RadarChart from "./RadarChart";




const NewBodyNeo = () => {

    // const classes = useStyle();
    // const history = useHistory();
    const {identifier} = useUserState();
    // const identifier = '5JB1Q';
    const theme = useTheme();
    const [paid,setPaid] = useState();
    // chart
    const [chart_1,setChart_1] = useState([])
    const [oneD, setOneD] = useState([]);
    const [twoD, setTwoD] = useState([]);
    // is paid
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")


    useEffect(() => {
        calculateTest(identifier).then(res => {
            console.log(res);
            setPaid(res?.is_paid);
            if (res?.is_paid) {
                setOneD(res.one_d);
                setTwoD(res.two_d);
                click();
            }
            if(res?.is_paid == false){
                setPaid(res?.is_paid)
                setMessage(res?.message)
                setPrice(res?.price)
              }
        }).catch(err => console.log(err));
    }, [identifier,oneD.length]);

    const click = () =>{
        setChart_1({
          labels: [oneD[0]?.question_subject_text,oneD[1]?.question_subject_text,oneD[2]?.question_subject_text,oneD[3]?.question_subject_text,oneD[4]?.question_subject_text],
          datasets:[
            {
              label: " ",
              data: [oneD[0]?.calculated_t,oneD[1]?.calculated_t,oneD[2]?.calculated_t,oneD[3]?.calculated_t,oneD[4]?.calculated_t],
              borderColor: 'rgb(53, 162, 235)',
              backgroundColor: 'rgba(53, 162, 235, 0.5)'
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
                size: 12,
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
        { paid == undefined ?
        <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'30rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
          <Box>لطفا شکیبا باشید</Box>
          <CircularProgress />
        </Box>
        :
        <>
        {paid ? 
        <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',fontSize:{xs:'0.9rem',sm:'0.9rem',md:'0.9rem',lg:'1rem'},width:'100%'}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'},display:'flex',justifyContent:'center'}}>گزارش تحلیلی نتیجه‌ی آزمون نئو</Box>
                <Box sx={{marginTop:'20px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'},display:'flex',justifyContent:'center',alignItems:'center'}}>نتایج این آزمون در دو بخش تک‌بعدی و دوبعدی به استحضار شما می‌رسد: در بخش تک‌بعدی به توصیف وضعیت فرد در هر کدام از مقیاس‌های آزمون پرداخته می‌شود و بخش دوبعدی شامل تحلیل عملکرد فرد در زمینه‌هایی چون سبک بهزیستی، دفاع‌ها، کنترل خشم، سبک کنترل تکانه‌ها، سبک علایق، سبک تعاملات، سبک فعالیت‌، سبک نگرش، سبک یادگیری و سبک شخصیت با اتکا بر تحلیل نتایج فرد در مقیاس‌های مختلف می‌شود.</Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.2rem'},margin:'30px',width:'100%',alignItems:'center',fontWeight:'bold'}}>
                بخش تک بعدی
            </Box>
            <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%',marginBottom:'2rem'}}>
                    {chart_1.length == 0 ?
                    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'20rem',flexDirection:'column',gridGap:'10px',fontSize:'1.5rem' }}>
                    <Box>لطفا شکیبا باشید</Box>
                    <CircularProgress />
                    </Box>
                    :<Line data={chart_1} options={options}/>}
            </Box>
            <Box  sx={{display:'flex',flexDirection:'column',padding:'1rem',gridGap:'5px'}} >
                {oneD.map((value,key)=>{
                    return(
                        <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'0.9rem',sm:'0.9rem',md:'0.9rem',lg:'1rem'},margin:'10px'}} key={key}>
                            <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.2rem'}}}>{value.question_subject_text}</Box>
                            <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value.description}</Box>
                        </Box>
                    )
                })}
            </Box>     
            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.2rem'},margin:'30px',width:'100%',alignItems:'center',fontWeight:'bold'}}>
                بخش دو بعدی
            </Box>

            {twoD.map((value,index) => {
                return(
                <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',padding:'1rem',fontSize:{xs:'0.9rem',sm:'0.9rem',md:'0.9rem',lg:'1rem'},margin:'10px',width:'100%'}} key={index}>
                    <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.2rem'}}}>{value.style}</Box>
                    <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>{value.description}</Box>
                        <Box sx={{gridGap:'10px',display:'flex'}}>
                            <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>محور عمودی : {value.y_axis_text} (T : {Math.floor(value.y_axis_value)})</Box>
                            <Box sx={{fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem'}}}>محور افقی : {value.x_axis_text} (T : {Math.floor(value.x_axis_value)})</Box>
                        </Box>
                    <Box sx={{display:'flex',justifyContent:{xs:'center',sm:'center',md:'end',lg:'end'}}}>
                        <RadarChart x={Math.floor(value.x_axis_value)} y={Math.floor(value.y_axis_value)} xTitle={value.x_axis_text} yTitle={value.y_axis_text}/>
                    </Box>
                </Box>
                )
            })
            }  
        </Box>
        :
        ''
        }
    {paid ?  '': 
      
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
    );
};

export default NewBodyNeo;
