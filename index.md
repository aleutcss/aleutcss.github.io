---
layout: default
---

## What is Aleut CSS?
Aleut is a fork of inuitcss. It is a powerful, Sass-based, BEM, OOCSS framework designed with scalability and performance in mind. Inuit was left alone a little too long, so we made a more opinionated version with a lot of the ideas proposed by Harry Roberts, easier variable-names and fewer choices. If you are used to inuitcss, aleutcss should be more or less plug and play. If you wonder what this is and how you can use it, please read on.

## Structure
Aleutcss is based upon 35 different packages loaded in specific layers to remain in control of specificity and structuring your project. The order of partials within each layer is fairly open; it is the sections themselves that are important to get in the correct order.

[Image of all the packages with links to each of them in this document]
<img src="public/overview.png">

### Settings
Global variables, site-wide settings, config switches, etc.
(just code for SCSS)

<h4 class="c-toggle u-bg-settings" data-toggle-next> settings.default</h4>
<article class="c-article" data-hide>
	{% capture settingsDefault %}
		{% include /node_modules/settings.defaults/README.md %}
		{% endcapture %}
	{{ settingsDefault | markdownify }}
</article>

<h4 class="c-toggle u-bg-settings" data-toggle-next> settings.responsive</h4>
<article class="c-article" data-hide>
	{% capture settingsResponsive %}
		{% include /node_modules/settings.responsive/README.md %}
		{% endcapture %}
	{{ settingsResponsive | markdownify }}
</article>

### Tools
Site-wide mixins and functions.
(just code for SCSS)

### Generic
Low-specificity, far-reaching rulesets (e.g. resets).

### Base
Unclassed HTML elements (e.g. `a {}`, `blockquote {}`, `address {}`).

### Objects (o-prefix on the class-names)
Objects, abstractions, and design patterns (e.g. `.o-media {}`).
This is code that has no visual style and that you can move from project to project.

### Components (c-prefix on the class-names)
Discrete, complete chunks of UI (e.g. `.c-carousel {}`). This is the one layer that aleutcss doesn’t get involved with. The balance between adding objects and components to the same object is the key to understand Aleutcss.

### Utilities (u-prefix on the class-names)
High-specificity, very explicit selectors. Overrides and helper classes (e.g. `.u-hidden {}`) as well as grids.

##

### Modifying aleut
Since all the aleut-files are imported via npm you should not modify the files directly. You should rather edit the variable before you `@import` the specific file. Let's take f.ex. the button-object: If you want to change the default button works you edit it like this:
```css
$btn-background:      #BADA55;
$btn-radius:          3px;
$o-btn--full:         true;
@import "node-modules/aleut-buttons/objects.buttons";
```

It is also important to underline that some times it is more correct to create a new CSS-class as a modifier. See more in [components]("#components")

### Off by default
As you've seen aleut consist of a lot of different files. This is so that you just import the files you need. But we have another layer of reduced bloat: all variants are switched off by default. So if you just want buttons, you don’t get every different size and version of them unless you explicitly turn them on.

To turn features on, just set their switches to true (again, before you @import the file):
```css
$o-btn--full:    true;
@import "node-modules/aleut-buttons/objects.buttons";
```

### Extending aleut
Another good thing about the structure of aleut and it's packages is that you can add your own functionality in and around aleuts code. By doing this you can grow your codebase in any direction and create your own partials and objects as long as you follow the same structure.

To extend aleut, simply create a partial in the `<section>.<file>` format as the rest of the files, and `@import ` it wherever it is needed.

### Components
Aleut does its best to stay away from any cosmetic styling. You can therefore use it on any project without the same look-and-feel. If you do require a UI out of the box, then inuitcss is probably not the best tool for you.

Because aleut does no cosmetic styling, it is up to you to author the Components layer. A good example of this could be a main navigation of a site. First you mark it up as an `<ul>`, then you add the object `.o-list-inline` to make the menu horizontal, to style it to your liking you create a new file called `_components.site-nav.scss` and add the class `.c-site-nav` to the `.o-list-inline` and style it to your liking.

## Getting started
If it's your first time with aleut we recommend starting with our kitchensink-project (where everything is still off by default), where we import all the packages automatically.