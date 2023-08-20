import React, { useState } from "react";
import {  createTest, login } from "../../../api/TestApi";
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
  Tooltip
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import eqLogo from '../../../assets/img/logo/EqiNew.png'
import ghqLogo from '../../../assets/img/logo/GhqNew.png'
import fpNew from '../../../assets/img/logo/16FpNew.png'
import glaserLogo from "../../../assets/img/logo/glaserNew.png";
import { CustomButton,  } from "../../../components/Button";
import pyNeo from "../../../assets/img/logo/NeoNew.png";
import enrichLogoNew from '../../../assets/img/logo/enrichNew.png'
import scl90New from '../../../assets/img/logo/l90New.png'
import continueLogo from "../../../assets/img/continue.png";
import mbtiLogo from '../../../assets/img/logo/MbtiNew.png'
// Import pic

const PsychologicalSystem = () => {

  const [identifier, setIdentifier] = useState();
  const [identifierMan, setIdentifierMan] = useState();
  const [identifierWoman, setIdentifierWoman] = useState();
  const [status,setStatus] = useState(true)
  const [statusNumber2,setStatusNumber2] = useState()
  const history = useHistory();
  // const classes = useStyle();
  // console.log(identifierMan + " - " + identifierWoman);
  //
  const EqTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/eq-i";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  };
  //
  const GhqTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/ghq";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  };
  //
  const GlaserTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/glaser";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  };
  //
  const Scl90rTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/scl-90-r";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  };
  //
  const MbtiTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/mbti";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  }
  //
  const Fp16Test = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/16fp";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  }
  //
  const EnrichTest = (single, male) => {
    createTest(male, single)
      .then(res => {
        sessionStorage.setItem("identifier", res.identifier);
        sessionStorage.setItem("male", "" + male);
        sessionStorage.setItem("single", "" + single);
        window.location.href = "/enrich";
      })
      .catch(err => {
        toast.error("لطفا اطلاعات عمومی را برسی کنید!");
      });
  };




  // SELECTOR for ech one ********* for GENDER
  // 1 - > eq   2 - > health 3-> glaser 4 - > SCL_90   E -> Enrich
  const [genderEQ, setGenderEQ] = useState("");
  const [genderH, setGenderH] = useState("");
  const [genderG, setGenderG] = useState("");
  const [genderM, setGenderM] = useState("");
  const [genderL90, setGenderL90] = useState("");
  const [genderN, setGenderN] = useState("");
  const [genderE, setGenderE] = useState("");
  const [genderFP, setGenderFP] = useState("");
  const handleChange = event => {
    setGenderEQ(event.target.value);
  };
  const handleChange1 = event => {
    setGenderH(event.target.value);
  };
  const handleChange2 = event => {
    setGenderG(event.target.value);
  };
  const handleChangeNew = event => {
    setGenderM(event.target.value);
  };
  const handleChange3 = event => {
    setGenderL90(event.target.value);
  };
  const handleChange5 = event => {
    setGenderE(event.target.value);
  };
  const handleChange6 = event => {
    setGenderFP(event.target.value);
  };
  //////////////////////////////////////////////////////////////////////////
  // SELECTOR for ech one ********* for Status
  // 1 - > eq   2 - > health 3-> glaser 4 - > SCL_90 N - > Neo
  const [statusEQ, setStatusEQ] = useState("");
  const [statusH, setStatusH] = useState("");
  const [statusG, setStatusG] = useState("");
  const [statusM, setStatusM] = useState("");
  const [statusL90, setStatusL90] = useState("");
  const [statusE, setStatusE] = useState("");
  const [statusFP, setStatusFP] = useState("");
  const handel = event => {
    setStatusEQ(event.target.value);
  };
  const handel1 = event => {
    setStatusH(event.target.value);
  };
  const handel2 = event => {
    setStatusG(event.target.value);
  };
  const handelNew = event => {
    setStatusM(event.target.value);
  };
  const handel3 = event => {
    setStatusL90(event.target.value);
  };

  const handel5 = event => {
    setStatusE(event.target.value);
  };
  const handel6 = event => {
    setStatusFP(event.target.value);
  };
  ///////////////////////////////////////
  const [inputText, setInputText] = useState("");

  const me = (e) => {
    // 👇 Store the input value to local state
    setInputText(e.target.value);
    console.log(inputText);
  };
  /////////////////////////////////////
  const loginClick = () => {
    if (!identifier) return;
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
        toast.warn(err.message);
      });
  };

  const [statusN, setStatusN] = useState("");
  const [genderNeoNew,setGenderNeoNew] = useState('')
  const [statusNWoman, setStatusNWoman] = useState("");
  
  const handelNeoGender = event => {
    setGenderNeoNew(event.target.value);
  };

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
  return (
    <>
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

      {/* EQ */}
      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 250 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={eqLogo} alt="pic" />
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
            variant="h4"
            component="div"
          >
            آزمون هوش هیجانی 
            <Box>بار-اون (EQ-i)</Box>
          </Typography>
          {/* start */}
            <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'15px'}}>
            تست هوش هیجانی که به  EQ نیز معروف است، آزمونی برای سنجش هوش هیجانی، هوش عاطفی و هوش ارتباطی در اشخاص است که به شناخت  هیجان و احساسات افراد می پردازد.
            </Typography>
          {/* end */}
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          {/* SELECTOR - START */}
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderEQ}
              onChange={handleChange}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          {/*  SELECTOR - End  */}
          {/* SELECTOR - single 0r maried - START */}
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
              value={statusEQ}
              onChange={handel}
              label="تأهل"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مجرد</MenuItem>
              <MenuItem value={false}>متاهل</MenuItem>
            </Select>
          </FormControl>
          {/*  SELECTOR single 0r maried - End  */}
        </Box>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
          <CustomButton
            style={{ margin: "5px" }}
            onClick={() => EqTest(statusEQ, genderEQ)}
          >
            شروع آزمون 
          </CustomButton>

        </CardActions>
      </Card>
      {/* - */}

      {/* HEALTH */}
      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={ghqLogo} alt="pic" />
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
          آزمون غربالگری سلامت عمومی 
          <Box>(GHQ)</Box>
          </Typography>
          {/* start */}

          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center',marginRight:'15px'}}>
                تست سلامت عمومی (GHQ) بـه بررسـی وضـعیت روانی و جسمانی فرد در یک ماهه اخیر می پردازد  و به شما نشان می دهد که وضع عمومی سلامت شما در چند هفته گذشته، چگونه بوده است.
              </Typography>

          {/* end */}
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
            {/* SELECTOR - START */}
            <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderH}
              onChange={handleChange1}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          {/* selector -end */}
          {/* SELECTOR - single 0r maried - START */}
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
              value={statusH}
              onChange={handel1}
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
            style={{  }}
            onClick={() => GhqTest(statusH, genderH)}

          >
            شروع آزمون
          </CustomButton>
          
        </CardActions>
      </Card>

      {/* Glaser */}
      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={glaserLogo} alt="pic" />
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
          آزمون نیازهای گلاسر 
          <Box>(Glaser)</Box>
          </Typography>
          {/* start */}
          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center',margin:'auto'}}>
          این پرسش‌نامه ابزاری برای ارزیابی شدت نیاز افراد بر مبنای «تئوری انتخاب» طراحی و ارائه شده است و افراد برای خودشناسی و شناخت اولویت‌های خود از این آزمون استفاده می‌کنند.
          </Typography>
          {/* end */}
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          {/* SELECTOR - START */}
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderG}
              onChange={handleChange2}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          {/* selector - end */}
          {/* SELECTOR - single 0r maried - START */}
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
              value={statusG}
              onChange={handel2}
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
            onClick={() => GlaserTest(statusG, genderG)}
          >
            شروع آزمون
          </CustomButton>
          
        </CardActions>
      </Card>

      {/* SCL90 */}
      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={scl90New} alt="pic" />
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
          آزمون چک‌لیست علائم اختلالات   
          <Box>(SCL-90)</Box> 
          </Typography>
          {/* start */}
          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2.3rem',marginBottom:'2.2rem'}}>
