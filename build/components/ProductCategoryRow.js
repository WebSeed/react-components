/** @jsx React.DOM */
define(function () {
    var ProductCategoryRow = React.createClass({displayName: 'ProductCategoryRow',
        render: function () {
            return (React.DOM.tr(null, React.DOM.th( {colSpan:"2"}, this.props.category)));
        }
    });
    return ProductCategoryRow;
});