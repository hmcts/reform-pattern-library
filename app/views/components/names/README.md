## Agreed pattern

This pattern has been decided.

```example
<h2 class="heading-large">What is the full name of your client?</h2>
{{ reformInput(label="First name(s)", id="firstname", hint="Including middle names", name="firstname") }}
{{ reformInput(label="Last name(s)", id="lastname", name="lastname") }}
{{ reformButton("Continue", type="submit") }}
```

## Exceptions

There are 3 exceptions that can be used if the user need is established.

### Additional headers

Use an additional header if you find a user need for it.

Example from divorce:
```example

```

### Multiple names on one page

Use this pattern to capture multiple names on one page:

Example from divorce:
```example

```

### Capturing titles

Only ask for a title if there’s a business need for your service to do so.

Example from CMC:
```example

```

## Research for this pattern

When testing the single-field GOV.UK approach users didn’t enter their entire names or missed out middle names.
This is why we use the multiple-field pattern. 

Hint text should read: ‘including middle names’

## Related patterns

You may also want to use these:

* [Related link](#)
* [Another related link](#)
* [Add another link](#)