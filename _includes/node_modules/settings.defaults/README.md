# Defaults

This module contains a few variables and settings that are
**required** for using any of the rest of the framework.
These are:

```scss

	$font-size:	    	16px;
	$line-height:    	24px;
	$text-color:		#333;
	$background-color:	#fff;

	$spacing:       	24px;
	$spacing--tiny		6px;
	$spacing--small:	12px;
	$spacing--large:	48px;
	$spacing--huge		96px;
```

If you want to change any of these variables read more on [Modifying aleut]("#modifying").
Be extra aware of the `$spacing`-variables. The default spacing in aleut is 24px, and each time you meet a class-name called `--tiny` (`6px`),`--small` (`12px`), `--large` (`48px`) or `--huge` (`96px`) they refer to these values.


## Install using npm:

    $ npm install --save-dev aleut.settings.defaults

