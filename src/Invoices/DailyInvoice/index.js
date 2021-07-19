import { Component } from "react";
import { mockData } from "../../mockData";
import { formatDate } from "../../utils/index";
import informationIcon from "./../../information.png";
import Modal from "../../Modal";

class DailyInvoice extends Component {

    constructor(props) {
        super(props);
        const { date } = this.props.match.params;
        this.state = { items: {}, selectedDate: date, showModal: false, worklogs: [] }

        this.handleInfoClick = this.handleInfoClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.setState({ items: mockData[this.state.selectedDate]['items']});
    }

    handleInfoClick(data) {
        this.setState({ showModal: !this.state.showModal, worklogs: data});
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    render() {
        const { items, showModal, worklogs, selectedDate } = this.state;

        return(
            <div>
                <table className="invoice-table">
                <caption className="caption-style">{`Invoice Weekly Report: ${formatDate(selectedDate)} `}</caption>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Workday</th>
                            <th>Work Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.keys(items).map((item) => {

                            const workDate = formatDate(item);
                            const workMode = items[item]['billing_mode']['name'] === "MONTHLY" ? "d" : "h"; 

                            return <tr key="item">
                                <td>{workDate}</td>
                                <td>{items[item]['is_workday'] ? 'Yes' : 'No'}</td>
                                <td>{items[item]['work_unit'] + " " + workMode}</td>
                                <td><img onClick={() => this.handleInfoClick(items[item]['work_logs'])} style={{height: '20px'}} src={informationIcon}/></td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <Modal show={showModal} onClose={this.closeModal} data={worklogs}/>
            </div>
        )
    }
}

export default DailyInvoice

