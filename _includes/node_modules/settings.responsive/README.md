# Responsive

This package define our initial breakpoint aliases and conditions.
It is required by all the responsive-packages in aleut.

```scss
$breakpoints: (
	"s"       "screen and (max-width: 44.9375em)",
	"m"       "screen and (min-width: 45em)",
	"l"       "screen and (min-width: 64em)",
	"retina"  "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)"
) !default;
```

If you want to change any of these variables read more on [Modifying aleut](#modifying).
This SASS-maps is looped trough in [utilities.width-responsive](https://github.com/aleutcss/utilities.widths-responsive) and [utilities.spacing-responsive](https://github.com/aleutcss/utilities.spacing-responsive).


Install using npm:

    $ npm install --save-dev aleut-responsive-settings
