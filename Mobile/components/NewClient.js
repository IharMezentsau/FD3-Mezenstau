import React from 'react';
import PropTypes from 'prop-types';

import './NewClient.css';
import eventMobileCompany from "./events";

class NewClient extends React.PureComponent {
    static propTypes = {
        idMax: PropTypes.number,
    };

    state = {
        id: this.props.idMax,
    };

    cancelButton = () => {
        this.setState({client: null});
        eventMobileCompany.emit('ESetWorkMode', 0);
    };

    newfirstnameRef = null;
    newlastnameRef = null;
    newpatronymicRef = null;
    newbalanceRef = null;

    setNewTextRef = (ref, field) => {
        this[`new${field}Ref`] = ref;
    };

    setNewText = () => {
        if ( this.newfirstnameRef || this.newlastnameRef ||
            this.newpatronymicRef || this.newbalanceRef ) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
            let newText = {};
            newText.id = ++this.state.id;
            newText.firstname = this.newfirstnameRef.value;
            newText.lastname = this.newlastnameRef.value;
            newText.patronymic = this.newpatronymicRef.value;
            newText.balance = Number(this.newbalanceRef.value);
            eventMobileCompany.emit('ESaveNewClient', newText);
        }
    };

    render() {
        console.log(`NewClient rendered`);
        return(
            <div className='NewClient'>
                <div>Введите имя: <input type='text' ref={(ref) => this.setNewTextRef(ref, 'firstname')}/></div>
                <div>Введите фамилию: <input type='text' ref={(ref) => this.setNewTextRef(ref, 'lastname')}/></div>
                <div>Введите отчество: <input type='text' ref={(ref) => this.setNewTextRef(ref, 'patronymic')}/></div>
                <div>Введите баланс: <input type='text' ref={(ref) => this.setNewTextRef(ref, 'balance')}/></div>
                <div>
                    <button key='SaveNewClient' onClick={this.setNewText}>Save</button>
                    <button key='CancelNewClient' onClick={this.cancelButton}>Cancel</button>
                </div>
            </div>
        );
    };
};

export default NewClient;