let TableName = React.createClass({

    displayName: 'TableName',

    propTypes: {
        tableName: React.PropTypes.string,
    },

    getDefaultProps: function() {
        return {tableName: 'Таблица 1'}
    },

    render: function() {
        return React.DOM.span( {className: 'TableName'}, this.props.tableName )
    }

});