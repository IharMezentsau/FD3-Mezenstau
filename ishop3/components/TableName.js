import React from 'react';
import PropTypes from 'prop-types';

import './TableName.css';

class TableName extends React.Component {

    static propTypes = {
        tableName: PropTypes.string,
    };

    render() {
        return (
            <span className='TableName'>
                {this.props.tableName}
            </span>
        );
    }

};

TableName.defaultProps = {
    tableName: 'Таблица 1',
};

export default TableName;