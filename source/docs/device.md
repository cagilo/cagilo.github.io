---
title: Device
extends: _layouts.documentation
section: content
---

# Device

The `device` component provides a simple ability to hide or show depending on the user's device based on the [User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) request.

## Basic Usage

For example, show content only on desktop:

```html
<x-device desktop="true">
    <h1>Hello Word</h1>
</x-device>
```

If you need to display content for multiple devices, you can list them:

```html
<x-device phone="true" tablet="true">
    <h1>Hello Word</h1>
</x-device>
```

Enable for all devices:

```html
<x-device desktop="true" phone="true" tablet="true" robot="true" other="true">
    <h1>Hello Word</h1>
</x-device>
```

## Nested Components

When other components are inside a device component, for example:

```html
<x-device desktop="true">
    <x-timeline/>
    <x-posts/>
    <x-banner/>
</x-device>
```

Then they will not be called when visiting the site using a mobile device. This allows hiding elements and not performing the operations specified in these components, for example, accessing the database.

