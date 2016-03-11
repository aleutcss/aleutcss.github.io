# Aleut.css

## To get started with using Aleutcss
- Read our guide to [getting started](http://aleutcss.github.io/getting-started)
- Try our [starter package](https://github.com/aleutcss/starter) to get up and running really fast

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

*– A fork of inuit.css*

> According to Georgy A. Menovshchikov (Г. А. Меновщиков), the name Aleut comes from the Aleut word allíthuh, meaning "community."

[Inuit.css](https://github.com/inuitcss) introduced a [block-element-modifier (BEM)](https://en.bem.info/) and object-oriented framework for CSS. We love the work [Harry Roberts](http://csswizardry.com/) and his collaborators have done with Inuitcss. Acknowledging their work, we want to take it a step further and make it easier for people to get up and running. Aleut adopts the ITCSS architecture.

## Index

### Settings

- [settings.defaults](https://github.com/aleutcss/settings.defaults)
- [settings.responsive](https://github.com/aleutcss/settings.responsive)

### Tools
- [tools.mixins](https://github.com/aleutcss/tools.mixins)
- [tools.widths](https://github.com/aleutcss/tools.widths)
- [tools.responsive](https://github.com/aleutcss/tools.responsive)
- [tools.functions](https://github.com/aleutcss/tools.functions)
- [tools.clearfix](https://github.com/aleutcss/tools.clearfix)

### Generic
- [generic.shared](https://github.com/aleutcss/generic.shared)
- [generic.reset](https://github.com/aleutcss/generic.reset)
- [generic.normalize](https://github.com/aleutcss/generic.normalize)
- [generic.box-sizing](https://github.com/aleutcss/generic.box-sizing)

### Base
- [base.headings](https://github.com/aleutcss/base.headings)
- [base.page](https://github.com/aleutcss/base.page)
- [base.lists](https://github.com/aleutcss/base.lists)
- [base.images](https://github.com/aleutcss/base.images)


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

## Install

If you some reason need to download all the repositories, just run this script in the shell:

    curl -s "https://api.github.com/orgs/aleutcss/repos?per_page=200" | ruby -rubygems -e 'require "json"; JSON.load(STDIN.read).each { |repo| %x[git clone #{repo["ssh_url"]} ]}'
