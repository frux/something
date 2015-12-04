# Something.js
## Adds something to your global

Something.js adds `something` variable that equals different global properties every time you try to get its value.

## Usage
### on browser
```html
<script src="something.js"></script>
```
### on NodeJS
```bash
npm install something
```

```js
require('smth');
```

And now just use something!
```js
console.log(typeof something) //'function'
console.log(typeof something) //'object'
console.log(typeof something) //'boolean'
console.log(typeof something) //'object'
console.log(typeof something) //'null'
```

Also you can compare your variables with something:
```js
if(myVariable === something){
  //...your code
}
```
