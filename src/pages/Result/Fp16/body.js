import React,{useState,useEffect} from 'react'
import { calculateTest } from '../../../api/TestApi'
import { useUserState } from '../../../context/UserContext'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
import { Box ,Table ,TableBody ,TableCell,TableContainer ,TableHead ,TableRow ,Paper,Button} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { toast } from "react-toastify";
import { CustomButton } from '../../../components/Button'
import { getPay } from '../../../api/TestApi'
import { StyledTableCell,StyledTableRow } from '../../../components/Table'
const Body16Fp = () => {
    const {identifier} = useUserState();
    // let identifier = 'XFWRV';
    // Data
    const [valid,setValid] = useState(true)
    const [dataMain,setDataMain] = useState("")
    const [dataSecendry,setDataSecendry] = useState("")
    const [questionOne,setQuestionOne] = useState("")
    const [questionTwo,setQuestionTwo] = useState("")
    const [questionThree,setQuestionThree] = useState("")
    const [questionFour,setQuestionFour] = useState("")
    const [questionFive,setQuestionFive] = useState("")
    const [noAns,setNoAns] = useState("")
    // chart
    const [chart,setChart] = useState([])
    const [chart_2,setChart_2] = useState([])
    // is paid
    const [paid,setPaid] = useState()
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")

    useEffect(()=>{
      calculateTest(identifier).then( res => {
        console.log(res);
        setPaid(res?.is_paid)
        if(res?.is_paid){
          setDataMain(res?.main);
          setDataSecendry(res?.others);
          setQuestionOne(res?.answers?.answer_1)
          setQuestionTwo(res?.answers?.answer_2)
          setQuestionThree(res?.answers?.answer_3)
          setQuestionFour(res?.answers?.answer_4)
          setQuestionFive(res?.answers?.answer_5)
          setNoAns(res?.no_answer_total)
          click();
          click_2();
        }
        if(!res?.is_paid){
          setPaid(res?.is_paid)
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
    },[identifier,dataSecendry.length]);
    //
    const click = () =>{
      setChart({
        labels: [dataMain?.scale_1?.name ,dataMain?.scale_2?.name ,dataMain?.scale_3?.name ,dataMain?.scale_4?.name, dataMain?.scale_5?.name, dataMain?.scale_6?.name,dataMain?.scale_7?.name, dataMain?.scale_8?.name, dataMain?.scale_9?.name, dataMain?.scale_10?.name, dataMain?.scale_11?.name,dataMain?.scale_12?.name, dataMain?.scale_13?.name, dataMain?.scale_14?.name, dataMain?.scale_15?.name, dataMain?.scale_16?.name],
        datasets:[
          {
            label: ' ',
            data: [dataMain?.scale_1?.point, dataMain?.scale_2?.point, dataMain?.scale_3?.point, dataMain?.scale_4?.point, dataMain?.scale_5?.point,dataMain?.scale_6?.point,dataMain?.scale_7?.point,dataMain?.scale_8?.point,dataMain?.scale_9?.point,dataMain?.scale_10?.point,dataMain?.scale_11?.point,dataMain?.scale_12?.point,dataMain?.scale_13?.point,dataMain?.scale_14?.point,dataMain?.scale_15?.point,dataMain?.scale_16?.point],
            backgroundColor: ['#03071e','#370617','#6a040f','#9d0208','#d00000','#dc2f02','#f48c06','#faa307','#ffba08','#5a189a','#9d4edd','#c77dff','#386641','#22223b','#800f2f','#ff9b54'],
          }
        ]
      })
    }
    //
    const click_2 = () =>{
      setChart_2({
        labels: [dataSecendry?.scale_1?.fa_name ,dataSecendry?.scale_2?.fa_name ,dataSecendry?.scale_3?.fa_name ,dataSecendry?.scale_4?.fa_name, dataSecendry?.scale_5?.fa_name, dataSecendry?.scale_6?.fa_name,dataSecendry?.scale_7?.fa_name, dataSecendry?.scale_8?.fa_name],
        datasets:[
          {
            label: ' ',
            data: [dataSecendry?.scale_1?.point, dataSecendry?.scale_2?.point, dataSecendry?.scale_3?.point, dataSecendry?.scale_4?.point, dataSecendry?.scale_5?.point, dataSecendry?.scale_6?.point, dataSecendry?.scale_7?.point, dataSecendry?.scale_8?.point],
            backgroundColor: ['#03071e','#370617','#6a040f','#9d0208','#d00000','#dc2f02','#f48c06','#faa307'],
          }
        ]
      })
    }
    //
    const options = {
      maintainAspectRatio : false,
      plugins: {
        legend: {
          font: {
            size: 20
        },
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 20
                }
            }
        }
      },
      scales: {
        y: {
            angleLines: {
                display: false
            },

        },
    },
    ticks: {
      // forces step size to be 50 units
      stepSize: 2
    },
    elements: {
      line: {
        borderWidth: 3
      }
    }
    };
    //
    const payHandel = () =>{
      getPay(identifier).then((res)=>{
        console.log(res?.data?.link);
        window.location.href = res?.data?.link
      }).catch(err =>{
        console.log(err);
      })
    }
    //
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

        <Box sx={{fontSize:'1.5rem',fontWeight:'bold',marginBottom:'2rem'}}>نتیجه ازمون کتل(16FP)</Box>

        <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%',marginBottom:'2rem'}}>
        {chart.length == 0   ? 
            <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'30rem',fontSize:'10rem' }}>
              <CircularProgress />
            </Box>
        :
        <Box sx={{display:'flex',height:{xs:'15rem',sm:'20rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%'}}>
          <Bar options={options}  data={chart}/>
        </Box>
        }
        </Box>
        {/* <Box sx={{marginTop:'2rem',fontSize:'1.5rem',fontWeight:'bold'}}>{data?.is_main ? 'جنسیت مرد':'جنسیت زن'}</Box> */}
      </Box>
    <Box sx={{padding:'3rem',marginTop:{xs:'7rem',sm:'5rem',md:'3rem',lg:'2rem'}}}>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow  >
            <StyledTableCell style={{color:'white'}} align="center">کد عامل</StyledTableCell>
            <StyledTableCell  align="center">نام عامل</StyledTableCell>
            <StyledTableCell  align="center">نمره</StyledTableCell>
            <StyledTableCell  align="center">سطح نمره - پیام نرافزار</StyledTableCell>
            {/* <StyledTableCell align="center">عامل به لاتین</StyledTableCell> */}
          </StyledTableRow >
        </TableHead>
        <TableBody>
          {Object.values(dataMain).map((row) => (
            <StyledTableRow 
              key={row?.name}

            >
              <StyledTableCell  component="th" align="center" scope="row">
                {row?.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row?.fa_name} ({row?.latin_name})</StyledTableCell>
              <StyledTableCell  align="center">{row?.point}</StyledTableCell>
              <StyledTableCell  align="center">{row?.message}</StyledTableCell>
              {/* <StyledTableCell align="center">{row?.latin_name}</StyledTableCell> */}
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box> 





      {/* chart Number 2 */}
      <Box sx={{display:'flex',justifyContent:'center',padding:{xs:'0.5rem',sm:'1rem',md:'1.5rem',lg:'2rem'},marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>

      <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%',marginBottom:'2rem'}}>
        {chart_2.length == 0   ? 
            <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',height:'30rem',fontSize:'10rem' }}>
              <CircularProgress />
            </Box>
        :
        <Box sx={{display:'flex',height:{xs:'20rem',sm:'22rem',md:'25rem',lg:'28rem'},justifyContent:'center',width:'100%'}}>
          <Bar options={options}  data={chart_2}/>
        </Box>
        }
        </Box>
      </Box>

      <Box sx={{padding:'3rem',marginTop:{xs:'7rem',sm:'5rem',md:'3rem',lg:'2rem'}}}>
      <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow >
            <StyledTableCell align="center">نام عامل</StyledTableCell>
            {/* <StyledTableCell  align="center">عامل به لاتین</StyledTableCell> */}
            <StyledTableCell  align="center">نمره</StyledTableCell>
            <StyledTableCell  align="center">سطح نمره - پیام نرافزار</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Object.values(dataSecendry).map((row) => (
            <StyledTableRow
              key={row?.name}

            >
              <StyledTableCell align="center"> {row?.fa_name} ({row?.latin_name})</StyledTableCell>
              <StyledTableCell align="center">{row?.point}</StyledTableCell>
              <StyledTableCell align="center">{row?.message}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>


    {/* برای جواب سوال هاست */}
    <Box  sx={{display:'flex',padding:{xs:'3rem',sm:'0.3rem',md:'0.5rem',lg:'2rem'},gridGap:'10px',flexWrap:{xs:'wrap',sm:'nowrap',md:'nowrap',lg:'nowrap'}}}> 
    <TableContainer   component={Paper}>
      <Table sx={{ maxWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow >
            <StyledTableCell align="center">سوال</StyledTableCell>
            <StyledTableCell  align="center">جواب</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Object.values(questionOne).map((row) => (
            <StyledTableRow
              key={row?.name}

            >
              <StyledTableCell align="center">{row?.question_no}</StyledTableCell>
              <StyledTableCell align="center">{row?.option_place}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow >
            <StyledTableCell align="center">سوال</StyledTableCell>
            <StyledTableCell  align="center">جواب</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Object.values(questionTwo).map((row) => (
            <StyledTableRow
              key={row?.name}

            >
              <StyledTableCell align="center">{row?.question_no}</StyledTableCell>
              <StyledTableCell align="center">{row?.option_place}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow >
            <StyledTableCell align="center">سوال</StyledTableCell>
            <StyledTableCell  align="center">جواب</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Object.values(questionThree).map((row) => (
            <StyledTableRow
              key={row?.name}

            >
              <StyledTableCell align="center">{row?.question_no}</StyledTableCell>
              <StyledTableCell align="center">{row?.option_place}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow >
            <StyledTableCell align="center">سوال</StyledTableCell>
            <StyledTableCell  align="center">جواب</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Object.values(questionFour).map((row) => (
            <StyledTableRow
              key={row?.name}

            >
              <StyledTableCell align="center">{row?.question_no}</StyledTableCell>
              <StyledTableCell align="center">{row?.option_place}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer   component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow >
            <StyledTableCell align="center">سوال</StyledTableCell>
            <StyledTableCell  align="center">جواب</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {Object.values(questionFive).map((row) => (
            <StyledTableRow
              key={row?.name}

            >
              <StyledTableCell align="center">{row?.question_no}</StyledTableCell>
              <StyledTableCell align="center">{row?.option_place}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>



    <Box sx={{padding:'3rem'}}>
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
        <TableHead >
          <StyledTableRow  >
            <StyledTableCell style={{color:'white'}} align="center">زیر مقیاس</StyledTableCell>
            <StyledTableCell  align="center">تعداد سوالات</StyledTableCell>
            <StyledTableCell  align="center">تعداد سوالات بدون پاسخ</StyledTableCell>
          </StyledTableRow >
        </TableHead>
        <TableBody>
        {Object.values(dataMain).map((row) => (
            <StyledTableRow 
              key={row?.name}
            >
              <StyledTableCell  align="center">{row?.name}</StyledTableCell>
              <StyledTableCell align="center">{row?.question_count}</StyledTableCell>
              <StyledTableCell  align="center">{row?.no_answer_count}</StyledTableCell>
            </StyledTableRow >
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box> 

    <Box sx={{display:'flex',marginBottom:'20px',padding:'1rem',gridGap:'5px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px',marginX:'20px',justifyContent:'space-around',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}}>
      <Box>تعداد کل سوالات موثر بر آزمون : 184</Box>
      <Box>تعداد کل سوالات موثر بدون پاسخ : {noAns}</Box>
      <Box>توجه : سه سوال از سوالات در تصحیح پرسشنامه بدون اثر هستند !</Box>
    </Box>

      </>
    :''}
    {paid ? '':
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
  </Box>
    }
    </>
    }
    </>
  )
}

export default Body16Fp
