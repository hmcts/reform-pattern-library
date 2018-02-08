## Example

> A screen reader is informed of only the dynamically generated item being added, based on user interaction and a collection of ARIA attributes.

```example
<form class="form" method="POST" data-js="form">

  {{reformTextarea( 
    label="Example 1", 
    id="example-1", 
    name="example-1", 
    rows="3", 
    value="My husband/wife …",
    classes={
      textarea: "form-control-3-4"
    }
  )}}
  
  {{reformTextarea( 
    label="Example 2", 
    id="example-2", 
    name="example-2", 
    rows="3", 
    value="My husband/wife …",
    classes={
      textarea: "form-control-3-4"
    }
  )}}
  
  {{reformTextarea( 
    label="Example 3", 
    id="example-3", 
    name="example-3", 
    rows="3", 
    value="My husband/wife …",
    classes={
      textarea: "form-control-3-4"
    }
  )}}
  
  <!-- add dynamic items here -->
  <div id="form-items" aria-live="polite" aria-automic="false" aria-relevant="additions"></div>
  
  <div class="form-group">
    {{ reformButton("Add another example", style="secondary", id="add-form-item") }}
  </div>

  <div class="form-group">
    {{ reformButton("Continue", type="submit") }}
  </div>
  
</form>
```

## When to use this pattern

Use this pattern for all XYZ.

## Research for this pattern

Maybe a link to some research here with a brief explanation of why we’re making this a pattern.