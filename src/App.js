import './App.scss';
import { Component } from 'react';
import DateSelector from './date-selector';
import { mockData } from "./mockData";
import Invoices from './Invoices';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import DailyInvoice from './Invoices/DailyInvoice';
class App extends Component {

  constructor(props) {
    super(props);
    this.generateInvoice = this.generateInvoice.bind(this);

    this.state = { invoices: [] }
  }

  generateInvoice() {
    this.setState({ invoices: mockData });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <DateSelector/>
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
