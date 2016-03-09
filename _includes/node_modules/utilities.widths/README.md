# Widths

The aleutcss `widths` module is a simple file of helper classes to drop widths
onto elements such as grid systems.

## Install using npm:

```ssh
    $ npm install --save-dev aleut-widths
```

## Usage
The width-classes are generated in sizes ranging from `u-1/1`, to `u-1/5`.
 These classes are often used together with
the layout-object.

example of usage

```scss
<div class="o-layout">
	<div class="o-layout__item u-1/3">

	</div><!--
 --><div class="o-layout__item u-2/3">

    </div>
</div>

```

## Options
By default aleut create wholes, halves, thirds, quarters, and fifths.
You can override this by predefining the map `$widths-columns`.

```scss
$widths-columns: (
    1,
    2,
    3,
    4,
    5,
) !default;
```
