---
title: Alert
extends: _layouts.documentation
section: content
---

# Alert

The `alert` component provides easy integration with [Laravel's session flashing](https://laravel.com/docs/session#flash-data). By flashing messages to sessions from the backend, the alert component picks them up and displays them in your Blade views. You can combine multiple letters, display various messages simultaneously, and compose styling per alert type.

## Displaying Alerts

The most basic usage of the `alert` component is to first flash a message to the `alert` key:

```php
session()->flash('alert', 'Settings saved successfully.');
```

And then, use the component to display it in your Blade view:

```html
<x-alert class="alert alert-success" />
```

This will output the following HTML:

```html
<div role="alert" class="alert alert-success">
    Settings saved successfully.
</div>
```

## Using Multiple Types

You can also flash different types of messages using specific session keys. Let's flash some messages to the session:

```php
session()->flash('success', 'Settings saved successfully.');
session()->flash('warning', 'Please confirm your email address.');
session()->flash('danger', 'Passwords do not match.');
```

Reference the different types using the `type` attribute on the `alert` component:

```html
<x-alert type="success" class="alert alert-success" />
<x-alert type="warning" class="alert alert-warning" />
<x-alert type="danger" class="alert alert-danger" />
```

These will then render all the flashed messages.

## Composing the Content

If you'd like to compose how the content is rendered within the component you can make use of its slot. This is useful, for example, for adding functionality like icons or dismiss elements. You can control the position of where the message will be placed by using the component's `message` method:

```html
<x-alert class="alert alert-success">
    <strong>Note:</strong>
    {{ $component->message() }}
</x-alert>
```

This will output the following HTML:

```html
<div role="alert" class="alert alert-success">
    <strong>Note:</strong>
    Settings saved successfully.
</div>
```

## Displaying Multiple Messages

You can also opt to display multiple flashed messages for a specific alert type. Let's flash some messages to the session first:

```php
session()->flash('danger', [
    'Biography is too long.',
    'Passwords do not match.',
]);
```

We can then make use of the component's slot to render a list of messages. The `messages` method gives us access to all the messages from a specific type:

```html
<x-alert type="danger" class="alert alert-danger">
    <ul>
        @foreach ($component->messages() as $message)
            <li>{{ $message }}</li>
        @endforeach
    </ul>
</x-alert>
```

You can still choose to just display a single message from a list of messages by using a non-slotted component:

```html
<x-alert type="danger" class="alert alert-danger" />
```

By default, using this approach will display the first message from a specific alert type.

## Composing Multiple Types

When you use multiple types of messages but still want to compose the look and feel of the content you can do so. Using the code snippet from below we can differentiate the content based on an alert's `$type`:

```html
@foreach (['success', 'warning', 'danger'] as $type)
    <x-alert :type="$type" class="alert alert-{{$type}}">
        @if ($type === 'warning')
          <strong>Note warning:</strong>
        @elseif ($type === 'danger')
          <strong>Note danger:</strong>
        @else
          <strong>Note success:</strong>
        @endif

        {{ $component->message() }}
    </x-alert>
@endforeach
```
