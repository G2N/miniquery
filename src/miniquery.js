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
    
    /********************************
     * Class manipulation API
     *******************************/
    
    // addClass
    Node.prototype.addClass = function(name) {
        this.classList.add(name);
    };
    NodeList.prototype.addClass = function(name) {
        this.forEach(function(item) {
            item.addClass(name);
        });
    };
    
    // removeClass
    Node.prototype.removeClass = function(name) {
        this.classList.remove(name);
    };
    NodeList.prototype.removeClass = function(name) {
        this.forEach(function(item) {
            item.removeClass(name);
        });
    };
    
    // toggleClass
    Node.prototype.toggleClass = function(name) {
        this.classList.toggle(name);
    };
    NodeList.prototype.toggleClass = function(name) {
        this.forEach(function(item) {
            item.toggleClass(name);
        });
    };
    
    // hasClass
    Node.prototype.hasClass = function(name) {
        return this.classList.contains(name);
    };
    
    
    /********************************
     * Attribute manipulation API
     *******************************/
    
    // get / set attribute
    Node.prototype.attr = function(name, value) {
        if(!value) {
            return this.getAttribute(name);
        }
        this.setAttribute(name, value);
    };
    NodeList.prototype.attr = function(name, value) {
        var arr = [];
        if(!value) {
            this.forEach(function(item) {
                arr.push(item.attr(name, value));
            });
            return arr;
        }
        this.forEach(function(item) {
            item.attr(name, value);
        });
    };
    
    // remove attribute
    Node.prototype.removeAttr = function(name) {
        this.removeAttribute(name);
    };
    NodeList.prototype.removeAttr = function(name) {
        this.forEach(function(item) {
            item.removeAttr(name);
        });
    };
    
    // get / set property
    Node.prototype.prop = function(name, value) {
        if(value === undefined) {
            return this[name];
        }
        this[name] = value;
    };
    NodeList.prototype.prop = function(name, value) {
        var arr = [];
        if(value === undefined) {
            this.forEach(function(item) {
                arr.push(item.prop(name));
            });
            return arr;
        }
        this.forEach(function(item) {
            item.prop(name, value);
        });
    };
    

    return miniQuery;
})(document);
