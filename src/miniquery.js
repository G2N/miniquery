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
    
    /**
     * addClass Methods
     */
    Node.prototype.addClass = function(name) {
        this.classList.add(name);
    };
    NodeList.prototype.addClass = function(name) {
        this.forEach(function(item) {
            item.addClass(name);
        });
    };
    
    /**
     * removeClass Methods
     */
    Node.prototype.removeClass = function(name) {
        this.classList.remove(name);
    };
    NodeList.prototype.removeClass = function(name) {
        this.forEach(function(item) {
            item.removeClass(name);
        });
    };
    
    /**
     * toggleClass Methods
     */
    Node.prototype.toggleClass = function(name) {
        this.classList.toggle(name);
    };
    NodeList.prototype.toggleClass = function(name) {
        this.forEach(function(item) {
            item.toggleClass(name);
        });
    };
    
    Node.prototype.hasClass = function(name) {
        return this.classList.contains(name);
    };
    

    return miniQuery;
})(document);
