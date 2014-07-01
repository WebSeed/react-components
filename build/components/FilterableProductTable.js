/** @jsx React.DOM */
define(
    [
        'components/SearchBar',
        'components/ProductTable'
    ],
    function (SearchBar, ProductTable) {
        var FilterableProductTable = React.createClass({displayName: 'FilterableProductTable',
            render: function () {
                return (
                    React.DOM.div(null, 
                        SearchBar(null ),
                        ProductTable( {products:this.props.products} )
                    )
                )
            }
        });
        return FilterableProductTable;
    }
);