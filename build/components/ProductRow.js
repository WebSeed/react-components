/** @jsx React.DOM */
define(function () {
    var ProductRow = React.createClass({displayName: 'ProductRow',
        render: function () {
            var name = this.props.product.stocked ?
                this.props.product.name :
                React.DOM.span( {style:{color: 'red'}}, this.props.product.name);
            return (
                React.DOM.tr(null, 
                    React.DOM.td(null, name),
                    React.DOM.td(null, this.props.product.price)
                )
            );
        }
    });
    return ProductRow;
});