# Responsive

A simple mixin to quickly generate whole media queries from the aliases and
conditions defined in `_settings.responsive.scss` or your own override of the `$breakpoints`-sass-map.

## Install using npm:

```ssh
	$ npm install --save-dev aleut.tools.responsive

```


## Usage

Basic usage of the functions in a SCSS-file:

```scss
.foo {
	color: green;

	@include media-query(s) {
		color: red;
	}

}
```
