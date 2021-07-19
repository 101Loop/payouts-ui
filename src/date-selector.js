import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends Component {

  constructor(props) {
    super(props);

    this.state = { startDate: new Date(), endDate: new Date() }

    this.handleEndDateChange = this.handleEndDateChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
  }

  handleStartDateChange(date) {
    this.setState({ startDate: date });
  }

  handleEndDateChange(date) {
    this.setState({ endDate: date });
  }

    render() {

        const { startDate, endDate } = this.state;

        return(
            <div className="date-picker">
                <DatePicker selected={startDate} onChange={(date) => this.handleStartDateChange(date)}/>
                <DatePicker selected={endDate} onChange={(date) => this.handleEndDateChange(date)}/>
            </div>
        )
    }
}

export default DateSelector