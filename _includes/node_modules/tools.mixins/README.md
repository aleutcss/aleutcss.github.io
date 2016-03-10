# Mixins

The aleutcss `mixins` module contains a few framework mixins that are
**required** for using any of the rest of aleutcss.

Create a fully formed type style (sizing and vertical rhythm) by passing in a single value.

## Install using npm:

```ssh
$ npm install --save-dev aleut.tools.mixins

```

## Usage

Basic usage of the mixins in a SCSS-file:

```scss
.foo {
	@include font-size(12px);
}
```

This will generate a rem-based font-size with its pixel fallback, as well as a unitless line-height which will place the element on your baseline, e.g.:
```css
.foo {
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 2;
}
```

If you do not want css to generate you a line-height automatically, you simply pass in your own as a second paramater:

```scss
.foo {
	@include font-size(12px, 1.5);
}
```
This will yield:

```css
.foo {
	font-size: 12px;
	font-size: 0.75rem;
	line-height: 1.5;
}
```

This parameter can be any integer, ‘inherit’, or ‘normal’. If you don’t want a line-height at all, pass in a second paramater of ‘none’ or ‘false’:

```scss
.foo {
	@include font-size(12px, false);
}
```

This will yield:

```css
.foo {
	font-size: 12px;
	font-size: 0.75rem;
}
```
