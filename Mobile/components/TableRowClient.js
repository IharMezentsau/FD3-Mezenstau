import React from 'react';
import PropTypes from 'prop-types';

import './TableRowClient.css';
import eventMobileCompany from "./events";

class TableRowClient extends React.PureComponent{
    static propTypes = {
        client: PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstname: PropTypes.string.isRequired,
            lastname: PropTypes.string.isRequired,
            patronymic: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    state = {
        client: this.props.client,
    };

    editClient = (id) => {
        eventMobileCompany.emit('ESetWorkMode', 2, id );
    };

    deleteClient = (id) => {
        eventMobileCompany.emit('EDeleteClient', id );
    };

    componentWillReceiveProps = (newProps) => {
        console.log("TableRowClient componentWillReceiveProps");
        this.setState({client: newProps.client});
    };

    render() {
        console.log("TableRowClient render");
        console.log(`ClientList id=${this.state.client.id} render`);
        return(
            <tr>
                <td>{this.state.client.lastname}</td>
                <td>{this.state.client.firstname}</td>
                <td>{this.state.client.patronymic}</td>
                <td>{this.state.client.balance}</td>
                {
                    this.state.client.balance > 0 ?
                        <td className='ActiveClient'>active</td> :
                        <td className='BlockedClient'>blocked</td>
                }
                <td><button key={`editDTN-${this.state.client.id}`}
                            onClick={() => this.editClient(this.state.client.id)}>Редактировать</button></td>
                <td><button key={`deleteDTN-${this.state.client.id}`}
                            onClick={() => this.deleteClient(this.state.client.id)}>Удалить</button></td>
            </tr>
        );
    }

};

export default TableRowClient;