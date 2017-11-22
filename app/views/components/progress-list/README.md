## Examples

```example
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        current: true
      },
      three: {
        label: "Hearing booked"
      },
      four: {
        label: "Hearing"
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked"
      },
      four: {
        label: "Hearing"
      }
    })
  }}
{% endraw %}
```

```example
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked",
        current: true
      },
      four: {
        label: "Hearing"
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked",
        complete: true
      },
      four: {
        label: "Hearing"
      }
    })
  }}
{% endraw %}
```

```example
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked",
        complete: true
      },
      four: {
        label: "Hearing",
        current: true
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked",
        complete: true
      },
      four: {
        label: "Hearing",
        current: true
      }
    })
  }}
{% endraw %}
```

```example
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked",
        complete: true
      },
      four: {
        label: "Hearing",
        complete: true
      }
    })
  }}
```

```nunjucks
{% raw %}
  {{ reformProgressList({
      one: {
        label: "Appeal",
        complete: true
      },
      two: {
        label: "DWP response",
        complete: true
      },
      three: {
        label: "Hearing booked",
        complete: true
      },
      four: {
        label: "Hearing",
        complete: true
      }
    })
  }}
{% endraw %}
```

## When to use this pattern

Only use the progress bar pattern on [Start pages](https://divorce-prototype.herokuapp.com/start) and [Done pages](https://divorce-prototype.herokuapp.com/done).

## How to use this pattern

Follow these guidelines for this pattern:

* include a maximum of 4 steps even if your service has more - the pattern is a visual aid to orient users, not a navigation tool
* write the label for each step in the present tense, for example “Court decides”
* each step has 3 states - “completed”, “in progress” and...
* the responsive component shrinks on mobile but too much text overcrowds it - use shorter text labels for each step

## Research for this pattern

In discovery, several services found users needed to know the stage of a service they’re at and how much more they have to do.

## Related patterns

You may also want to use these:

* [Start pages](https://divorce-prototype.herokuapp.com/start)
* [Done pages](https://divorce-prototype.herokuapp.com/done)
