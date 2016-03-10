# Pack

aleutcss’ Pack object simply causes any number of elements pack up horizontally to automatically fill an equal, fluid width of their parent.


## Install using npm:

```ssh
    $ npm install --save-dev aleut.objects.pack

```

## Usage

Basic usage of the Pack object uses the required classes:

```html
<div class="o-pack">
    <div class="o-pack__item">
        Foo
    </div>
    <div class="o-pack__item">
        Bar
    </div>
    <div class="o-pack__item">
        Baz
    </div>
</div>
```

![Example of o-pack](https://raw.githubusercontent.com/aleutcss/aleutcss.github.io/master/public/img/o-pack.png)

The only valid children of the `.o-pack` node are `.o-pack__item`s.

## Options

Other, optional classes can supplement the required base classes:

* `.o-pack--auto`: cause packed items to have an automatically determined,
  non-equal width.
* `.o-pack--[tiny|small|large|huge]`: alter the gutter between pack items.
* `.o-pack--rev`: reverse the rendered horizontal order of packed items.
* `.o-pack--[middle|bottom]`: align packed items to the middles or bottoms of each
  other.

For example:

```html
    <div class="o-pack  o-pack--small  o-pack--rev">
        <div class="o-pack__item">
            Foo
        </div>
        <div class="o-pack__item">
            Bar
        </div>
        <div class="o-pack__item">
            Baz
        </div>
    </div>
```

![Example of o-pack options](https://raw.githubusercontent.com/aleutcss/aleutcss.github.io/master/public/img/o-pack-options.png)

## Dependencies

aleutcss’ Pack object depends on two other aleutcss modules:

* [settings.defaults](https://github.com/aleutcss/settings.defaults)
* [tools.functions](https://github.com/aleutcss/tools.functions)

If you install the Pack object using NPM, you will get these dependencies at
the same time. If not using NPM, please be sure to install and `@import` these
dependencies in the relevant way.
