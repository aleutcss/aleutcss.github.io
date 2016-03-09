# The tables objects

aleutcss has some useful helpers for common table patterns.

## Install using npm:

```ssh
    $ npm install --save-dev aleut-tables
```

## Usage

Basic usage of the table object uses the required class:

```html
<table class="o-table">
<thead>
	<tr>
		<th>Foo</th>
		<th>Bar</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Foo</td>
		<td>Bar</td>
	</tr>
</table>
```

## Options

Other, optional classes can supplement the required base classes:

* `.o-table--fixed`: Force tables into having equal-width columns.
* `.o-table--tiny`: Tables with very tightly packed cells.
* `.o-table--small`: Lightly packed cells.
* `.o-table--flush`: Tables without padding
* `.o-table--cells`: Add borders around a `table`’s cells.
* `.o-table--rows`: Add borders only to `table`’s rows.
* `.o-table--columns`: Add borders only to `table`’s columns.


For example:

```html
<table class="o-table o-table--small o-table--rows">
<thead>
	<tr>
		<th>Foo</th>
		<th>Bar</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Foo</td>
		<td>Bar</td>
	</tr>
</table>
```

### Enable options
To enable the optional classes set the variables to `true` before you import
the `_objects.tables.scss`-file.

```scss
$o-table--fixed:     false !default;
$o-table--tiny:      false !default;
$o-table--small:     false !default;
$o-table--flush:     false !default;
$o-table--cells:     false !default;
$o-table--rows:      false !default;
$o-table--columns:   false !default;
```

### Modify styling
To modify the base styling you can change these variables and set them to your preferred options before you import the `_objects.tables.scss`-file.

```scss
$o-table-border-width:      1px !default;
$o-table-border-style:      solid !default;
$o-table-border-color:      #ccc !default;
```

If you need more table-alternatives (as you probably do), it's recommended to make your own component (in its own file) that you style and add to the objects.
For example:

```html
<table class="o-table o-table--tiny c-table--campaign">
<thead>
	<tr>
		<th>Foo</th>
		<th>Bar</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>Foo</td>
		<td>Bar</td>
	</tr>
</table>
```
