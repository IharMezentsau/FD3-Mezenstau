import React from 'react';
import PropTypes from 'prop-types';

import './ClientsList.css';
import TableRowClient from './TableRowClient';

class ClientsList extends React.PureComponent {
    static propTypes = {
        clients: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                firstname: PropTypes.string.isRequired,
                lastname: PropTypes.string.isRequired,
                patronymic: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            }),
        ),
    };

    state = {
        clients: this.props.clients,
    };

    componentWillReceiveProps = (newProps) => {
        console.log("ClientList componentWillReceiveProps");
        this.setState({clients: newProps.clients});
    };

    render() {
        console.log("ClientsList render");

        let tBodyClients = this.state.clients.map(client => {
            if (client) return <TableRowClient key={`TableRowClient-${client.id}`} client={client}/>;
        });
        return(
            <table className="Table">
                <thead>
                    <tr>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Баланс</th>
                        <th>Статус</th>
                        <th>Редактировать</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {tBodyClients}
                </tbody>
            </table>
        );
    }
}

export default ClientsList;