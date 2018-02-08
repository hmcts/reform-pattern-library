## Example


```example
<h2 class="heading-large">When did you get married?</h2>
{{reformDate(
  label="Use the date on your marriage certificate", 
  id="date-of-birth", 
  name="dateOfBirth",
  hint="For example, 31 3 2002"
)}}
{{ reformButton("Continue", type="submit") }}
```

```nunjucks
{% raw %}
{{reformDate(
  label="Use the date on your marriage certificate", 
  id="date-of-birth", 
  name="dateOfBirth",
  hint="For example, 31 3 2002"
)}}
{% endraw %}
```

