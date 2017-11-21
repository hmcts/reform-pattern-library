# Documentation
This macro generates an `<input>` and `<label>`.

## Variables

```
label
id
name
hint
error
type
value
classes
```

## Descriptions of variables

| Name          | Description                                                   |
| ------------- |---------------------------------------------------------------|
| label         | sets the text of the label                                    |
| id            | sets the id of the input, and the for of the label            |
| name          | sets the name of the input                                    |
| hint          | sets hint text within the label                               |
| error         | sets the error message                                        |
| type          | sets the type of the input (email, tel, password)             |
| value         | sets the value of the input                                   |
| classes       | object used for styling elements                              |

## Classes
You can add various styles to the elements within the macro.

| Name          | Description                                                   |
| ------------- |---------------------------------------------------------------|
| label         | this overrides the form-label-bold                            |
| input         | adds addtional classes to the input for field widths          |

These are supplied as a string i.e `{label: 'form-label', input: 'form-control-1-4'}`.

## How to use
Include the nunjucks macro and render it like so:

```
{% from "macros/reform-inputs/macro.njk" import reformInput %}

{{reformInput(
  label="This is a label", 
  id="ID", 
  name="NAME"
)}}
```