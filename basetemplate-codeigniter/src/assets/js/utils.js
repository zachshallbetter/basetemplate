/* jshint devel: true, jquery: true */
/* global */
var UTIL = UTIL || {};
UTIL = function(){

    // =================================================
    // = public functions                              =
    // =================================================
    var self = {

       /**
         * Returns a random number between min and max
         */
        getRandomArbitary : function(min, max) {
            return Math.random() * (max - min) + min;
        },

        /**
         * Returns a random integer between min and max
         * Using Math.round() will give you a non-uniform distribution!
         */
        getRandomInt : function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };

    return self;
    // ================================================
    // = Private functions (function _private () {} ) =
    // ================================================

}();