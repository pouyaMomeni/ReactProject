import {  Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";


export const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: {xs:10,sm:12,md:14},
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#006666',
  borderColor: '#006666',
  borderRadius: '15px',
  color: 'white',
  '&:hover': {
      backgroundColor: '#3a5a40',
      borderColor: '#3a5a40',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3a5a40',
      borderColor: '#3a5a40',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #3a5a40',
    },

});
export const CustomButtonForStartTest = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: {xs:10,sm:12,md:14},
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#1A5BF5',
  borderColor: '#1A5BF5',
  borderRadius: '15px',
  color: 'white',
  '&:hover': {
      backgroundColor: '#4078F9',
      borderColor: '#0069d9',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },

});

export const CustomButtonLanding = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: {xs:10,sm:12,md:14},
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#2b2d42',
  borderColor: '#219ebc',
  borderRadius: '15px',
  color: 'white',
  '&:hover': {
      backgroundColor: '#8d99ae',
      borderColor: '#0069d9',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#8d99ae',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },

});



export const CustomButtonTest = styled(Button)((props) =>({
  boxShadow: 'none',
  width:'6rem',
  height:'2.2rem',
  textTransform: 'none',
  padding: '1rem',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#4078F9',
  borderColor: '#4078F9',
  borderRadius: '15px',
  color: 'white',
  fontSize:'0.7rem',
  [props.theme.breakpoints.up("sm")]: {
    fontSize:'0.8rem',
    width:'7rem'
  },
  [props.theme.breakpoints.up("md")]: {
    fontSize:'0.9rem',
    width:'8rem'
  },
  [props.theme.breakpoints.up("lg")]: {
    fontSize:'1rem',
    width:'8rem'
  },
  '&:hover': {
      backgroundColor: '#4078F9',
      borderColor: '#0069d9',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },

  }));

  export const CustomButtonTestOptionLast = styled(Button)((props) =>({
    boxShadow: 'none',
    width:'6rem',
    height:'2.2rem',
    textTransform: 'none',
    padding: '1rem',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#718093',
    borderColor: '#718093',
    borderRadius: '15px',
    color: 'white',
    fontSize:'0.7rem',
    [props.theme.breakpoints.up("sm")]: {
      fontSize:'0.8rem',
      width:'7rem'
    },
    [props.theme.breakpoints.up("md")]: {
      fontSize:'0.9rem',
      width:'8rem'
    },
    [props.theme.breakpoints.up("lg")]: {
      fontSize:'1rem',
      width:'8rem'
    },
    '&:hover': {
        backgroundColor: '#4078F9',
        borderColor: '#0069d9',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
  
    }));


    export const CustomButtonTestOptionSave = styled(Button)((props) =>({
      boxShadow: 'none',
      width:'6rem',
      height:'2.2rem',
      textTransform: 'none',
      padding: '1rem',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#44bd32',
      borderColor: '#44bd32',
      borderRadius: '15px',
      color: 'white',
      fontSize:'0.7rem',
      [props.theme.breakpoints.up("sm")]: {
        fontSize:'0.8rem',
        width:'7rem'
      },
      [props.theme.breakpoints.up("md")]: {
        fontSize:'0.9rem',
        width:'8rem'
      },
      [props.theme.breakpoints.up("lg")]: {
        fontSize:'1rem',
        width:'8rem'
      },
      '&:hover': {
          backgroundColor: '#4078F9',
          borderColor: '#0069d9',
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
          backgroundColor: '#0062cc',
          borderColor: '#005cbf',
        },
        '&:focus': {
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    
      }));


      export const CustomButtonTestOptionNext = styled(Button)((props) =>({
        boxShadow: 'none',
        width:'6rem',
        height:'2.2rem',
        textTransform: 'none',
        padding: '1rem',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#273c75',
        borderColor: '#273c75',
        borderRadius: '15px',
        color: 'white',
        fontSize:'0.7rem',
        [props.theme.breakpoints.up("sm")]: {
          fontSize:'0.8rem',
          width:'7rem'
        },
        [props.theme.breakpoints.up("md")]: {
          fontSize:'0.9rem',
          width:'8rem'
        },
        [props.theme.breakpoints.up("lg")]: {
          fontSize:'1rem',
          width:'8rem'
        },
        '&:hover': {
            backgroundColor: '#4078F9',
            borderColor: '#0069d9',
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
          },
          '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
          },
      
        }));

        export const CustomButtonShowResult = styled(Button)((props) =>({
          boxShadow: 'none',
          width:'7rem',
          height:'2.2rem',
          textTransform: 'none',
          padding: '1rem',
          border: '1px solid',
          lineHeight: 1.5,
          backgroundColor: '#273c75',
          borderColor: '#273c75',
          borderRadius: '15px',
          color: 'white',
          fontSize:'0.7rem',
          [props.theme.breakpoints.up("sm")]: {
            fontSize:'0.8rem',
            width:'7rem'
          },
          [props.theme.breakpoints.up("md")]: {
            fontSize:'0.9rem',
            width:'9rem'
          },
          [props.theme.breakpoints.up("lg")]: {
            fontSize:'1rem',
            width:'10rem'
          },
          '&:hover': {
              backgroundColor: '#4078F9',
              borderColor: '#0069d9',
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
              backgroundColor: '#0062cc',
              borderColor: '#005cbf',
            },
            '&:focus': {
              boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        
          }));







  