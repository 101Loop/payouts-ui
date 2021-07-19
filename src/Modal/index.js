import { Component } from "react";

class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { data, show } = this.props;

        if (!show) {
            return null;
        }

        return(  
            <div className="custom-modal">
                <div className="modal-content">
                    <p className="close-modal" onClick={this.props.onClose}>x</p>
                    <ul>
                        {data && data.length !== 0 && data.map((d) => {
                            return <li>
                                <p className="modal-head">Hours Logged: {d['hours'] + 'h'}</p>
                                <p>{d['description']}</p>
                                <p>JIRA id: {d['jira_id']}</p>
                            </li>
                        })}
                    </ul>

                    {
                        !data || data.length === 0 &&
                        <p style={{textAlign: 'center'}}>No work log found</p>
                    }
                </div>
            </div>
        )
    }
}

export default Modal;