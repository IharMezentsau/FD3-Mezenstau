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
        cbStateProduct: PropTypes.any,
    };

    state = {
        currentElement: false,
        myPropsProducts: this.props.products,
    };

    deleteElement = (key) => {
        if (confirm('Are you sure?'))
            this.setState({myPropsProducts: this.state.myPropsProducts.filter(el => el.id !== key)});
    };

    editElement = (key) => {
        if (confirm('Are you sure?'))
            this.setState({myPropsProducts: this.state.myPropsProducts.filter(el => el.id !== key)});
    };

    clickElement = (e, key) => {
        if (this.state.currentElement)
            this.state.currentElement.className = this.state.currentElement.className.replace(/SelectedElement/g, "");

        let EO = e.currentTarget;

        this.setState({currentElement: EO});
        EO.className = 'SelectedElement';
        this.props.cbStateProduct.setState({product: this.state.myPropsProducts.filter(el => el.id === key)[0]});
    };

    render() {
        let tableData = this.state.myPropsProducts.map(value =>
            <tr key={value.id} onClick={(e) => this.clickElement(e, value.id)}>
                <td className='Name'>{value.name}</td>
                <td className='Price'>{value.price}</td>
                <td className='URL'>
                    <img src={value.url} alt={value.name}/>
                </td>
                <td className='Item'>{value.item}</td>
                <td className='Control'>
                    <button className='BtnDelete' onClick={() => this.deleteElement(value.id)}>Delete</button>
                    <button className='BtnEdit' onClick={() => this.editElement(value.id)}>Edit</button>
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