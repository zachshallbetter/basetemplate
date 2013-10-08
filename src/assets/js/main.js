/* jshint devel: true, jquery: true */
/* global */
/*! main class
 * @depends vendor/jquery.1.9.1.min.js
 */

var NAMESPACE = NAMESPACE || {};
NAMESPACE.Main = function(){
    // =================================================
    // = Private variables (example: var _foo = bar; ) =
    // =================================================

    // =================================================
    // = public functions                              =
    // =================================================
    var self = {

        init: function()
        {
            console.log("And here... we... go!!");
        }
    };

    return self;
    // ================================================
    // = Private functions (function _private () {} ) =
    // ================================================

}();

$(document).ready(NAMESPACE.Main.init);