---
title: Icon
extends: _layouts.documentation
section: content
---

# Icon

The `icon` component provides an easy way to insert inline  SVG files.

## Base Usage

Register a directory with your files in the config:

```php
'icons' => [
    'fa'  => storage_path('app/fontawesome'),
],
```

A string is used as a key that will allow an explicit reference to this set. The value is the path to the directory where the files are located.


After that, we can call the component in our blade templates:

```html
<x-icon path="fa.home" />
```

If you use one or two sets of icons that do not repeat, then it is not necessary to specify a prefix in the component:

```html
<x-icon path="home" />
```

You can also list some attributes that should be applied to your icon:

```html
<x-icon 
    path="home" 
    class="icon-big" 
    width="2em" 
    height="2em" />
```
