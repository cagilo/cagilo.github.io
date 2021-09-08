---
title: Getting Started
extends: _layouts.documentation
section: content
---

# Getting Started

**Cagilo** is distributed through the [Composer](https://getcomposer.org/) package manager and automatically registers components in your application. To install, you need to run the following command in your Laravel project:

```bash
composer require cagilo/cagilo
```

## Configuration

Most of the configuration is done through the `cagilo.php` config file. Even though by default this isn't needed, if you'd like to adjust anything to this config file, you can publish it with the following command:

```bash
php artisan vendor:publish --tag=cagilo
```

### Components

Even though all components come enabled out-of-the-box, you may want to load only the components you need in your app for performance reasons. To do so, first [publish the config file](/docs/{{version}}/installation#configuration), then remove the components you don't need from the `components` settings.

You can also choose to use different names for components. Simply adjust the name for a component and reference it with a new name. For example, let's rename the `alert` component to `notice`:

```php
<?php

return [
    'components' => [
        ...
        'notice' => Components\Alert::class,
        ...
    ],
];
```

Now, you can reference it in your Blade views as:

```html
<x-notice type="success" />
```

