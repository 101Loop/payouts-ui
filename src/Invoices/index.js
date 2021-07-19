import { Component } from "react";
import WeeklyInvoice from "./WeeklyInvoice";
import "./Invoices.css";
import moment from "moment";
import { withRouter } from "react-router";
import { formatDate } from  "./../utils/index";

class Invoices extends Component {

    constructor(props) {
        super(props);
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    static defaultProps = {
        invoices: []
    }

    handleRowClick(invoice) {
        console.log(invoice);
        this.props.history.push(`/weekly-invoice/${invoice}`)
    }

    render() {

        const { invoices } = this.props;

        return(
            <table className="invoice-table">
                <caption className="caption-style">Your Invoices Report</caption>
                <thead>
                    <tr>
                        <th>Invoice Date</th>
                        <th>Due Date</th>
                        <th>Duration</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    { invoices && Object.keys(invoices).map((invoice) => {
                        const invoiceDate = formatDate(invoices[invoice]['invoice_date']);
                        const dueDate = formatDate(invoices[invoice]['due_date']);
                        const startDate = formatDate(invoices[invoice]['start_date']);
                    return <tr key={invoiceDate} onClick={() => this.handleRowClick(invoice)}>
                                <td>{invoiceDate}</td>
                                <td>{dueDate}</td>
                                <td>{startDate + "-" + invoiceDate}</td>
                                <td>{invoices[invoice]['invoice_amount']}</td>
                            </tr> 
                    })}
                </tbody>

            </table>
        )
    }
}

export default withRouter(Invoices)