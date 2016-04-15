# miniquery
A minimalist JavaScript Library for simple DOM queries. It's a simple wrapper for querySelectorAll

## Query Elements
```js
var links = $('.container li');
```

Returns a NodeList when more than one result is found. Returns an Element when only one element is found.

### Querying inside of an element
```js
var list = $('#mylist'),
    links = $('li', list);
```

This is equivalent to `list.querySelectorAll('li')`.

## Browser Support
* IE 8+ *
* Everything else :)

Note that IE 8 supports only CSS 2.1 selectors plus attribute selectors (`[attr^=val]`, `[attr^=val]`, `[attr^=val]`) and general siblings selector `element1~element2`

# License
miniquery is license under the [WTFPL](http://www.wtfpl.net/about/ "Do What The Fuck You Want To Public License")
