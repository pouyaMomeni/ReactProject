import React, { useState } from "react";
import { calculateEnrichTest, createTest,login } from "../../../api/TestApi";
import { toast } from "react-toastify";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import enrichLogo from "../../../assets/img/logo/aiSystemNew.png";
import womanNeo from "../../../assets/img/woman-neo.png";
import manNeo from "../../../assets/img/male-neo.png";
import { CustomButton} from "../../../components/Button";
import tipe from '../../../assets/img/tipe.png'
import continueLogo from "../../../assets/img/continue.png";
// Import pic

const AiSystem = () => {
  const [identifier, setIdentifier] = useState();
  const [identifierMan, setIdentifierMan] = useState();
  const [identifierWoman, setIdentifierWoman] = useState();
  const history = useHistory();

  const loginClick = () => {
    if (!identifier) return;
    login(identifier)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", res.male);
        sessionStorage.setItem("single", "" + res.single);
        window.location.href = `/${res.test_name}`;
      })
      .catch(err => {
        toast.warn(err.message);
      });
  };



  const enrichResult = () => {
    if (!identifierWoman || !identifierMan)
      toast.warn("لازم است هردو فیلد را پر کنید");
    calculateEnrichTest(identifierMan, identifierWoman)
      .then(res => {
        history.push(`/AiSystemResult/${identifierMan}/${identifierWoman}`);
      })
      .catch(err =>
        toast.error(
          err?.response?.data?.message
            ? err.response.data.message
            : "خطا در دریافت نتیجه",
          { autoClose: false },
        ),
      );
  };

  const [statusN, setStatusN] = useState("");
  const [statusNWoman, setStatusNWoman] = useState("");
  const handel4 = event => {
    setStatusN(event.target.value);
  };
  const handel7 = event => {
    setStatusNWoman(event.target.value);
  };
  const NeoTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/neo";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  };


  ///////////////////////////////////////
  const [inputText, setInputText] = useState("");

  return (
    <>
      <Box sx={{display:'flex' ,alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
        <Box sx={{ display: "flex", justifyContent: "center", height: "7rem",width:'10rem'}}>
          <img src={tipe} alt="logo" />
        </Box>
        <Box  sx={{fontSize:{xs:'0.6rem',sm:'0.7rem',md:'0.8rem',lg:'0.9rem'},padding:{xs:'0.7rem',sm:'1rem',md:'1.1rem',lg:'1.1rem'},borderRadius:'20px',fontWeight:'bold',marginX:'1rem'}}>
        ابتدا خانم و آقا جداگانه آزمون شخصیت را به انجام رسانند.  سپس برای پیشبینی رضایت زناشویی کد آزمون خود را در محل مشخص شده وارد کنند.
        </Box>
      </Box>

    
    <Box
    sx={{
      padding: "2rem",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gridGap: "20px",
      margin:0,
      width:'100%'
    }}
  >
      
      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={manNeo} alt="pic" />
        </CardContent>
        <CardContent>
          <Typography
            style={{
              color: "#006666",
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
              fontSize: "1.2rem",
              fontWeight:'bold',
              alignItems:'center',
              flexDirection:'column'
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            آزمون شخصیت نئو 
            <Box>(مرد)</Box>
          </Typography>
          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
نئو یکی از پر کاربرد ترین تست روانشناختی در زمینه شخصیت شناسی است که با هدف شناخت شخصیت، ویژگی های شخصیتی، شناسایی نقاط قوت و نقاط ضعف، طراحی شده است .
              </Typography>
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">تأهل</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={statusN}
              onChange={handel4}
              label="تأهل"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={false}>متاهل</MenuItem>
              <MenuItem value={true}>مجرد</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
          <CustomButton
            style={{ margin: "5px" }}
            onClick={() => NeoTest(statusN, true)}
          >
            شروع آزمون
          </CustomButton>
        </CardActions>
      </Card>

      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={womanNeo} alt="pic" />
        </CardContent>
        <CardContent>
          <Typography
            style={{
              color: "#006666",
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
              fontSize: "1.2rem",
              fontWeight:'bold',
              alignItems:'center',
              flexDirection:'column'
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            آزمون شخصیت نئو 
            <Box>(زن)</Box>
          </Typography>
          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
نئو یکی از پر کاربرد ترین تست روانشناختی در زمینه شخصیت شناسی است که با هدف شناخت شخصیت، ویژگی های شخصیتی، شناسایی نقاط قوت و نقاط ضعف، طراحی شده است .
              </Typography>

        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">تأهل</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={statusNWoman}
              onChange={handel7}
              label="تأهل"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={false}>متاهل</MenuItem>
              <MenuItem value={true}>مجرد</MenuItem>
            </Select>
          </FormControl>
          {/*  SELECTOR single 0r maried - End  */}
        </Box>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
          <CustomButton
            style={{ margin: "5px" }}
            onClick={() => NeoTest(statusNWoman, false)}
          >
            شروع آزمون
          </CustomButton>
        </CardActions>
      </Card>
      <Card
      style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={enrichLogo} alt="pic" />
        </CardContent>
        <CardContent>
          <Typography
            style={{
              color: "#006666",
              display: "flex",
              justifyContent: "center",
              alignItems:'center',
              marginBottom: "12px",
              fontSize: "1.2rem",
              fontWeight:'bold',
              flexDirection:'column'
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
          سامانه‌ی هوشمند پیش‌بینی 
        <Box>رضایت از زندگی زناشویی</Box>             
        </Typography>
        </CardContent>
        <CardActions style={{ display: "flex",flexDirection:'column', alignItems: "center",gap:'20px',justifyContent:'center',marginTop:'2rem',marginBottom:'1rem'}}>
          <TextField size="small" variant={"outlined"}   value={identifierMan} onChange={e => setIdentifierMan(e.target.value)}
            placeholder={"کد مخصوص به آقا"}/>
          <TextField size="small" style={{marginRight:'10px'}} value={identifierWoman} onChange={e => setIdentifierWoman(e.target.value)}
              variant={"outlined"} placeholder={"کد مخصوص به خانم"} />
            <CustomButton style={{marginTop:'1rem'}}  variant={"contained"} onClick={enrichResult}>بررسی نتیجه</CustomButton>
        </CardActions>
      </Card>

      <Card
        style={{ width: 300, backgroundColor: "#80a98f",borderRadius:'20px',height:'23rem'}}
        sx={{ maxWidth: 345 }}
      >

        <Box >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "7rem",marginRight:'20px' }}
        >

          <img src={continueLogo} alt="pic" />
        </CardContent>
        </Box>

        <CardContent>

          <Typography
            style={{
              color: "#006666",
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
              fontSize: "1.2rem",
              fontWeight:'bold'
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
             تکمیل آزمون ناتمام
          </Typography>
          <Typography style={{fontSize:'0.8rem',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'15px'}}>
          اگر به صورت کامل آزمون خود را کامل نکرده‌ اید، با وارد کردن کد آزمون خود در این فیلد سوالات را تکمیل نمایید
          </Typography>
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <TextField  multiline size="small" variant="outlined" value={identifier} id="outlined-multiline-flexible"  onChange={e => setIdentifier(e.target.value)}
        placeholder={"کد مخصوص به شما"}/>
        </Box>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center',flexDirection:'column' }}>

          <CustomButton
            style={{ marginTop:'1rem',marginBottom:'0.5rem' }}
            onClick={loginClick}
          >
            از سرگیری آزمون
          </CustomButton>
        </CardActions>
      </Card>

      </Box>
      </>
  );
};

export default AiSystem;

