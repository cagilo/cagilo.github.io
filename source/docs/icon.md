---
title: Icon
extends: _layouts.documentation
section: content
---

# Icon

This component is still in development.

## Base Usage

Register a directory with your files in the config:

```php
'icons' => [
    'fa'  => storage_path('app/fontawesome'),
],
```

When calling the directory method with the first argument, we pass the prefix to call our icons and the second directory where they are located.

After that, we can call the component in our blade templates:

```blade
<x-icon path="fa.home" />
```

If you use one or two sets of icons that do not repeat, then it is not necessary to specify a prefix in the component:

```blade
<x-icon path="home" />
```

You can also list some attributes that should be applied to your icon:

```blade
<x-icon 
    path="home" 
    class="icon-big" 
    width="2em" 
    height="2em" />
```
