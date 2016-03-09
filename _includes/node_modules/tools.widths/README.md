# Widths

aleutcss’ widths tooling allows you to generate a suite of utility classes for
sizing pieces of UI responsively.

## Install using npm:

```ssh
	$ npm install --save-dev aleut-tools-widths
```

## Usage

Basic usage of the functions in a SCSS-file:

```scss
@include inuit-widths(3);
```

This will generate a series of classes in the format `.u-1/3` to be used for
sizing:
```css
.u-1\/3 {
  width: 33.33333333% !important;
}

.u-2\/3 {
  width: 66.66666667% !important;
}

```

Pass in the columns we want the widths to have, and an optional suffix for responsive widths. E.g. to create thirds and quarters for a small breakpoint:

```scss
@include widths(3 4, -sm);
```

This will yield:

```css
.u-1\/3-sm {
	width: 33.33333333% !important;
}

.u-2\/3-sm {
	width: 66.66666667% !important;
}

.u-1\/4-sm {
	width: 25% !important;
}

.u-2\/4-sm {
	width: 50% !important;
}

.u-3\/4-sm {
	width: 75% !important;
}
```
