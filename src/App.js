import './App.scss';
import { Component } from 'react';
import DateSelector from './date-selector';
import { mockData } from "./mockData";
import Invoices from './Invoices';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DailyInvoice from './Invoices/DailyInvoice';
import axios from 'axios';
import moment from 'moment';

const config = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_DONT_JUDGE_ITS_LOCAL_TOKEN}` }
};
class App extends Component {

  constructor(props) {
    super(props);
    this.generateInvoice = this.generateInvoice.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.state = { invoices: [], invoice_start_date: new Date(), invoice_end_date: new Date()  }
  }

  async generateInvoice() {

    this.setState({ invoices: mockData });

    const { invoice_start_date, invoice_end_date } = this.state;
    console.log(config)

    let baseurl = 'http://127.0.0.1:8000';

    const startDate = moment(invoice_start_date).format("YYYY-MM-DD");
    const endDate = moment(invoice_end_date).format("YYYY-MM-DD");

    try {
      const { data } = await axios({
        method: 'GET',
        url: baseurl + `/invoices?start_date=${startDate}&end_date=${endDate}`,
      });

      console.log({ data });
    } catch(error) {
      console.log("Error: ", error);
    }
  }

  setStartDate(date) {
    this.setState({ invoice_start_date: date })
  }

  setEndDate(date) {
    this.setState({ invoice_end_date: date })
  }

  render() {

    const { invoice_start_date, invoice_end_date } = this.state; 

    return (
      <BrowserRouter>
        <div className="App">
          <DateSelector
            start_date={invoice_start_date}
            end_date={invoice_end_date}
            selectStartDate={this.setStartDate}
            selectEndDate={this.setEndDate}
          />
          <Link to="/invoices">
            <button className="primary-button" onClick={this.generateInvoice}> <strong>Show Invoices</strong></button>
          </Link>
        </div>
        <Switch>
          <Route exact path="/weekly-invoice/:date" component={DailyInvoice}></Route>
          <Route exact path="/invoices">
            <Invoices invoices={this.state.invoices}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
