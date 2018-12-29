import React from 'react';
import PropTypes from 'prop-types';

import './TableHead.css';

class TableHead extends React.Component {

    static propTypes = {
        idHead: PropTypes.number.isRequired,
        nameHead: PropTypes.string.isRequired,
        priceHead: PropTypes.string.isRequired,
        urlHead: PropTypes.string.isRequired,
        itemHead: PropTypes.string.isRequired,
        controlHead: PropTypes.string.isRequired,
    };

    render() {
        return (
            <thead key='45' className='TableHead'>
                <tr key={this.props.id}>
                    <th className='Name'>
                        {this.props.nameHead}
                    </th>
                    <th className='Price'>
                        {this.props.priceHead}
                    </th>
                    <th className='Url'>
                        {this.props.urlHead}
                    </th>
                    <th className='Item'>
                        {this.props.itemHead}
                    </th>
                    <th className='Control'>
                        {this.props.controlHead}
                    </th>
                </tr>
            </thead>
        );
    }

}

export default TableHead;