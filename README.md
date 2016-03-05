# Aleut.css

## To get up and running on the documentation
* `gem install jekyll`
* `jekyll serve`
* All the documentation should be pulled from each seperate repository and be included in this Jekyll-site like this:
```
<h4 class="c-toggle u-bg-settings" data-toggle-next> settings.default</h4>
<article class="c-article" data-hide>
	{% capture settingsDefault %}
		{% include /node_modules/settings.defaults/README.md %}
		{% endcapture %}
	{{ settingsDefault | markdownify }}
</article>
```

<p data-height="268" data-theme-id="0" data-slug-hash="NGqJad" data-default-tab="result" data-user="mhauken" class="codepen">See the Pen <a href="http://codepen.io/mhauken/pen/NGqJad/">objects.list-bare</a> by mhauken (<a href="http://codepen.io/mhauken">@mhauken</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

*– A fork of inuit.css*

> According to Georgy A. Menovshchikov (Г. А. Меновщиков), the name Aleut comes from the Aleut word allíthuh, meaning "community."

[Inuit.css](https://github.com/inuitcss) introduced a [block-element-modifier (BEM)](https://en.bem.info/) and object-oriented framework for CSS. We love the work [Harry Roberts](http://csswizardry.com/) and his collaborators has done with Inuit. Acknowledging their work, we want to take it a step further and introduce it to the front-end community. Aleut adopts the ITCSS architecture and should be fully compatible with Inuit.css objects and components.

## Index

- [settings.defaults](https://github.com/aleutcss/settings.defaults)

### Objects

- [objects.tables](https://github.com/aleutcss/objects.tables)
- [objects.pack](https://github.com/aleutcss/objects.pack)
- [objects.media](https://github.com/aleutcss/objects.media)
- [objects.list-ui](https://github.com/aleutcss/objects.list-ui)
- [objects.list-inline](https://github.com/aleutcss/objects.list-inline)
- [objects.buttons](https://github.com/aleutcss/objects.buttons)
- [objects.box](https://github.com/aleutcss/objects.box)
- [objects.block](https://github.com/aleutcss/objects.block)
- [objects.tabs](https://github.com/aleutcss/objects.tabs)
- [objects.list-bare](https://github.com/aleutcss/objects.list-bare)
- [objects.layout](https://github.com/aleutcss/objects.layout)
- [objects.flag](https://github.com/aleutcss/objects.flag)

### Utilities

- [utilities.spacing-responsive](https://github.com/aleutcss/utilities.spacing-responsive)
- [utilities.spacing](https://github.com/aleutcss/utilities.spacing)
- [utilities.clearfix](https://github.com/aleutcss/utilities.clearfix)
- [utilities.paragraphs](https://github.com/aleutcss/utilities.paragraphs)
- [utilities.headings](https://github.com/aleutcss/utilities.headings)
- [utilities.print](https://github.com/aleutcss/utilities.print)
- [utilities.widths](https://github.com/aleutcss/utilities.widths)
- [utilities.widths-responsive](https://github.com/aleutcss/utilities.widths-responsive)

### Tools

- [tools.widths](https://github.com/aleutcss/tools.widths)
- [tools.responsive](https://github.com/aleutcss/tools.responsive)
- [tools.mixins](https://github.com/aleutcss/tools.mixins)
- [tools.functions](https://github.com/aleutcss/tools.functions)

## Install

If you some reason need to download all the repositories, just run this script in the shell:

    curl -s "https://api.github.com/orgs/aleutcss/repos?per_page=200" | ruby -rubygems -e 'require "json"; JSON.load(STDIN.read).each { |repo| %x[git clone #{repo["ssh_url"]} ]}'

## Getting started

## A Guide for the Perplexed

## Best practices
