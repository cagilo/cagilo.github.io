---
title: Submit
extends: _layouts.documentation
section: content
---

# Submit

The `submit` component is a convenience component for creating a POST request button without manually writing a form each time.
It automatically generates a hidden form with CSRF protection and binds a `<button>` to submit it.

This allows you to create buttons for logout, delete actions, or any other POST-based requests in a consistent way.

## Basic Usage

The most basic usage of the component is as a self-closed tag:

```html
<x-submit action="/logout"/>
```

This will output the following HTML:

```html
<form method="POST" action="http://localhost/logout" id="form-abc123">
  <input type="hidden" name="_token" value="...">
</form>

<button form="form-abc123" type="submit">
  Submit
</button>
```

By default, the button label is `Submit` (wrapped in the `__()` translation helper).
You can override this by providing slot content.

## Customizing

You can adjust the form `action`, `formId`, and the button label:

```html
<x-submit action="/delete/42" formId="delete-item" class="btn btn-danger">
  Delete Item
</x-submit>
```

Output:

```html
<form method="POST" action="http://localhost/delete/42" id="delete-item">
  <input type="hidden" name="_token" value="...">
</form>

<button form="delete-item" type="submit" class="btn btn-danger">
  Delete Item
</button>
```

When using a slot, the `__()` translation helper is not applied, giving you full control over the button content.
This allows you to include icons or other markup.

## HTTP Method Spoofing

You can also send requests using other HTTP verbs (`PUT`, `PATCH`, `DELETE`) by setting the `method` attribute.
The component will automatically add a hidden `_method` field when needed.

```html
<x-submit action="/posts/42" method="DELETE" class="btn btn-outline-danger">
  Delete Post
</x-submit>
```

Output:

```html
<form method="POST" action="http://localhost/posts/42" id="form-xyz789">
  <input type="hidden" name="_token" value="...">
  <input type="hidden" name="_method" value="DELETE">
</form>

<button form="form-xyz789" type="submit" class="btn btn-outline-danger">
  Delete Post
</button>
```


## Logout

The `logout` component is a preconfigured shortcut built on top of the `submit` component.
It is tailored for logging a user out via the named `logout` route.

```html
<x-logout/>
```

Output:

```html
<form method="POST" action="http://localhost/logout" id="logout">
  <input type="hidden" name="_token" value="...">
</form>

<button form="logout" type="submit">
  Log out
</button>
```

The button label defaults to `Log out` (translated via the `__()` helper).
