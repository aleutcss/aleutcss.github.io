# Spacing

The aleutcss `spacing` module is a small collection of helper classes for
spacings like margin and padding.

## Install using npm:

```ssh
    $ npm install --save-dev aleut.utilities.spacing

```

## Usage
The conventions used in the classes in the spacing module are as follows:
    `.u-(m|p)(t|r|b|l|h|v)(-negative)(-tiny|-small|-large|-huge|-none) {}`

E.g.:

* `.u-p` will give you a padding around the whole object (24px as default)
* `.u-mt` will give you a margin-top on the object (24px as default)
* `.u-mv` will give you a vertical margin (top and bottom) (24px as default).
* `.u-ph` will give you a horizontal padding (left and right) (24px as default).
* `.u-mt-negative-large` will give you a large (48px as default) negative margin (`m`) top (`t`).
* `.u-p-tiny` will give you a tiny (6px as default) padding (`p`).
* `.u-mh-huge` will give you a huge (96px as default) horizontal (`h`) margin (`m`).
* `.u-mb-none` will give you no margin (`m`) bottom (`b`).
* `.u-pl-small` will give you a small (12px as default) padding (`p`) left (`l`).

Knowing these conventions means you can compose a huge array of spacing helpers.

```html
<div class="o-flag u-mt">
    <div class="o-flag__img">
		<img src="image-here.png">
	</div>
	<div class="o-flag__body">
		Some text-like content here.
	</div>
</div>
```

## Enable options
To enable the optional classes set the variables to `true` before you import
the `_utilities.spacing.scss`-file.

```scss
$u-m:                 false !default;
$u-m-tiny:            false !default;
$u-m-small:           false !default;
$u-m-large:           false !default;
$u-m-huge:            false !default;

$u-m-negative:        false !default;
$u-m-negative-tiny:   false !default;
$u-m-negative-small:  false !default;
$u-m-negative-large:  false !default;
$u-m-negative-huge:   false !default;

$u-m-none:            false !default;

$u-p:                 false !default;
$u-p-tiny:            false !default;
$u-p-small:           false !default;
$u-p-large:           false !default;
$u-p-huge:            false !default;

$u-p-none:            false !default;
```
