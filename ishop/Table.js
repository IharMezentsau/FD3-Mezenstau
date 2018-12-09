let Table = React.createClass({

    displayName: 'Table',

    propTypes: {
        tableName: React.PropTypes.string,
        products: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                id: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                url: React.PropTypes.string.isRequired,
                item: React.PropTypes.number.isRequired,
            }),
        ),
    },

    render: function() {

        let tableData = this.props.products.map(value =>
            React.DOM.tr({key: value.id},
                React.DOM.td({className: 'Name'}, value.name),
                React.DOM.td({className: 'Price'}, value.price),
                React.DOM.td({className: 'URL'},
                    React.DOM.img({src: value.url}),
                ),
                React.DOM.td({className: 'Item'}, value.item),
            )
        );

        return React.DOM.div({className: 'Table'},
            React.createElement(TableName, this.props.tableName),
            React.DOM.table({className: 'Table'},
                React.DOM.thead({key: 45,className: 'TableHead'},
                    React.DOM.tr({key: 0},
                        React.DOM.th({className: 'Name'}, 'Наименование'),
                        React.DOM.th({className: 'Price'}, 'Цена'),
                        React.DOM.th({className: 'URL'}, 'Фото'),
                        React.DOM.th({className: 'Item'}, 'Количество'),
                    ),
                ),
                React.DOM.tbody({key: 46, className: 'Products'},
                    tableData,
                ),
            )
        )
    }

});