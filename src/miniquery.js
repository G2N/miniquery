/*jslint browser: true*/
/*exported $*/
var $ = (function(document) {
    'use strict';

    var miniQuery = function(s) {
        // Enforce a string as default just in case
        var r = document.querySelectorAll(s || ''),
            len = r.length;

        // if only one node is found, return it
        // else return the NodeList
        return len === 1 ? r[0] : r;
    };

    return miniQuery;
})(document);