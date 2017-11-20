## Input types

Mobile devices take advantage of HTML5 input types:
* text (default)
* email
* tel
* password

```example
{{ reformInput(label="Text input", id="text", name="text") }}
```

```nunjucks
{% raw %}
  {{ reformInput( label="Text input", id="text", name="text" ) }}
{% endraw %}
```

```example
{{ reformInput(label="Email input", id="email", name="email", type="email") }}
```

```nunjucks
{% raw %}
  {{ reformInput( label="Email input", id="email", name="email", type="email") }}
{% endraw %}
```

```example
{{ reformInput(label="Telephone input", id="tel", name="tel", type="tel") }}
```

```nunjucks
{% raw %}
  {{ reformInput( label="Telephone input", id="tel", name="tel", type="tel") }}
{% endraw %}
```

```example
{{ reformInput(label="Password input", id="password", name="password", type="password") }}
```

```nunjucks
{% raw %}
  {{ reformInput( label="Password input", id="password", name="password", type="password") }}
{% endraw %}
```