این پرسشنامه وسعت و شدت علائم و ناراحتی روانی فعلی افراد را ارزیابی می کند.
              </Typography>
          {/* end */}
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          {/* SELECTOR - START */}
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderL90}
              onChange={handleChange3}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          {/* selector - end */}
          {/* SELECTOR - single 0r maried - START */}
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
              value={statusL90}
              onChange={handel3}
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
            onClick={() => Scl90rTest(statusL90, genderL90)}
          >
            شروع آزمون
          </CustomButton>

        </CardActions>
      </Card>
      {/* - */}



      {/* fp16 */}

      {/* <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={fpNew} alt="pic" />
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
            تست کتل
            <Box>(16fp)</Box>
          </Typography>

          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1rem',marginBottom:'0.8rem'}}>
          این آزمون یکی از پرکاربردترین آزمون های شخصیت شناسی است که دارای 16 بعد اصلی است و می تواند ابعاد گسترده ای از شخصیت را نشان دهد. 
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
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderFP}
              onChange={handleChange6}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>

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
              value={statusFP}
              onChange={handel6}
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
            onClick={() => Fp16Test(statusFP, genderFP)}
          >
            شروع آزمون
          </CustomButton>

        </CardActions>
      </Card> */}
      {/* - */}

      {/* MBTI */}
      <Card
        style={{ width: 300, backgroundColor: "#eee",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }}
        sx={{ maxWidth: 345 }}
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={mbtiLogo} alt="pic" />
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
          آزمون مقیاس شخصیتی 
          <Box>مایرز-بریگز (MBTI)</Box>
          </Typography>
          {/* start */}
          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2.2rem',marginBottom:'0.9rem'}}>
