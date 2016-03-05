---
layout: default
---

## What is Aleut CSS?
Aleut is a fork of [inuitcss](https://github.com/inuitcss). It is a powerful framework designed with scalability and performance in mind. Inuit was left alone a little too long, so we made a more opinionated version with a lot of the ideas proposed by Harry Roberts, easier variable-names and fewer choices. If you are used to inuitcss, aleutcss should be more or less plug and play. If you wonder what this is and how you can use it, please read on.

## I got it, please get me started

You _could_ download all the packages from Github in zip-files, but that'd make it pretty unmaintainable. Aleut is distributed with [node package manager](https://npmjs.com), which makes installing it in a project easy as a breeze. If you're not familiar with the `npm` tool in the command line, do yourself a huge favor and [familiarize yourself with it](https://docs.npmjs.com/getting-started/what-is-npm). You'll thank us later.

Aleut is built with [SASS](http://sass-lang.com/guide). Chance is that you're already familiar with how SASS works. If not, Aleut is a great way to start learning. We'll cover how you import the packages into your stylesheet, and how to build the CSS-files for your web project.

### Aleut from scratch

We have made a starter package that includes all the essentials. It should be enough to get you going.

If you're beging a new project from skratch it's easiest to just download [the zip-file](https://github.com/mhauken/start/archive/master.zip) directly. Or you can do it on the command line:

	# Download or clone the starter package and save it as a project dependency
	$ wget https://github.com/aleutcss/starter/archive/master.zip
	# Unzip the zip file
	$ unzip master.zip
	# Navigate into the starter folder
	$ cd starter
	# Download all the project dependencies with npm
	$ npm i

### Getting Aleut into an existing project

If you already have a `package.json`-file in your project, just run this command in terminal to save the Aleut essentials as dependencies.

	$ npm install aleutcss/objects.tables aleutcss/objects.pack aleutcss/objects.media aleutcss/objects.list-ui aleutcss/objects.list-inline aleutcss/objects.buttons aleutcss/objects.box aleutcss/objects.block aleutcss/objects.tabs aleutcss/objects.list-bare aleutcss/objects.layout aleutcss/objects.flag aleutcss/utilities.spacing-responsive aleutcss/utilities.spacing aleutcss/utilities.clearfix aleutcss/utilities.paragraphs aleutcss/utilities.headings aleutcss/utilities.print aleutcss/utilities.widths aleutcss/utilities.widths-responsive aleutcss/tools.widths aleutcss/tools.responsive aleutcss/tools.mixins aleutcss/tools.function --save --no-progress

You will now have a bunch of new stuff in your npm-folder (usually called `node_modules`). That's Aleut ready to do its work. But first you'll have to import them into your sass-project with the sass `@import` function. We have prepared a `settings.scss` for you to [download into your scss-folder][settingscsss].

### I've got all the packages and settings.scss, now what?









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

[settingscsss]: settings.scss-downloadlink
