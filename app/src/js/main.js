/* Browserify  Require and Template demo
 */

// var swig = require('swig');
// var sw_tpl, sw_html
// sw_tpl = swig.compile(require('tpl/swig.tpl'));
// sw_html = sw_tpl({name:'browserify:swig template', stories: stories});
// elem4.innerHTML = sw_html

var $ = require('../../bower_components/jquery/dist/jquery')

if (window.Worker) {
    var myWorker = new Worker("js/worker2.js");
    myWorker.onmessage = function(e){
        if (typeof e.data == 'object') {
            $('.' + e.data.name + ' div').append('<span class="log">' + e.data.time + 'ms :' + e.data.num + ' times</span>')
        } else {
            console.log(e.data)
        }
    }
} else {
    require('./js/worker2')
}
