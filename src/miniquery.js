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
    
    function applyToChildren(nodeList, method, value) {
        nodeList.forEach(function(item) {
            Node.prototype[method].call(item, value);
        });
    }
    
    /********************************
     * Class manipulation API
     *******************************/
    
    // addClass
    Node.prototype.addClass = function(name) {
        this.classList.add(name);
    };
    NodeList.prototype.addClass = function(name) {
        applyToChildren(this, 'addClass', name);
    };
    
    // removeClass
    Node.prototype.removeClass = function(name) {
        this.classList.remove(name);
    };
    NodeList.prototype.removeClass = function(name) {
        applyToChildren(this, 'removeClass', name);
    };
    
    // toggleClass
    Node.prototype.toggleClass = function(name) {
        this.classList.toggle(name);
    };
    NodeList.prototype.toggleClass = function(name) {
        applyToChildren(this, 'toggleClass', name);
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
        if(value === undefined) {
            return this.getAttribute(name);
        }
        this.setAttribute(name, value);
    };
    NodeList.prototype.attr = function(name, value) {
        var arr = [];
        if(value === undefined) {
            this.forEach(function(item) {
                arr.push(item.attr(name));
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
        applyToChildren(this, 'removeAttr', name);
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
    
    /********************************
     * HTML insertion API
     *******************************/
    
    // html
    Node.prototype.html = function(value) {
        this.innerHTML = value;
    };
    NodeList.prototype.html = function(value) {
        applyToChildren(this, 'html', value);
    };
    
    // prepend
    Node.prototype.prepend = function(value) {
        // Can't use insertAdjacentHTML because it throws an error in IE 9- on some table elements
        // http://caniuse.com/#feat=insertadjacenthtml
        this.innerHTML = value + this.innerHTML;
    };
    NodeList.prototype.prepend = function(value) {
        applyToChildren(this, 'prepend', value);
    };
    
    // append
    Node.prototype.append = function(value) {
        // Can't use insertAdjacentHTML because it throws an error in IE 9- on some table elements
        // http://caniuse.com/#feat=insertadjacenthtml
        this.innerHTML = this.innerHTML + value;
    };
    NodeList.prototype.append = function(value) {
        applyToChildren(this, 'append', value);
    };
    
    // before
    Node.prototype.before = function(value) {
        this.outerHTML = value + this.outerHTML;
    };
    NodeList.prototype.before = function(value) {
        applyToChildren(this, 'before', value);
    };
    
    // after
    Node.prototype.after = function(value) {
        this.outerHTML = this.outerHTML + value;
    };
    NodeList.prototype.after = function(value) {
        applyToChildren(this, 'after', value);
    };

    return miniQuery;
})(document);