تست MBTI، یک پرسش‌نامه روان‌سنجی فردی است که برای شناسایی نوع شخصیت، نقاط قوت و اولویت‌های افراد طراحی شده است.
              </Typography>
          {/* end */}
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          {/* SELECTOR - START */}
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderM}
              onChange={handleChangeNew}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          {/* selector - end */}
          {/* SELECTOR - single 0r maried - START */}
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
              value={statusM}
              onChange={handelNew}
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
            onClick={() => MbtiTest(statusM, genderM)}
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
          <img src={fpNew} alt="pic" />
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
            <Box>(Neo)</Box>
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
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderNeoNew}
              onChange={handelNeoGender}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>

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
            onClick={() => NeoTest(statusNWoman, genderNeoNew)}
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
          <img src={enrichLogoNew} alt="pic" />
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
          آزمون انریچ 
          <Box>(Enrich)</Box>
          </Typography>
          {/* start */}
          <Typography style={{fontSize:'0.86rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
          برای رضایت زناشویی بالاتر لازم است تا شما در ابعاد مختلف با همسرتان تفاهم داشته باشید. آزمون انریچ به شما کمک خواهد کرد تا میزان توافق تان را در این مولفه ها با همسرتان دریابید.
              </Typography>
          {/* end */}
        </CardContent>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gridGap:'20px'}}>
          {/* SELECTOR - START */}
          <FormControl
            style={{
              marginBottom: "15px",
              marginRight: "9px",
              width: "5.3rem",
            }}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              جنسیت
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={genderE}
              onChange={handleChange5}
              label="جنسیت"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          {/* selector - end */}
          {/* SELECTOR - single 0r maried - START */}
          {/* <FormControl
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
              value={statusE}
              onChange={handel5}
              label="تأهل"
            >
              <MenuItem value="">
                <em></em>
              </MenuItem>
              <MenuItem value={false}>متاهل</MenuItem>
              <MenuItem value={true}>مجرد</MenuItem>
            </Select>
          </FormControl> */}
          {/*  SELECTOR single 0r maried - End  */}
        </Box>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center' }}>
          <CustomButton

            style={{ margin: "5px" }}
            onClick={() => EnrichTest(false, genderE)}
          >
            شروع آزمون
          </CustomButton>
          
        </CardActions>
      </Card>


      <Card
        style={{ width: 300, backgroundColor: "#80a98f",borderRadius:'20px',height:'23rem' }}
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

export default PsychologicalSystem;

