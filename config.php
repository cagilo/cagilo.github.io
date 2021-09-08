<?php

use Illuminate\Support\Str;

return [
    'baseUrl' => '',
    'production' => false,
    'siteName' => 'Cagilo Blade components',
    'siteDescription' => 'A set of open-source Blade components for the Laravel Framework',

    // navigation menu
    'navigation' => require_once('navigation.php'),

    // helpers
    'isActive' => function ($page, $path) {
        return (empty($page->getPath()) && $path === '/') || Str::endsWith(trimPath($page->getPath()), trimPath($path));
    },
    'url' => function ($page, $path) {
        return Str::startsWith($path, 'http') ? $path : '/' . trimPath($path);
    },
];
