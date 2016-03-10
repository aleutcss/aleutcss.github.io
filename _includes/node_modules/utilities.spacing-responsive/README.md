# Spacing-responsive

The aleutcss `spacing-responsive` extends `utilities.spacing` by adding breakpoint-based classes for
nudging margins and paddings. It uses `utilities.spacing-responsive` for generating the breakpoints.


## Install using npm:

```ssh
    $ npm install --save-dev aleut.utilities.spacing-responsive

```


## Usage
The conventions used in the classes in the spacing module are as follows:
    `.u-(m|p)(t|r|b|l|h|v)(-negative)(-tiny|-small|-large|-huge|-none)(@breakpoint) {}`

E.g.:

* `.u-p@m` will give you a padding around the whole object (24px as default) on the @m-size
* `.u-mh-huge@l` will give you a huge (96px as default) horizontal (`h`) margin (`m`) on the @l-size.
* `.u-mb-none@s` will give you no margin (`m`) bottom (`b`) at the @s-size.

## Enable options
To enable the optional classes set the variables to `true` before you import
the `_utilities.spacing-responsive.scss`-file.

```scss
$u-m-responsive:                  false !default;
$u-m-responsive-tiny:             false !default;
$u-m-responsive-small:            false !default;
$u-m-responsive-large:            false !default;
$u-m-responsive-huge:             false !default;

$u-m-responsive-negative:         false !default;
$u-m-responsive-negative-tiny:    false !default;
$u-m-responsive-negative-small:   false !default;
$u-m-responsive-negative-large:   false !default;
$u-m-responsive-negative-huge:    false !default;

$u-m-responsive-none:             false !default;

$u-p-responsive:                  false !default;
$u-p-responsive-tiny:             false !default;
$u-p-responsive-small:            false !default;
$u-p-responsive-large:            false !default;
$u-p-responsive-huge:             false !default;

$u-p-responsive-none:             false !default;
```
