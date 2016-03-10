# List-inline

The List-inline object simply displays a list as one horizontal row.

## Install using npm:

```ssh
$ npm install --save-dev aleut.objects.list-inline

```

## Usage

Basic usage of the List-inline object uses the required classes:

```html
    <ul class="o-list-inline">
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
    </ul>
```

![Example of o-list-inline](https://raw.githubusercontent.com/aleutcss/aleutcss.github.io/master/public/img/o-list-inline.png)

The only valid children of the `.o-list-inline` node are `li`s.

## Options

Other, optional classes can supplement the required base classes:

* `.o-list-inline--delimited`: add a character to delimit list items.

For example:

```html
    <ul class="o-list-inline  o-list-inline--delimited">
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
    </ul>
```

![Example of o-list-inline options](https://raw.githubusercontent.com/aleutcss/aleutcss.github.io/master/public/img/o-list-inline-options.png)

If you wish to completely remove the whitespace between items, omit the closing
`</li>` tag:

```html
    <ul class="o-list-inline">
        <li>Foo
        <li>Bar
        <li>Baz
    </ul>
```

### Enable options
To enable the optional class set the variable to `true` before you import
the `_objects.list-inline.scss`-file.

```scss
$o-list-inline--delimited:   false !default;
```

### Modify options
To modify the character between items when you are using `.o-list-inline--delimited` you specify that before you import the `_objects.list-inline.scss`-file.

```scss
$o-list-inline-delimit-character:   ",\00A0" !default;
```
