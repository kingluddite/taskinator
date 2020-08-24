# taskinator

## Notes
* Notice that we didn't add `window` before `document` in the expression above
* In the `script.js` file and in the browser console, `window` is unnecessary because we opened `index.html` in the browser, where `window` is a **global** object
* **note** This should look familiar—we dropped the window prefix with the `Math` object when we used `Math.random()`
* Incidentally, `alert()` and `prompt()` can also function without the `window` prefix
* We'll drop it from here going forward because shortcuts make a developer's life easier
* The DOM is NOT build into the JavaScript language
  - Our JavaScript code has access to the DOM through the browser, much like our use of `alerts`, `confirms`, and `prompts`
  - The DOM is a **Web API**

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

## hub command
### create an issue
`$ hub issue create`

* Add a title (first line) --- all above the Comment
* Add the description in markdown below the title
* Save, write and quit and the issue will be added

### List issues
`$ hub issue`

### Update an issue
`$ hub issue update 2 --edit`

### Close an issue
`$ hub issue update 2 --state closed`

## git stuff
```
git status
git add .
git commit -m 'Add task with dom and event'
git push origin feature/add-task
git checkout develop
git merge feature/add-task
git push origin develop
git checkout master
git merge develop
git push origin master
```
