let Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                text: React.PropTypes.string.isRequired,
            }),
        ),
        keyText: React.PropTypes.string.isRequired,
    },

    getInitialState: function() {
        return {
            keyText: this.props.keyText,
            checkedStatus: this.props.checkedStatus,
        };
    },


    filterItems: function (propsWords, string, checked) {
        let newArrayString = propsWords.filter(value =>
            value.text.indexOf(string) > -1
        );
        return checked ? newArrayString.sort((a, b) => (b.text > a.text) ? -1 : 0) : newArrayString;
    },

    sort: function(EO) {
        this.setState( {checkedStatus: EO.target.checked} );
    },

    keyTextChanged: function(EO) {
        this.setState( {keyText: EO.target.value} );
    },

    render: function () {

        let liData = this.filterItems(this.props.words, this.state.keyText, this.state.checkedStatus).map(value =>
            React.DOM.li({className: 'LiData', key: value.code}, value.text)
        );

        return React.DOM.div({className: 'Div'},
            React.DOM.span({className: 'Span'},
                React.DOM.input({className: 'Checkbox', type: 'checkbox', onClick: this.sort}),
                React.DOM.input({className: 'Input', type: 'text', onChange: this.keyTextChanged}),
            ),
            React.DOM.ul({className: 'Ul'}, liData),
        )

    }

});