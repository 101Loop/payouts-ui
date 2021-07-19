import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateSelector extends Component {

  constructor(props) {
    super(props);

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

        const { start_date, end_date } = this.props;

        return(
            <div className="date-picker">
                <DatePicker selected={start_date} onChange={(date) => this.props.selectStartDate(date)}/>
                <DatePicker selected={end_date} onChange={(date) => this.props.selectEndDate(date)}/>
            </div>
        )
    }
}

export default DateSelector