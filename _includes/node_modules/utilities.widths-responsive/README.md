# Widths-responsive

The aleutcss `widths-responsive` module is an extension of the default [`widths`
module](https://github.com/aleutcss/trumps.widths).

## Install using npm:

```shell
    $ npm install --save-dev aleut-widths-responsive
```

## Usage

`widths-responsive` loops through the breakpoints defined in
`settings.responsive` to generate prefixed breakpoint-based classes. If you are
using aleutcss’ default breakpoints, you will be given classes like
`u-1/4@lap-and-up`.

```html
<div class="o-layout">
   <div class="o-layout__item u-1/1 u-1/3@lap-and-up">
		Foo
   </div><!--
--><div class="o-layout__item u-1/1 u-2/3@lap-and-up">
		Bar
	</div>
</div>
```

## Options
By default we will create wholes, halves, thirds, quarters, and fifths.
Override the `$widths-columns-responsive`-map if you want to change it:

```scss
$widths-columns-responsive: (
    1,
    2,
    3,
    4,
    5,
) !default;
```
