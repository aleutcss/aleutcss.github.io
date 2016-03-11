# Clearfix

The aleutcss `clearfix` module contains a useful mixin for adding clearfix to your classes.


## Install using npm:

```ssh
$ npm install --save-dev aleut.tools-clearfix

```

## Usage

Basic usage of the mixins in a SCSS-file:

```scss
.foo {
	@include clearfix;
}
```

This yields:

```css
.foo::after {
  content: "";
  display: table;
  clear: both;
}
```
