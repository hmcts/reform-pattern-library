```example
<h2 class="heading-large">What is the full name of your client?</h2>
{{ reformInput(label="First name(s)", id="firstname", hint="Include all middle names here", name="firstname") }}
{{ reformInput(label="Last name(s)", id="lastname", name="lastname") }}
{{ reformButton("Continue", type="submit") }}
```

### Additional headers

Use an additional header if you find a user need for it.

Example from divorce:
```example

```

### Full names

In some cases, asking for first names and last names seperately is
impractical. In the case of Divorce, the court staff need the applicant
to enter their name *as it appears on the marriage certificate*.
Breaking this down into first name and last name works in many cases,
but it serves no purpose for the court staff since they won't be using
the name for addressing the user.

In the Probate project, this approach also makes sense for handling the
names of executors. In some cases their name may only be one word (eg. 'Bono', or 'Dido') and as in
the previous example there's no business need to have the names split
up.

Example from divorce:
```example
<h2 class="heading-large">Enter your full name on the certificate</h2>
{{ reformInput(label="Full name", id="firstname", hint="This will be the name you used on your wedding day, eg a maiden name.", name="fullname") }}
{{ reformButton("Continue", type="submit") }}
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
