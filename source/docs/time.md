---
title: Time
extends: _layouts.documentation
section: content
---

# Time

The `time` component provides an easy way to render HTML `<time>` elements with a proper `datetime` attribute. 
You can pass a `Carbon` or `DateTime` object (or a date string), optionally specify a format, and the component will handle rendering the correct HTML.

## Basic Usage

The simplest usage is to pass a date:

```blade
<x-time date="2018-07-07" />
````

This will generate:

```html
<time datetime="2018-07-07T00:00:00">2018-07-07</time>
```

## Using a Custom Format

If you need the output to be displayed in a specific format, you can use the `format` attribute:

```blade
<x-time date="2018-07-07" format="Y.m.d" />
```

This will generate:

```html
<time datetime="2018-07-07T00:00:00">2018.07.07</time>
```

## Using DateTime or Carbon Objects

You can also pass `Carbon` or `DateTime` objects directly:

```blade
@php
    $date = \Carbon\Carbon::create(2025, 10, 1, 14, 30);
@endphp

<x-time :date="$date" format="d M Y H:i" />
```

Output:

```html
<time datetime="2025-10-01T14:30:00">01 Oct 2025 14:30</time>
```
