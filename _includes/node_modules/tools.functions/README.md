# Functions

The aleutcss `functions` module—like `mixins`—contains a few framework functions
that are **required** for using any of the rest of aleutcss.

These 4 functions basically multiplies or divide a given number (mostly the base-spacing)
by 4 or 2.


## Install using npm:

```ssh
    $ npm install --save-dev aleut.tools.functions

```

## Usage

Basic usage of the functions in a SCSS-file:

```scss
.classname{
	margin-top: quarter(24px);
	margin-right: halve(24px);
	margin-bottom: double(24px);
	margin-left: quadruple(24px);
}
```
