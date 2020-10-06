import React from 'react';
import Transcation from './Transcation'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
});

const transcations = props => {
    const { classes } = props
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Amount ($)</CustomTableCell>
              <CustomTableCell align="center">Vendor</CustomTableCell>
              <CustomTableCell align="center">Category</CustomTableCell>
              <CustomTableCell align="center">Date</CustomTableCell>
              <CustomTableCell align="right">Delete</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.transcations.map(transcation => {
                return (
                    <Transcation 
                    key={transcation._id}
                    transcation={transcation}
                    removeTranscationById={props.removeTranscationById}/>
                )
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
export default withStyles(styles)(transcations);

// props.transcations.map(transcation => (
//     <Transcation
//         key={transcation._id} 
//         removeTranscationById={props.removeTranscationById} 
//         transcation={transcation}/>))
