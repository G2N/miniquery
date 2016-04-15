/*jslint browser: true*/
/*exported $*/
var $ = (function(document) {
    'use strict';

    var miniQuery = function(selector, el) {
        // Enforce the second argument to be a single HTMLElement
        if(el && !(el instanceof HTMLElement)) {
            return [];
        }
        var parent = el || document,
            // Enforce a string as default just in case
            r = parent.querySelectorAll(selector || ''),
            len = r.length;

        // if only one node is found, return it
        // else return the NodeList
        return len === 1 ? r[0] : r;
    };

    return miniQuery;
})(document);
