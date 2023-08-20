import React, {PureComponent, useEffect, useState} from 'react';
import PageTitle from "../../../components/PageTitle";
import {calculateTest} from "../../../api/TestApi";
import {useUserState} from "../../../context/UserContext";
import Widget from "../../../components/Widget";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Box, Grid,Button} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import useStyle from './styles';
import RadarChart from "./RadarChart";
import {useHistory} from "react-router-dom";
import ResultHeader from '../../../components/resultNavBar'
import CircularProgress from '@material-ui/core/CircularProgress';
import { getPay } from '../../../api/TestApi'
import { toast } from "react-toastify";
class CustomizedLabel extends PureComponent {
    render() {
        const {
            x, y, stroke, value,
        } = this.props;

        return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
    }
}


class CustomizedAxisTick extends PureComponent {
    render() {
        const {
            x, y, stroke, payload,
        } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    }
}


const TestResult = () => {

    const classes = useStyle();
    const history = useHistory();
    const {identifier} = useUserState();
    const theme = useTheme();
    const [paid,setPaid] = useState();
    const [oneD, setOneD] = useState([]);
    const [twoD, setTwoD] = useState([]);
    // is paid
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")
    const [s, setS] = useState(true);
    useEffect(() => {
        calculateTest(identifier).then(res => {
            console.log(res);
            setPaid(res?.is_paid);
            if (res?.is_paid) {
                setOneD(res.one_d);
                setTwoD(res.two_d);
            }
            if(res?.is_paid == false){
                setPaid(res?.is_paid)
                setMessage(res?.message)
                setPrice(res?.price)
              }
        }).catch(err => console.log(err));
    }, [identifier]);

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
            <Box sx={{display: s ? 'flex':'none'}}>
                
            <Grid container  className="mt-2 mb-5 p-2">
            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',fontSize:{xs:'0.9rem',sm:'0.9rem',md:'0.9rem',lg:'1rem'},margin:'30px',width:'100%'}}>
                <Box sx={{fontWeight:'bold',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'},display:'flex',justifyContent:'center'}}>گزارش تحلیلی نتیجه‌ی آزمون نئو</Box>
                <Box sx={{marginTop:'20px',fontSize:{xs:'0.8rem',sm:'0.9rem',md:'1rem',lg:'1rem',}}}>نتایج این آزمون در دو بخش تک‌بعدی و دوبعدی به استحضار شما می‌رسد: در بخش تک‌بعدی به توصیف وضعیت فرد در هر کدام از مقیاس‌های آزمون پرداخته می‌شود و بخش دوبعدی شامل تحلیل عملکرد فرد در زمینه‌هایی چون سبک بهزیستی، دفاع‌ها، کنترل خشم، سبک کنترل تکانه‌ها، سبک علایق، سبک تعاملات، سبک فعالیت‌، سبک نگرش، سبک یادگیری و سبک شخصیت با اتکا بر تحلیل نتایج فرد در مقیاس‌های مختلف می‌شود.</Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',gridGap:'10px',padding:'1rem',fontSize:{xs:'0.9rem',sm:'1rem',md:'1.1rem',lg:'1.2rem'},margin:'30px',width:'100%',alignItems:'center',fontWeight:'bold'}}>
                بخش تک بعدی
            </Box>
                <Grid item xs={12} md={12} >
                    <Widget title="" disableWidgetMenu upperTitle>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart
                                width={500}
                                height={300}
                                data={oneD.map(item => ({مقدار: Math.floor(item.calculated_t)}))}
                                style={{direction: 'ltr'}}
                                margin={{
                                    top: 5,
                                    right: 20,
                                    left: 30,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name" tick={<CustomizedAxisTick/>}/>
                                <YAxis/>
                                <Tooltip/>
                                <Line
                                    label={<CustomizedLabel/>}
                                    // type="monotone"
                                    dataKey="مقدار"
                                    stroke={theme.palette.primary.main}
                                    activeDot={{r: 8}}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        <ul className={classes.chartFooter}>
                            {oneD.map(item => <li>{item.question_subject_text}</li>)}
                        </ul>
                    </Widget>
                </Grid>
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
                {twoD.map(item => <Grid item xs={12} md={12}>
                        <Widget title={item.style} disableWidgetMenu upperTitle>
                            <p>{item.description}</p>
                            <Grid container justify={"space-between"}>
                                <Grid item xs flex={1}>
                                    <p>محور عمودی : {item.y_axis_text} (T : {Math.floor(item.y_axis_value)})</p>
                                    <p>محور افقی : {item.x_axis_text} (T : {Math.floor(item.x_axis_value)})</p>
                                </Grid>
                                <Grid item xs container justify={"flex-end"}>
                                    <RadarChart x={Math.floor(item.x_axis_value)} y={Math.floor(item.y_axis_value)} xTitle={item.x_axis_text} yTitle={item.y_axis_text}/>
                                </Grid>
                            </Grid>
                        </Widget>
                    </Grid>
                )}


            </Grid>
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

export default TestResult;
