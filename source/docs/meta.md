---
title: Meta
extends: _layouts.documentation
section: content
---

# Meta

The `meta` component allows you to set several `og` and `meta` elements used by social media to provide previews of your website when sharing it.


## Basic Usage

The most basic usage of the component requires setting three attributes, `title`, `description`, and `image`:

```html
<x-meta
    title="Hello World"
    description="Blade components are awesome!"
    image="http://example.com/social.jpg"
/>
```

This will output the following HTML:

```html
<title>Hello World</title>

{{-- Primary Meta Tags --}}
<meta name="title" content="Hello World">
<meta name="description" content="Blade components are awesome!">


{{-- Open Graph / Facebook --}}
<meta property="og:type" content="website">
<meta property="og:url" content="http://localhost"/>
<meta property="og:locale" content="en"/>
<meta property="og:title" content="Hello World"/>
<meta property="og:description" content="Blade components are awesome!">
<meta property="og:image" content="http://example.com/social.jpg">

{{--  Twitter --}}
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:url" content="http://localhost">
<meta name="twitter:title" content="Hello World">
<meta name="twitter:description" content="Blade components are awesome!">
<meta name="twitter:image" content="http://example.com/social.jpg">
```

As you can see several `og` and `meta` elements are set. Some are set automatically. The `og:url` will make use of the current page url unless you explicitely pass an url with the `url` attribute. The `og:locale` will make use of the app's locale. By default, `og:type` will be set at `website` but you can pass in another value if you like through the `type` attribute.

And lastly the `twitter:card` value can be adjusted through the `card` attribute. If your image is square you'd probably want to set this to `summary` instead:

```html
<x-social-meta
    title="Hello World"
    card="summary"
    description="Blade components are awesome!"
    image="http://example.com/social.jpg"
/>
```
