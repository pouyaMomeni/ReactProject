import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import ai from "../../assets/img/ai.png";
import brain from "../../assets/img/logo/PNew.png";
import { CustomButton } from "../../components/Button";
import '../../components/Home/index.css'
const Boxes = () => {

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
        ,bgcolor:'#eaeaea'
      }}
    >
      {/* AI Panel */}
    <Card
        style={{ width: 300, backgroundColor: "white",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',height:'26rem' }}
        sx={{ maxWidth: 250 }}
        className="grow"
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={ai} alt="pic" />
        </CardContent>
        <CardContent>
          <Typography
            style={{
              color: "#006666",
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
              fontSize: "1.3rem",
              fontWeight:'bold',
              alignItems:'center',
              flexDirection:'column',
              marginTop:'2.1rem'
            }}
            gutterBottom
            variant="h4"
            component="div"
          >
            سامانه‌ی هوشمند پیش‌بینی
            <Box>رضایت از زندگی زناشویی</Box>    
          </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center',marginTop:'1.7rem' }}>
          <CustomButton
            style={{ margin: "5px",paddingRight:'28px',paddingLeft:'28px' }}
            onClick={() => {
              window.location.href = "/AiSystem";
            }}
          >
            ورود
          </CustomButton>

        </CardActions>
      </Card>


      {/* brain Panel */}
      <Card
        style={{ width: 300, backgroundColor: "white",borderRadius:'20px',boxShadow:' rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' ,height:'26rem'}}
        sx={{ maxWidth: 250 }}
        className="grow"
      >
        <CardContent
          style={{ display: "flex", justifyContent: "center", height: "10rem" }}
        >
          <img src={brain} alt="pic" />
        </CardContent>
        <CardContent>
          <Typography
            style={{
              color: "#006666",
              display: "flex",
              justifyContent: "center",
              marginBottom: "12px",
              fontSize: "1.3rem",
              fontWeight:'bold',
              alignItems:'center',
              flexDirection:'column',
              marginTop:'3rem'
            }}
            gutterBottom
            variant="h4"
            component="div"
          >
             آزمون های روانی 
          </Typography>
        </CardContent>
        <CardActions style={{ display: "flex", alignItems: "center",justifyContent:'center',marginTop:'1.7rem' }}>
          <CustomButton
            style={{ marginTop:'0.6rem',paddingRight:'28px',paddingLeft:'28px' }}
            onClick={() => {
              window.location.href = "/PsychologicalSystem";
            }}
          >
            ورود 
          </CustomButton>

        </CardActions>
      </Card>
    {/* ادامه تست را می آورد */}

    
    </Box>
    </>
  );
};

export default Boxes;

