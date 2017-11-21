## Inputs

```example
{{reformInput(
  label="First name", 
  id="firstname", 
  name="firstName"
)}}
```

```nunjucks
{% raw %}
  {{reformInput(
    label="First name", 
    id="firstname", 
    name="firstName"
  )}}
{% endraw %}
```

## Radios

```example
{{reformRadios(
  legend="Please select an option",
  name="yes-or-no",
  radioButtons=[
    {
      label: "Yes",
      id: "yes", 
      value: "yes"
    },
    {
      label: "No",
      id: "no", 
      value: "no" 
    }
  ]
)}}
```

```nunjucks
{% raw %}
  {{reformRadios(
    legend="Please select an option",
    name="yes-or-no",
    radioButtons=[
      {
        label: "Yes",
        id: "yes", 
        value: "yes"
      },
      {
        label: "No",
        id: "no", 
        value: "no" 
      }
    ]
  )}}
{% endraw %}
```