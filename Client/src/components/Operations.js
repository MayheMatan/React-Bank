import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment'


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4,
    },
    button: {
        margin: theme.spacing.unit * 2
    },
    textField: {
        margin: theme.spacing.unit * 2
    }
  });  

class Operations extends React.Component {
    state = {
        vendor: "",
        amount: "",
        category: "",
        date: null
    }

    amountInputHandler = event => {
        this.setState({amount: event.target.value})
    }

    vendorInputHandler = event => {
        this.setState({vendor: event.target.value})
    }

    categoryInputHandler = event => {
        this.setState({category: event.target.value})
    }

    dateInputHandler = event => {
        this.setState({date: event.target.value})
    }

    deposit = () => {
        const transcation = {
            id: null,
            ...this.state
        }
        this.props.deposit(transcation);
        this.props.history.push("/transactions");
    }

    withdraw = () => {
        const transcation = {
            id: null,
            ...this.state
        }
        this.props.withdraw(transcation);
        this.props.history.push("/transactions");
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="h4" component="h1">
                    Withdraw / Deposit
                    </Typography>
                    <TextField
                    value={this.state.amount}
                    onChange={this.amountInputHandler}
                    id="outlined-dense"
                    label="Amount"
                    margin="dense"
                    variant="outlined"
                    />
                    <br />
                    <TextField
                    value={this.state.vendor} 
                    onChange={this.vendorInputHandler}
                    id="outlined-dense"
                    label="Vendor"
                    margin="dense"
                    variant="outlined"
                    />
                    <br />
                    <TextField
                    value={this.state.category} 
                    onChange={this.categoryInputHandler}
                    id="outlined-dense"
                    label="Category"
                    margin="dense"
                    variant="outlined"
                    />
                    <br />
                    <TextField
                    value={this.state.date}
                    onChange={this.dateInputHandler}
                    id="datetime-local"
                    label="Transaction Date"
                    className={classes.textField}
                    type="datetime-local"
                    defaultValue={moment().format()}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    />
                    <br />
                    <Button onClick={this.withdraw} variant="contained" className={classes.button} color="primary">Withdraw</Button>
                    <Button onClick={this.deposit} variant="contained" className={classes.button} color="primary">Deposit</Button>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Operations);
