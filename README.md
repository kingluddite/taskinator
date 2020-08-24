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
* [resource for hub](https://hub.github.com/)

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
## forms
* Adding the `disabled` and `selected` properties to the first option makes that option show up first but also applies a style that tells the user that this option isn't valid
* Styling dropdown

```css
.select-dropdown,
.select-status {
  display: block;
  font-size: 2.2rem;
  color: #444;
  padding: 12px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  border: 2px solid var(--grey);
  border-radius: 12px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("../images/select-arrow.svg");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}

.select-status {
  font-size: 1.4rem;
  padding: 4px 28px 4px 4px;
  width: auto;
}

.select-dropdown::-ms-expand,
.select-status::-ms-expand {
  display: none;
}

.select-dropdown:hover,
.select-status:hover {
  border-color: #888;
}

.select-dropdown:focus,
.select-status:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-dropdown option,
.select-status option {
  font-weight: normal;
  font-size: 2rem;
}
```
