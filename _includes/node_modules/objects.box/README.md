# Box

The Box object simply boxes off content.

## Install using npm:

```ssh
    $ npm install --save-dev aleut.objects.box

```

## Usage

Basic usage of the Box object uses the required classes:

```html
<div class="o-box">
    Foo Bar Baz
</div>
```

![Example of o-box](https://github.com/aleutcss/Aleut/tree/gh-pages/public/img/o-box.png)

## Options

Other, optional classes can supplement the required base classes:

* `.o-box--flush`: remove all padding from boxes.
* `.o-box--[tiny|small|large|huge]`: alter the padding on boxes.

For example:

```html
<div class="o-box  o-box--large">
    Foo Bar Baz
</div>
```

![Example of o-box options](https://github.com/aleutcss/Aleut/tree/gh-pages/public/img/o-box-options.png)

### Enable options
To enable the optional classes set the variables to `true` before you import
the `_objects.box.scss`-file.

```scss
$o-box--flush:   false;
$o-box--tiny:    false;
$o-box--small:   false;
$o-box--large:   false;
$o-box--huge:    false;
```

## Dependencies

aleutcss’ Box object depends on three other aleutcss modules:

* [settings.defaults](https://github.com/aleutcss/settings.defaults)
* [tools.functions](https://github.com/aleutcss/tools.functions)
* [trumps.clearfix](https://github.com/aleutcss/trumps.clearfix)

If you install the Box object using NPM, you will get these dependencies at
the same time. If not using NPM, please be sure to install and `@import` these
dependencies in the relevant way.
