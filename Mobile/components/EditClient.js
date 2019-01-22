import React from 'react';
import PropTypes from 'prop-types';

import './EditClient.css';
import eventMobileCompany from "./events";

class EditClient extends React.PureComponent {
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

    editfirstnameRef = null;
    editlastnameRef = null;
    editpatronymicRef = null;
    editbalanceRef = null;

    setEditTextRef = (ref, field) => {
        this[`edit${field}Ref`] = ref;
    };

    setEditText = () => {
        if ( this.editfirstnameRef || this.editlastnameRef ||
            this.editpatronymicRef || this.editbalanceRef ) {
            let newText = {};
            newText.id = this.state.client.id;
            newText.firstname = this.editfirstnameRef.value;
            newText.lastname = this.editlastnameRef.value;
            newText.patronymic = this.editpatronymicRef.value;
            newText.balance = Number(this.editbalanceRef.value);
            eventMobileCompany.emit('ESaveEditClient', newText);
            this.setState({client: null});
        }
    };

    cancelButton = () => {
        this.setState({client: null});
        eventMobileCompany.emit('ESetWorkMode', 0);
    };

    componentWillReceiveProps = (newProps) => {
        console.log(`EditClient id=${this.props.client.id} componentWillReceiveProps`);
        this.setState({client: newProps.client});
    };

    render() {
        console.log(`EditClient rendered`);
        return(
            <div key={`editClient-${this.state.client.id}`} className='EditClient'>
                <div>Введите имя: <input defaultValue={this.state.client.firstname}
                                         ref={(ref) => this.setEditTextRef(ref, 'firstname')} type='text'/></div>
                <div>Введите фамилию: <input defaultValue={this.state.client.lastname}
                                             ref={(ref) => this.setEditTextRef(ref, 'lastname')} type='text'/></div>
                <div>Введите отчество: <input defaultValue={this.state.client.patronymic}
                                              ref={(ref) => this.setEditTextRef(ref, 'patronymic')} type='text'/></div>
                <div>Введите баланс: <input defaultValue={this.state.client.balance}
                                            ref={(ref) => this.setEditTextRef(ref, 'balance')} type='text'/></div>
                <div>
                    <button key='SaveEditClient' onClick={this.setEditText}>Save</button>
                    <button key='CancelEditClient' onClick={this.cancelButton}>Cancel</button>
                </div>
            </div>
        );
    };
};

export default EditClient;