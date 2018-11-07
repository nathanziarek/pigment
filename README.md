# Pigment

Pigment is a collection of JS functions for creating and modifying colors. While many libraries like this exist, none did wuite what I wanted, so I started collecting bits and pieces here.

# Convert

Pigment can accept colors in rgb, hex and lab formats and convert to any other space.

```javascript
pigment.convert('string');
```

...where 'string' can be one of...

* `lab(3,4,5)`
* `rgb(255, 255, 255)`
* `#336699`

...and the return object will contain the color in all supported formats:

```json
{
  "hex": "847373",
  "rgb": {
    "r": 33,
    "g": 66,
    "b": 99
  },
  "hsl": {
    "h": "48deg",
    "s": 45,
    "l": 9
  },
  "lab": {
    "l": 2,
    "a": 9,
    "b": 7
  }'
  "strings": {
    "rgb": "rgb(33, 66, 99)",
    "hsl": "hsl(48deg, 45, 9)",
    "hex": "#847373"
  }
}
