
define('myModule', ['./lib/jquery'], function($) {
    // $ is the export of the jquery module.
    $('.webpack1').removeClass('hide').html('Hello Webpack with bundled jquery')

});

// XXX: NOT WORKING
// var React = require('../../../bower_components/react/react.js')
// var ReactDOM = require('../../../bower_components/react/react-dom.js')
var React = require('react')
var ReactDOM = require('react-dom')

var $ = require('./lib/jquery')

var HelloMessage = React.createClass({
  render: function() {
    return <p className='webpack2'>Hello {this.props.name}</p>;
  }
});

console.log(React)
console.log(ReactDOM)

ReactDOM.render(<HelloMessage name="Webpack React" />, $('#webpack').removeClass('hide').get(0));


