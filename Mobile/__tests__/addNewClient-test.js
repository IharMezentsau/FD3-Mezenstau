import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.1';

configure({ adapter: new Adapter() });

import NewClient from '../components/NewClient';

test('Работа NewClient', () => {
    let component = shallow(
            <NewClient idMax={6}/>
        ),
        inputFields = component.find('input'),
        props = ['Firstname', 'Lastname', 'Patronymic', 500],
        btn = component.find('button').first();

    expect(component).toMatchSnapshot();

    inputFields.forEach((el, i) => el.simulate('change', {
        target: { value: props[i] },
    }));

    expect(btn.simulate('click')).toMatchSnapshot();

});