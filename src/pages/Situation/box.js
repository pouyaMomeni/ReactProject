import React, { useEffect, useState } from 'react'
import { Box,Button } from '@material-ui/core'
import { useUserState } from '../../context/UserContext';
import { getPaymentStatus } from '../../api/TestApi';
function BoxS() {
    const [data,setData] = useState();
    const {identifier} = useUserState();
    useEffect(()=>{
        getPaymentStatus(identifier).then((res)=>{
            setData(res?.data);
            console.log(data);
            console.log(res);
          }).catch(err =>{
            console.log(err);
          })
    },[])

    const exite = () =>{
        sessionStorage.clear();
        window.location.href = "/start"
    }
    const resultRedirect = () =>{
        if (data?.test_name == 'ghq') {
            window.location.href = "/ResultGhq"
        }
        if (data?.test_name == 'eq-i') {
            window.location.href = "/resultEq"
        }
        if (data?.test_name == 'glaser') {
            window.location.href = "/resultGlaser"
        }
        if (data?.test_name == 'scl-90-r') {
            window.location.href = "/resultScl90"
        }
        if (data?.test_name == 'neo') {
            window.location.href = "/resultNeoPage"
        }
        if (data?.test_name == 'enrich') {
            window.location.href = "/resultEnrichSingle"
        }
        if (data?.test_name == 'mbti') {
            window.location.href = "/resultMbti"
        }
    }

  return (
        <Box sx={{width:'100%',height:'18rem',display:'flex',justifyContent:'center',marginTop:'12rem',border:1,borderColor:'red'}}>
            <Box sx={{bgcolor:'#EFF6E0',width:'25rem',display:'flex',flexDirection:'column',borderRadius:'1rem',overflow:'hidden'}}>

                <Box sx={{bgcolor:data?.is_paid ? '#5cb85c' : '#FF0000',color:'white',padding:'0.8rem',paddingRight:'1rem',fontSize:'1.2rem',display:'flex',justifyContent:'space-around'}}>
                    <Box>وضعیت</Box>
                    <Box>{data?.is_paid ? 'موفق' : "ناموفق"}</Box>
                </Box>


                <Box sx={{marginY:'1.5rem',padding:'1rem',gridGap:'1.5rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Box sx={{display:'flex',alignItems:'center',gridGap:'5px'}}>
                        <Box>نام تست : </Box>
                        <Box>{data?.test_name }</Box>
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center',gridGap:'5px'}}>
                        <Box>کد اختصاصی :</Box>
                        <Box>{data?.identifier }</Box>
                    </Box>
                </Box>

                <Box sx={{display:data?.is_paid ? 'flex': 'none',justifyContent:'center'}}>
                    <Button
                    onClick={resultRedirect}
                    style={{ marginRight: "5px" }}
                    size="small"
                    variant="contained"
                    >
                    دیدن نتیجه
                    </Button>
                </Box>

                <Box sx={{display:data?.is_paid ? 'none': 'flex',justifyContent:'center'}}>
                    <Button
                    onClick={exite}
                    style={{ marginRight: "5px" }}
                    size="small"
                    variant="contained"
                    >
                    بازگشت به صفحه
                    </Button>
                </Box>
            </Box>
        </Box>
  )
}

export default BoxS
