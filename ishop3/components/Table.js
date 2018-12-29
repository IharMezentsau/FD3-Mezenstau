import React from 'react';
import PropTypes from 'prop-types';

import TableName from './TableName';
import TableHead from './TableHead';
import TableBody from "./TableBody";
import Product from './Product';

import './Table.css';

class Table extends React.Component {

    static propTypes = {
        tableName: PropTypes.string,
        tableHead: PropTypes.shape({
            idHead: PropTypes.number.isRequired,
            nameHead: PropTypes.string.isRequired,
            priceHead: PropTypes.string.isRequired,
            urlHead: PropTypes.string.isRequired,
            itemHead: PropTypes.string.isRequired,
            controlHead: PropTypes.string.isRequired,
        }),
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                item: PropTypes.number.isRequired,
            }),
        ),
    };

    state = {
        product: false,
    };

    render() {
        return (
            <div className='Table'>
                <TableName tableName={this.props.tableName}/>
                <table className={'Table'} key='100'>
                    <TableHead
                        idHead={this.props.tableHead.idHead}
                        nameHead={this.props.tableHead.nameHead}
                        priceHead={this.props.tableHead.priceHead}
                        urlHead={this.props.tableHead.urlHead}
                        itemHead={this.props.tableHead.itemHead}
                        controlHead={this.props.tableHead.controlHead}
                    />
                    <TableBody products={this.props.products} cbStateProduct={this}/>
                </table>
                <button>New product</button>
                {this.state.product && <Product product={this.state.product} />}
            </div>
        )
    }

};

export default Table;