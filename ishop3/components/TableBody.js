import React from 'react';
import PropTypes from 'prop-types';

import './TableBody.css';

class TableBody extends React.Component {

    static propTypes = {
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                item: PropTypes.number.isRequired,
            }),
        ),
        cbDeleteElement: PropTypes.func,
        cbEditElement: PropTypes.func,
        cbClickElement: PropTypes.func,
    };

    render() {
        let tableData = this.props.products.map(value =>
            <tr key={value.id} onClick={(e) => this.props.cbClickElement(e, value.id)}>
                <td className='Name'>{value.name}</td>
                <td className='Price'>{value.price}</td>
                <td className='URL'>
                    <img src={value.url} alt={value.name}/>
                </td>
                <td className='Item'>{value.item}</td>
                <td className='Control'>
                    <button className='BtnDelete' onClick={(e) => this.props.cbDeleteElement(e, value.id)}>Delete</button>
                    <button className='BtnEdit' onClick={(e) => this.props.cbEditElement(e, value.id)}>Edit</button>
                </td>
            </tr>
        );

        return (
            <tbody key='102' className='Products'>
                {tableData}
            </tbody>
        );
    }

}

export default TableBody;