/** @jsx React.DOM */
define(
    [
        'components/ProductCategoryRow',
        'components/ProductRow'
    ],
    function (ProductCategoryRow, ProductRow) {
        var ProductTable = React.createClass({displayName: 'ProductTable',
            render: function () {
                var rows = [];
                var lastCategory = null;
                this.props.products.forEach(function (product) {
                    if (product.category !== lastCategory) {
                        rows.push(ProductCategoryRow( {category:product.category, key:product.category} ));
                    }
                    rows.push(ProductRow( {product:product, key:product.name} ));
                    lastCategory = product.category;
                });
                return (
                    React.DOM.table(null, 
                        React.DOM.thead(null, 
                            React.DOM.tr(null, 
                                React.DOM.th(null, "Name"),
                                React.DOM.th(null, "Price")
                            )
                        ),
                        React.DOM.tbody(null, rows)
                    )
                );
            }
        });
        return ProductTable;
    }
);