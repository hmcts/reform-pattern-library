## Examples

```example
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        current: true
      },
      three: {
        label: "The court decides"
      },
      four: {
        label: "Divorce finalised"
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides"
      },
      four: {
        label: "Divorce finalised"
      }
    })
  }}
{% endraw %}
```

```example
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides",
        current: true
      },
      four: {
        label: "Divorce finalised"
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides",
        complete: true
      },
      four: {
        label: "Divorce finalised"
      }
    })
  }}
{% endraw %}
```

```example
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides",
        complete: true
      },
      four: {
        label: "Divorce finalised",
        current: true
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides",
        complete: true
      },
      four: {
        label: "Divorce finalised",
        current: true
      }
    })
  }}
{% endraw %}
```

```example
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides",
        complete: true
      },
      four: {
        label: "Divorce finalised",
        complete: true
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "You apply",
        complete: true
      },
      two: {
        label: "Your husband/wife responds",
        complete: true
      },
      three: {
        label: "The court decides",
        complete: true
      },
      four: {
        label: "Divorce finalised",
        complete: true
      }
    })
  }}
{% endraw %}
```

## How to use this pattern

Follow these guidelines for this pattern:

* include a maximum of 4 steps even if your service has more - the pattern is a visual aid to orient users, not a navigation tool
* write the label for each step in the present tense, for example “Court decides”
* each step has 3 states - “completed”, “in progress” and...
* the responsive component shrinks on mobile but too much text overcrowds it - use shorter text labels for each step

## Research for this pattern

In discovery, several services found users needed to know the stage of a service they’re at and how much more they have to do.
