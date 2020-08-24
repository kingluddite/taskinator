# taskinator

## Notes
* Notice that we didn't add `window` before `document` in the expression above
* In the `script.js` file and in the browser console, `window` is unnecessary because we opened `index.html` in the browser, where `window` is a **global** object
* **note** This should look familiar—we dropped the window prefix with the `Math` object when we used `Math.random()`
* Incidentally, `alert()` and `prompt()` can also function without the `window` prefix
* We'll drop it from here going forward because shortcuts make a developer's life easier

## callback
```javascript
var nameEl = document.querySelector('#name');
var imageEl = document.querySelector('#general');

var getName = function(callback) {
  var name = prompt('Enter your name');
  callback(name);
}

var insertName = function(name) {
  nameEl.textContent = "General " + name;
  imageEl.setAttribute('src', 'gg.jpg');
}

getName(insertName);
```

## setTimeout and setIterval
[repl.it examples](https://repl.it/@kingluddite/FearfulDarkgrayIrc)
