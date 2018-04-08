# Combinator.js
Combinator is a js library for obtaining unique combinations of specified fields.
e.g. You want to obtain a random unique combination of a list of names, list of adjectives and colors

## Getting Started

You just need to download & include Combinator.js .
https://github.com/rooom13/Combinator.js/blob/master/src/Combinator.js

```html
<script src="src/Combinator.js"></script>
```


### How to
You can check demo.html for a working example
https://github.com/rooom13/Combinator.js/blob/master/idemo.html


Combinator init
```javascript
var aCombinator = new Combinator();
```

Field lists to combine
```javascript
names = ["bird", "cat", "dog","mouse"]
adjs = ["strong", "tinny", "cool"]
colors = ["red","cyan","magenta","orange"];
```

Load field lists to combinator
```javascript
aCombinator.addField("name",names);
aCombinator.addField("adj",adjs);
aCombinator.addField("color",colors);
```

Set default,return object given if almost every combination taken (too many collisions produced),
If not set, it will be null
```javascript
aCombinator.setDefault({color:"grey",name:"Hackerman", adj:"super"})
```

Get combination
```javascript
var comb = aCombinator.getCombination();
var name = comb.names;
var adj = comb.adj;
var color = comb.color;
```
