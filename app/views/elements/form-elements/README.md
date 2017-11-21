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

## Textarea

```example
{{reformTextarea(
  label="Why can’t you provide a National Insurance number?", 
  id="national-insurance-number", 
  name="nationalInsuranceNumber", 
  rows="5", 
  classes={
    "textarea": "form-control-3-4"
  }
)}}
```

```nunjucks
{% raw %}
  {{reformTextarea(
    label="Why can’t you provide a National Insurance number?", 
    id="national-insurance-number", 
    name="nationalInsuranceNumber", 
    rows="5", 
    classes={
      "textarea": "form-control-3-4"
    }
  )}}
{% endraw %}
```

## Select

```example
{{reformSelect(
  label="Select an address",
  id="select-address",
  name="select-address",
  placeholder="-- Please select an option --",
  options=[
    {
      value: "1",
      display: "Aquarius House 57a, LONDON, NW1 5DA"
    },
    {
      value: "2",
      display: "49 Lisson Street, LONDON, NW1 5DA"
    },
    {
      value: "3",
      display: "57 Lisson Street, LONDON, NW1 5DA"
    }
  ]
)}}
```

```nunjucks
{% raw %}
  {{reformSelect(
    label="Select an address",
    id="select-address",
    name="select-address",
    placeholder="-- Please select an option --",
    value="2",
    options=[
      {
        value: "1",
        display: "Aquarius House 57a, LONDON, NW1 5DA"
      },
      {
        value: "2",
        display: "49 Lisson Street, LONDON, NW1 5DA"
      },
      {
        value: "3",
        display: "57 Lisson Street, LONDON, NW1 5DA"
      }
    ]
  )}}
{% endraw %}
```

## Dates

```example
{{reformDate(
  label="What is your date of birth?", 
  id="date-of-birth", 
  name="dateOfBirth",
  hint="For example, 31 3 1980"
)}}
```

```nunjucks
{% raw %}
  {{reformDate(
    label="What is your date of birth?", 
    id="date-of-birth", 
    name="dateOfBirth",
    hint="For example, 31 3 1980"
  )}}
{% endraw %}
```