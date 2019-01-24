import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';

configure({ adapter: new Adapter() });

import MobileCompanies from '../components/MobileCompanies';

test('Работа NewClient', () => {
    const companies = [
        {
            "name": "МТС",
            "clients": [
                {"id": 0, "lastname": "Иванов", "firstname": "Иван", "patronymic": "Иванович", "balance": 200},
                {"id": 1, "lastname": "Сидоров", "firstname": "Сидор", "patronymic": "Сидорович", "balance": 250},
                {"id": 2, "lastname": "Петров", "firstname": "Петр", "patronymic": "Петрович", "balance": 180},
                {"id": 3, "lastname": "Григорьев", "firstname": "Григорий", "patronymic": "Григорьевич", "balance": -220}
            ]
        },
        {
            "name": "Velcom",
            "clients": [
                {"id": 0, "lastname": "Иванов", "firstname": "Иван", "patronymic": "Иванович", "balance": 200},
                {"id": 1, "lastname": "Сидоров", "firstname": "Сидор", "patronymic": "Сидорович", "balance": 250},
                {"id": 2, "lastname": "Петров", "firstname": "Петр", "patronymic": "Петрович", "balance": 180},
                {"id": 3, "lastname": "Григорьев", "firstname": "Григорий", "patronymic": "Григорьевич", "balance": -220}
            ]
        }
    ];
    let component = shallow(
            <MobileCompanies companies={companies}/>
        ),
        btns = component.find('span>button');

    expect(component).toMatchSnapshot();

    btns.forEach(btn => {
        btn.simulate('click');
    });

    expect(btns.first().simulate('click')).toMatchSnapshot();

});