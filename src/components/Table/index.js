import { withStyles, makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
export const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#006666',
      color: theme.palette.common.white,
      fontWeight:'bold'
    },
    body: {
      fontSize: 15,

    },
  }))(TableCell);
  
export  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);