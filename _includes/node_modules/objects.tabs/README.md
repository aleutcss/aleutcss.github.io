# The tabs object

The `tabs` object is a simple abstraction for force a series of elements
(usually a list) into an equal-width, tab-like format.

## Install using npm:

```ssh
    $ npm install --save-dev aleut.objects.tabs

```

## Usage

Basic usage of the tabs object uses the required class:

```html
<ul class="o-tabs">
	<li class="o-tabs__item"><a href="#" class="o-tabs__link">Foo</a></li>
	<li class="o-tabs__item"><a href="#" class="o-tabs__link">Bar</a></li>
	<li class="o-tabs__item"><a href="#" class="o-tabs__link">Baz</a></li>
</ul>

```

![Example of o-tabs](https://github.com/aleutcss/Aleut/tree/gh-pages/public/img/o-tabs.png)

The only valid children of the `.o-tabs` node are `.o-tabs__item`s.


## Modify style
If you need to style the tabs more (as you probably do), it's recommended to make your own component (in its own file) that you style and add to the objects.
For example:

```html
<ul class="o-tabs c-tabs--primary">
	<li class="o-tabs__item"><a href="#" class="o-tabs__link">Foo</a></li>
	<li class="o-tabs__item"><a href="#" class="o-tabs__link">Bar</a></li>
	<li class="o-tabs__item"><a href="#" class="o-tabs__link">Baz</a></li>
</ul>
```
