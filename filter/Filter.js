let Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                text: React.PropTypes.string.isRequired,
            }),
        ),
    },

    render: function () {

        let liData = this.props.words.map(value =>
            React.DOM.li({className: 'LiData', key: value.code}, value.text)
        );

        return React.DOM.div({className: 'Div'},
            React.DOM.span({className: 'Span'},
                React.DOM.input({className: 'Checkbox', type: 'checkbox'}),
                React.DOM.input({className: 'Input', type: 'text'}),
            ),
            React.DOM.ul({className: 'Ul'}, liData),
        )

    }

});