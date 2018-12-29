"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';

const data = require('./data.json'),
    tableHead = {
        idHead: 50,
        nameHead: 'Наименование',
        priceHead: 'Цена',
        urlHead: 'Фото',
        itemHead: 'Количество',
        controlHead: "Control"
    },
    tableName = 'Мобильные телефоны';

ReactDOM.render(
    <Table
        tableName={tableName}
        products={data}
        tableHead={tableHead}
    />
    , document.getElementById('container')
);
