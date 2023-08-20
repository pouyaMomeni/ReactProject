import React, { useState,useEffect } from 'react'
import { Box ,Button} from '@material-ui/core'
import { calculateTest } from '../../../api/TestApi'
import { useUserState } from '../../../context/UserContext'
import { getPay } from '../../../api/TestApi'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell,StyledTableRow } from '../../../components/Table'
import { toast } from "react-toastify";
import { CustomButton } from '../../../components/Button'

const BodyMbti = () => {
    // L9U20
    const {identifier} = useUserState();
    // valid
    const [valid,setValid] = useState(true)
    // data
    const [data,setData] = useState("")
    const [dataOne,setDataOne] = useState("")
    const [dataTwo,setDataTwo] = useState("")
    const [dataThree,setDataThree] = useState("")
    const [dataFour,setDataFour] = useState("")
    // is paid
    const [paid,setPaid] = useState()
    const [price,setPrice] = useState("")
    const [message,setMessage] = useState("")

    useEffect(() => {
        calculateTest(identifier).then( res => {
          setPaid(res?.is_paid)
          console.log(res);
          if(res?.is_paid){
            setData(res)
            setDataOne(res?.scale_1?.describtion)
            setDataTwo(res?.scale_2?.describtion)
            setDataThree(res?.scale_3?.describtion)
            setDataFour(res?.scale_4?.describtion)
            // click()
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
      }, [identifier,data.length]);

      const payHandel = () =>{
        getPay(identifier).then((res)=>{
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
                <Box sx={{display:'flex',justifyContent:'center',padding:'1rem',marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
                    <Box sx={{fontWeight:'bold',fontSize:{xs:'1.2rem',sm:'1.4rem',md:'1.5rem',lg:'1.6rem'}}}>
                        نتیجه آزمون MBTI 
                    </Box>
                </Box>
                
                {/* <Box sx={{display:'flex',justifyContent:'center',padding:'1rem',marginTop:'2rem',width:'100%',flexDirection:'column',alignItems:'center'}}>
                
                </Box> */}

                {/* For Job */}
                <Box sx={{padding:{xs:'0.5rem',sm:'1.4rem',md:'2rem',lg:'3rem'}}}>
                    <TableContainer  component={Paper}>
                    <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
                        <TableHead >
                        <StyledTableRow>
                            <StyledTableCell  align="center">نام فارسی  سنخ شخصیتی</StyledTableCell>
                            <StyledTableCell  align="center">نام لاتین</StyledTableCell>
                            <StyledTableCell  align="center">مشاغل مناسب</StyledTableCell>
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {data?.result?.fa_name}
                                </StyledTableCell>
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {data?.result?.name}
                                </StyledTableCell>
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {data?.result?.test_result_job}
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>

                {/* For E_I */}
                <Box sx={{padding:{xs:'0.5rem',sm:'1.4rem',md:'2rem',lg:'3rem'},display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <TableContainer  component={Paper}>
                    <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
                        <TableHead >
                        <StyledTableRow>
                            <StyledTableCell  align="center">{data?.scale_1?.result_fa_name} {data?.scale_1?.result_name}</StyledTableCell>
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                        {Object.values(dataOne).map((row,key) => (
                            <StyledTableRow >
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {row}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>

                {/* For S_N */}
                <Box sx={{padding:{xs:'0.5rem',sm:'1.4rem',md:'2rem',lg:'3rem'},display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <TableContainer  component={Paper}>
                    <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
                        <TableHead >
                        <StyledTableRow>
                            <StyledTableCell  align="center">{data?.scale_2?.result_fa_name} {data?.scale_2?.result_name}</StyledTableCell>
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                        {Object.values(dataTwo).map((row,key) => (
                            <StyledTableRow >
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {row}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>

                {/* For t_f */}
                <Box sx={{padding:{xs:'0.5rem',sm:'1.4rem',md:'2rem',lg:'3rem'},display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <TableContainer  component={Paper}>
                    <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
                        <TableHead >
                        <StyledTableRow>
                            <StyledTableCell  align="center">{data?.scale_3?.result_fa_name} {data?.scale_3?.result_name}</StyledTableCell>
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                        {Object.values(dataThree).map((row,key) => (
                            <StyledTableRow >
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {row}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>

                {/* For j-p */}
                <Box sx={{padding:{xs:'0.5rem',sm:'1.4rem',md:'2rem',lg:'3rem'},display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <TableContainer  component={Paper}>
                    <Table sx={{ minWidth: 650 }}  aria-label="a dense table">
                        <TableHead >
                        <StyledTableRow>
                            <StyledTableCell  align="center">{data?.scale_4?.result_fa_name} {data?.scale_4?.result_name}</StyledTableCell>
                        </StyledTableRow>
                        </TableHead>
                        <TableBody>
                        {Object.values(dataFour).map((row,key) => (
                            <StyledTableRow >
                                <StyledTableCell  component="th" align="center" scope="row">
                                    {row}
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>
            </>
            :
            ''
         }
    {paid ?  '': 
        <Box sx={{width:'100%',height:'17rem',display:'flex',justifyContent:'center',marginTop:'6rem',marginBottom:'4rem'}}>
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
        </>
        }
    </>
  )
}

export default BodyMbti






