import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'

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

const transcation = props => {
    const { classes } = props

    const removeTranscation = () => {
        props.removeTranscationById(props.transcation._id)
    }

    return (
        <TableRow className={classes.row}>
            <CustomTableCell component="th" scope="row">
            {props.transcation.amount}
            </CustomTableCell>
            <CustomTableCell align="center">{props.transcation.vendor}</CustomTableCell>
            <CustomTableCell align="center">{props.transcation.category}</CustomTableCell>
            <CustomTableCell align="center">
                {props.transcation.date ? moment(props.transcation.date).format('LLL') : null}
            </CustomTableCell>
            <CustomTableCell align="right">
                <Button onClick={removeTranscation} variant="contained" color="primary">Remove</Button>
            </CustomTableCell>
        </TableRow>
    )
}

export default withStyles(styles)(transcation);