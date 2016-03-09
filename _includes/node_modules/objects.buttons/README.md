# The button object

The button object is a simple, robust, extensible baseline for building
entire suites of buttons onto.

## Install using npm:

```ssh
    $ npm install --save-dev aleut-buttons
```

## Usage

Basic usage of the button object uses the required class:

```html
<a href="linkto.html" class="o-btn">Button</a>
```

## Options

Other, optional classes can supplement the required base classes:

* `.o-btn--[small|large]`: Alter the spacing around the button
* `.o-btn--full`: Makes the button full-width
* `.o-btn--pill`: Makes the button pill shaped (i.e. rounded)

For example:

```html
<a href="linkto.html" class="o-btn o-btn--full">Button with full width</a>
<a href="linkto.html" class="o-btn o-btn--small o-btn--pill">Small pill-button</a>
```

### Enable options
To enable the optional classes set the variables to `true` before you import
the `_objects.buttons.scss`-file.

```scss
$o-btn--small:   false !default;
$o-btn--large:   false !default;
$o-btn--full:    false !default;
$o-btn--pill:    false !default;
```

### Modify styling
To modify the base styling you can change these variables and set them to your preferred options before you import the `_objects.buttons.scss`-file.

```scss
$o-btn-background:      transparent !default;
$o-btn-color:           #4a8ec2 !default;
$o-btn-border-width:    1px !default;
$o-btn-border-style:    solid !default;
$o-btn-border-color:    $o-btn-background !default;
$o-btn-radius:          0 !default;
```

If you need more button-alternatives (as you probably do), it's recommended to make your own component (in its own file) that you style and add to the objects.
For example:

```html
<a href="linkto.html" class="o-btn o-btn--small c-btn--primary">Button with full width</a>
```
