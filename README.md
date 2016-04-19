# miniquery
A minimalist JavaScript Library for simple DOM queries. It's a simple wrapper for querySelectorAll

## Query Elements
```js
var links = $('.container li');
```

Returns a `NodeList` when more than one result is found. Returns a `Node` when only one element is found.

### Querying inside of an element
```js
var list = $('#mylist'),
    items = $('li', list);
```

This is equivalent to `list.querySelectorAll('li')`. (Because `$('#mylist')` returns a single element).

### Class Manipulation
Class manipulation methods work both on `Node` and `NodeList` and take a single class as a parameter.
```js
var items = $('li');

items.addClass('someclass');
items.removeClass('someclass');
items.toggleClass('someclass');
```

The `addClass` method takes a single class as a parameter and returns a boolean depending on wether or not the Node has the class.
```js
$('#someid').hasClass('someclass');
```

**Warning** the `addClass` method does not work on `NodeList` yet as I'm not sure what it should return in this particular case.

### HTML insertion
```js
$('li').html('some text');
$('li').prepend('some text'); // After the start of each Node
$('li').append('some text'); // Before the end of each Node
$('li').before('some text'); // Before the start of each Node
$('li').after('some text'); // After the end of each Node
```
```html
<!-- before -->
<p>
<!-- prepend -->
    foo
<!-- append -->
</p>
<!-- after -->
```

### Attribute manipulation
When used on `NodeList`, get methods return an array of all the values of each results' attribute (they return a string when used on a `Node`).
```js
items.attr('href'); // returns an array comprised of all [href] attributes
items.attr('rel', 'nofollow');
items.removeAttr('rel');
```
Manipulating properties like `checked` or `selected` should not be done with `$(input).attr` instead, you can use the `$(input).prop` method.
```js
items.prop('checked'); // returns an array comprised of all checked properties
items.prop(checked, true);
```

## Browser Support
I won't directly include any polyfill in this library, feel free to use the ones listed below. So here's the browser support list with aboslutely no polyfill.
* IE 10+ *
* Edge 12+
* FF 3.6+
* Chrome 8+
* Safari 5.1+
* Opera 11.5+
* Android 3+

Note that IE 8 supports only CSS 2.1 selectors plus attribute selectors (`[attr^=val]`, `[attr^=val]`, `[attr^=val]`) and general siblings selector `element1~element2`.

If you need support for older browsers, you can use the [classList polyfill](https://github.com/eligrey/classList.js) (see the full table on [Can I Use](http://caniuse.com/#feat=classlist)).

# License
miniquery is license under the [WTFPL](http://www.wtfpl.net/about/ "Do What The Fuck You Want To Public License")
