import React, {Fragment} from "react";
import PropTypes from "prop-types";

import "./MobileCompanies.css";
import ClientsList from "./ClientsList";
import NewClient from './NewClient';
import EditClient from "./EditClient";
import eventMobileCompany from "./events";

class MobileCompanies extends React.PureComponent {
    static propTypes = {
        companies: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                clients: PropTypes.arrayOf(
                    PropTypes.shape({
                        id: PropTypes.number.isRequired,
                        firstname: PropTypes.string.isRequired,
                        lastname: PropTypes.string.isRequired,
                        patronymic: PropTypes.string.isRequired,
                        balance: PropTypes.number.isRequired,
                    }),
                ),
            })
        ),
    };

    state = {
        companies: this.props.companies,
        indexActiveCompany: 0,
        selectClients: this.props.companies[0].clients,
        sortMode: 0, // 0 - All, 1 - Active, 2 - Blocked
        workMode: 0, // 0 - Read, 1 - Create, 2 - Edit
        client: null,
    };

    changeSortMode = (mode) => {
        this.setState({sortMode: mode});
        switch (mode) {
            case 0:
                this.selectAllOnClick();
                break;
            case 1:
                this.selectActiveOnClick();
                break;
            case 2:
                this.selectBlockedOnClick();
                break;
        }
    };

    selectAllOnClick = () => {
        let newAllSelected = [...this.state.companies[this.state.indexActiveCompany].clients],
            changed = false;

        newAllSelected.forEach((client, i) => {
            if (client !== this.state.selectClients[i]) {
                let newClients = {...client};
                newAllSelected[i] = newClients;
                changed = true;
            }
        });
        if (changed) this.setState({selectClients: newAllSelected});
    };

    selectActiveOnClick = () => {
        let newActiveClients = [...this.state.companies[this.state.indexActiveCompany].clients],
            changed = false;
        newActiveClients.forEach((client, i) => {
            if (client.balance <= 0) {
                newActiveClients[i] = undefined;
                changed = true;
            }
        });
        if (changed) this.setState({selectClients: newActiveClients});
    };

    selectBlockedOnClick = () => {
        let newBlockedClients = [...this.state.companies[this.state.indexActiveCompany].clients],
            changed = false;
        newBlockedClients.forEach((client, i) => {
            if (client.balance > 0) {
                newBlockedClients[i] = undefined;
                changed = true;
            }
        });
        if (changed) this.setState({selectClients: newBlockedClients});
    };

    selectSomeCompany = (indexCompany) => {
        const newSelectCompany = this.state.companies[indexCompany];
        this.setState({
            selectClients: newSelectCompany.clients,
            indexActiveCompany: indexCompany,
            workMode: 0,
            client: null,
        });
    };

    setWorkMode = (workMode, idClient) => {
        let client = this.state.selectClients.filter((clnt) => clnt ? clnt.id === idClient : undefined)[0];
        this.setState({workMode: workMode, client: client});
    };

    handlerSaveEditClient = (client) => {
        let newArrayCompanies = this.state.companies,
            newArraySelectClients = [...this.state.selectClients],
            changed = false;

        newArrayCompanies.forEach((company, i) => {
            if (i === this.state.indexActiveCompany) {
                let newCompany = {...company},
                    newArrayClients = [...newCompany.clients];
                newArrayClients.forEach((c, j) => {
                    if (c.id === client.id) {
                        if (c.firstname !== client.firstname ||
                            c.lastname !== client.lastname ||
                            c.patronymic !== client.patronymic ||
                            c.balance !== client.balance) {
                            newArrayClients[j] = client;
                            changed = true;
                        }
                    };
                });
                newCompany.clients = newArrayClients;
                newArrayCompanies[i] = newCompany;
            }
        });
        this.setState({workMode: 0, client: undefined});
        if (changed)
            this.setState({
                companies: newArrayCompanies,
                selectClients: newArraySelectClients,
            });
        this.changeSortMode(this.state.sortMode);
    };

    handlerSaveNewClient = (client) => {
        let newArrayCompanies = this.state.companies,
            newArraySelectClients = [...this.state.selectClients],
            changed = false;

        newArrayCompanies.forEach((company, i) => {
            if (i === this.state.indexActiveCompany) {
                let newCompany = {...company},
                    newArrayClients = [...newCompany.clients];
                newArrayClients.push(client);
                newCompany.clients = newArrayClients;
                newArrayCompanies[i] = newCompany;
            }
        });
        this.setState({workMode: 0, client: undefined});
        if (changed)
            this.setState({
                companies: newArrayCompanies,
                selectClients: newArraySelectClients,
            });
        this.changeSortMode(this.state.sortMode);
    };

    changeWorkMode = (workMode) => {
        switch(workMode) {
            case 0:
               return null;
            case 1:
                let maxId = Math.max
                    .apply(null, this.state.companies[this.state.indexActiveCompany].clients.map(o => o.id));
                return <NewClient idMax={maxId}/>;
            case 2:
                return <EditClient client={this.state.client}/>
        };
     };

    deleteClient = (id) => {
        let newArrayCompanies = [...this.state.companies],
            newArraySelectClients = [...this.state.selectClients];

        newArrayCompanies.forEach((company, i) => {
            if (i === this.state.indexActiveCompany) {
                let newCompany = {...company},
                    newArrayClients = [...newCompany.clients];
                newArrayClients.forEach((client, j) => {
                    if (client.id === id) {
                        newArrayClients.splice(j, 1);
                        newArraySelectClients.splice(j, 1);
                    };
                });
                newCompany.clients = newArrayClients;
                newArrayCompanies[i] = newCompany;
            }
        });
        this.setState({
            companies: newArrayCompanies,
            selectClients: newArraySelectClients,
        });
    };

    componentDidMount = () => {
        eventMobileCompany.addListener('ESetWorkMode', this.setWorkMode);
        eventMobileCompany.addListener('EDeleteClient', this.deleteClient);
        eventMobileCompany.addListener('ESaveEditClient', this.handlerSaveEditClient);
        eventMobileCompany.addListener('ESaveNewClient', this.handlerSaveNewClient);
    };

    componentWillUnmount = () => {
        eventMobileCompany.removeListener('ESetWorkMode', this.setWorkMode);
        eventMobileCompany.removeListener('EDeleteClient', this.deleteClient);
        eventMobileCompany.removeListener('ESaveEditClient', this.handlerSaveEditClient);
        eventMobileCompany.removeListener('ESaveNewClient', this.handlerSaveNewClient);
    };

    render() {
        console.log("MobileCompany render");

        let companies = <span className="CompaniesBTN">{
                this.state.companies
                    .map((company, i) => <button
                        key={`btnCompany-${company.name}`}
                        onClick={() => this.selectSomeCompany(i)}>{company.name}</button>)
            }</span>;

        return (
            <Fragment>
                {companies}
                <p key={`nameCompany${this.state.companies[this.state.indexActiveCompany].name}`}>
                    Компания: {this.state.companies[this.state.indexActiveCompany].name}
                </p>
                <hr/>
                <button key='btnAll' onClick={() => this.changeSortMode(0)}>Все</button>
                <button key='btnActive' onClick={() => this.changeSortMode(1)}>Активные</button>
                <button key='btnBlocked' onClick={() => this.changeSortMode(2)}>Заблокированные</button>
                <hr/>
                <ClientsList clients={this.state.selectClients}/>
                <button key='btnAdd' onClick={() => this.setWorkMode(1)}>Добавить клиента</button>
                {
                    this.changeWorkMode(this.state.workMode)
                }
            </Fragment>
        );
    }
}

export default MobileCompanies;