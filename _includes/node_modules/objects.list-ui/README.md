# The list-ui object

The `list-ui` object creates blocky, list items with lines between them.

## Install using npm:

```ssh
    $ npm install --save-dev aleut.objects.list-ui

```

## Usage

Basic usage of the Block object uses the required classes:

```html
<ul class="o-list-ui">
	<li class="o-list-ui__item">Foo</li>
	<li class="o-list-ui__item">Bar</li>
	<li class="o-list-ui__item">Baz</li>
</ul>
```
![Example of o-list-ui](https://github.com/aleutcss/Aleut/tree/gh-pages/public/img/o-list-ui.png)

The only valid children of the `.o-list-ui` node are `.o-list-ui__item`.

## Options

Other, optional classes can supplement the required base classes:

* `.o-list-ui--[tiny|small|large|huge]`: alter the spacing between list-items

For example:

```html
<ul class="o-list-ui o-list-ui--small">
	<li class="o-list-ui__item">Foo</li>
	<li class="o-list-ui__item">Bar</li>
	<li class="o-list-ui__item">Baz</li>
</ul>
```

![Example of o-list-ui options](https://github.com/aleutcss/Aleut/tree/gh-pages/public/img/o-list-ui-options.png)

### Modify styling
To modify the base styling you can change these variables and set them to your preferred options before you import the `_objects.list-ui.scss`-file.

```scss
$o-list-ui-border-width:    1px !default;
$o-list-ui-border-style:    solid !default;
$o-list-ui-border-color:    #ccc !default;
```
