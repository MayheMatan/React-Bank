import React from 'react';
import './App.css';
import axios from 'axios';
import Layout from './hoc/Layout';
import Transcations from './components/Transcations';
import Operations from './components/Operations';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Breakdown from './components/Breakdown';


class App extends React.Component {
    state = {
        transcations: []
    }

    componentDidMount = () => {
        axios.get("http://localhost:5000/transactions").then(response => {
          this.setState({transcations: response.data})
        })
      }
    
      getBalance = () => {
        let sum = 0;
        this.state.transcations.forEach(transcation => sum += parseInt(transcation.amount));
        return sum;
      }
    
      removeTranscationById = transcationId => {
        axios.delete(`http://localhost:5000/transaction/${transcationId}`)
          .then(() => {
            axios.get("http://localhost:5000/transactions")
              .then(response => {
                this.setState({transcations: response.data})
              });
          });
      }
    
      withdraw = newTranscation => {
        newTranscation.amount = newTranscation.amount * -1;
        axios.post("http://localhost:5000/transaction", newTranscation)
          .then(() => {
            axios.get("http://localhost:5000/transactions")
              .then(response => {
                this.setState({transcations: response.data})
              })
          })
      }
    
      deposit = newTranscation => {
        axios.post("http://localhost:5000/transaction", newTranscation)
          .then(() => {
            axios.get("http://localhost:5000/transactions")
              .then(response => {
                this.setState({transcations: response.data})
              })
          })
      }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Layout>
                        <h1>Balance: ${this.getBalance()}</h1>
                        <Route path="/breakdown" exact render={() => <Breakdown transcations={this.state.transcations} />} />
                        <Route path="/transactions" exact render={() => <Transcations removeTranscationById={this.removeTranscationById} transcations={this.state.transcations}/>} />
                        <Route path="/operations" exact render={({history}) => <Operations history={history} withdraw={this.withdraw} deposit={this.deposit}/>} />
                    </Layout>
                </Router>
            </React.Fragment>
        )
    }
}

export default App