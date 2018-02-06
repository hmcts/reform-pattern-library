## Example

We generally use the GOV.UK pattern for dates:

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

## Exceptions

### Including information text

You can include more information text if users need it.

Use black text finishing with a full stop, below the H1 question.

Example from CMC:
```example
<div class="grid">
<div class="column column-two-thirds">
<h2 class="heading-large">When is your Mandatory Reconsideration Notice (<abbr title="Mandatory Reconsideration Notice">MRN</abbr>) dated?</h2>
<p>This is the letter received from <abbr title="Department for Work and Pensions">DWP</abbr> when you asked them to reconsider their decision about the <abbr title="Employment and Support Allowance">ESA</abbr> benefit.</p>
<p>[insert goes image]</p>
{{reformDate(
  label="When your MRN is dated", 
  id="date-of-birth", 
  name="dateOfBirth",
  hint="For example, 27 7 2017"
)}}
{{ reformButton("Continue", type="submit") }}
</div>
</div>
```

### Including images

You can use an image to show a user where to find the date:

Example from SSCS:
```example
```

## Research for this pattern

Maybe a link to some research here with a brief explanation of why we’re making this a pattern.