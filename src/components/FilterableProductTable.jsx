/** @jsx React.DOM */
define(
    [
        'components/SearchBar',
        'components/ProductTable'
    ],
    function (SearchBar, ProductTable) {
        var FilterableProductTable = React.createClass({
            render: function () {
                return (
                    <div>
                        <SearchBar />
                        <ProductTable products={this.props.products} />
                    </div>
                )
            }
        });
        return FilterableProductTable;
    }
);