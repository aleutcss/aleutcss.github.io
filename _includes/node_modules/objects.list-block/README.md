# The list-block object

The `list-block` object simply creates blocky lists from `ul`s or `ol`s.

## Install using npm:

```ssh
    $ npm install --save-dev aleut.objects.list-block

```

## Usage

Basic usage of the list-block object uses the required classes:

```html
<ul class="o-list-block">
	<li class="o-list-block__item">List-item</li>
	<li class="o-list-block__item">List-item</li>
</ul>
```
![Example of o-list-block](https://raw.githubusercontent.com/aleutcss/aleutcss.github.io/master/public/img/o-list-block.png)

The only valid children of the `.o-list-block` node are `.o-list-block__item`.

## Options

Other, optional classes can supplement the required base classes:

* `.o-list-block--[tiny|small|large|huge]`: alter the spacing between the list-elements

For example:

```html
<ul class="o-list-block o-list-block--small">
	<li class="o-list-block__item">List-item</li>
	<li class="o-list-block__item">List-item</li>
</ul>
```

![Example of o-list-block options](https://raw.githubusercontent.com/aleutcss/aleutcss.github.io/master/public/img/o-list-block-options.png)

### Enable options
To enable the optional classes set the variables to `true` before you import
the `_objects.list-block.scss`-file.

```scss
$o-list-block--tiny:     false !default;
$o-list-block--small:    false !default;
$o-list-block--large:    false !default;
$o-list-block--huge:     false !default;
```
