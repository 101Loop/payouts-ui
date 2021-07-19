import { Component } from "react";
import "./WeeklyInvoice.css";
import { Link } from "react-router-dom";

class WeeklyInvoice extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { invoice } = this.props;

        return (
            // <Link to={`/weekly-invoice/${invoice['invoice_date']}`}>
            //     <div className="invoice-row" onClick={() => this.handleClickRow}>
            //         <p>{invoice['invoice_date']}</p>
            //         <p>Due: {invoice['due_date']}</p>
            //         <span className="amount">
            //             <p>{invoice['invoice_amount']} USD</p>
            //             <p>Paid {invoice['due_date']}</p>
            //         </span>
            //     </div>
            // </Link>
               
                <tr>
                    <td>{invoice['invoice_date']}</td>
                    <td>{invoice['due_date']}</td>
                    <td>{invoice['start_date'] - invoice['invoice_date']}</td>
                    <td>{invoice['invoice_amount']}</td>
                </tr>            
        )
    }
}

export default WeeklyInvoice