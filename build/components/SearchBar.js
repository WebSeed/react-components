/** @jsx React.DOM */
define(function () {
    var SearchBar = React.createClass({displayName: 'SearchBar',
        render: function () {
            return (
                React.DOM.form(null, 
                    React.DOM.input( {type:"text", placeholder:"Search..."} ),
                    React.DOM.p(null, 
                        React.DOM.input( {type:"checkbox"} ),
                        "Only show products in stock"
                    )
                )
            );
        }
    });
    return SearchBar;
});