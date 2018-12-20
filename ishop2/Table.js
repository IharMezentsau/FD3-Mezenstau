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

    getInitialState: function() {
        return {
            currentElement: false,
            myPropsProducts: this.props.products,
        };
    },

    clickElement: function (EO) {
        if (this.state.currentElement)
            this.state.currentElement.className = this.state.currentElement.className.replace(/SelectedElement/g, "");

        this.setState({currentElement: EO.currentTarget});
        EO.currentTarget.className = 'SelectedElement';
    },

    deleteElement: function (key) {
        if (confirm('Are you sure?'))
            this.setState({myPropsProducts: this.state.myPropsProducts.filter(el => el.id !== key)});
    },

    render: function() {

        let tableData = this.state.myPropsProducts.map(value =>
            React.DOM.tr({key: value.id, onClick: this.clickElement},
                React.DOM.td({className: 'Name'}, value.name),
                React.DOM.td({className: 'Price'}, value.price),
                React.DOM.td({className: 'URL'},
                    React.DOM.img({src: value.url}),
                ),
                React.DOM.td({className: 'Item'}, value.item),
                React.DOM.td({className: 'Control'},
                    React.DOM.button({className: 'BtnDelete', onClick: () => this.deleteElement(value.id)}, 'Delete'),
                ),
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
                        React.DOM.th({className: 'Control'}, 'Control'),
                    ),
                ),
                React.DOM.tbody({key: 46, className: 'Products'},
                    tableData,
                ),
            )
        )
    }

});