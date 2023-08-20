import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Tabs} from '@material-ui/core';
import {Tab} from '@material-ui/core';
export const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#006666',
    },
  })(Tabs);
  
  export const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: 'white',
        backgroundColor:'#006666',
        opacity: 1,
      },
      '&$selected': {
        color: 'white',
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor:'#006666'
      },
      '&:focus': {
        color: 'white',
        backgroundColor:'#006666'
      },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);
  
  export const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
export const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#fff',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  
export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(3),
    },
    demo1: {
      backgroundColor: theme.palette.background.paper,
    },
    demo2: {
      backgroundColor: '#2e1534',
    },
  }));