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

## Handle form submission
* `event.preventDefault()`
  - You still see name in the form, since we prevent the page from refreshing the form doesn't clear (it would also remove any dynamically generated elements)
  - Even if we add a `console.log()` statement to `createTaskHandler()` and monitor the **Chrome DevTools** console here, we'll notice that the log shows up for a second and then disappears as well
  - Depending on how fast your computer is, you may not even notice that the browser itself actually reloads the page every time you submit the form!
  - So the code works just fine here, but the **browser is causing problems**
  - This **legacy browser behavior** used to help webpages communicate with servers, but now JavaScript does most of that work
  - Now that we use JavaScript to handle these types of actions, we no longer need to rely on this default browser behavior to complete the task
    + But the browser doesn't know that, and it still wants to do what it was designed to do
    + It's up to us to explicitly instruct the browser to not do that and we do that by using `preventDefault()`
* `click` event listeners can lack usability features that may seem trivial but make forms feel more intuitive for some users, such as allowing both the submit `<button>` element and the `Enter` key to **submit the form**
* Because we're targeting the entire form instead of just the button, we can't use the `click` event listener anymore
* **NOTE** If we kept a `click` listener, then every time we clicked on the form it would run the `createTaskHandler()` function, which would lead to a bad overall user experience and inefficient form use for data collection
* We're using a form-specific event called `submit` (also called `onsubmit` in certain documentation)
  - This particular listener actually listens for two events within the context of the form
    + When the user `clicks` on a `<button>` element with a `type` attribute that has a value of `"submit"`
    + When the user press `Enter` on their keyboard (`return` on Macs)

```javascript
// <button type="submit" id="villainSubmit">

var listEl = document.querySelector('#villains');
var villainInput = document.querySelector('#villainInput');
var villainSubmit = document.querySelector('#villainSubmit');

villainSubmitClick.addEventListener('click', insertVillian);

function insertVillian(event) {
  event.preventDefault();
  var villianListEl = document.createElement('li');
  villainListEl.textContent = villianInput.value;
  villainListEl.classname = 'list-group-item';
  listEl.appendChild(villianListEl);
}
```

## The `event` object
* a little backstory on the browser event and JavaScript relationship
  - The browser pays attention to everything that happens on the page
    + If someone scrolls down the page, the browser knows exactly how far they go
    + If someone clicks on the unused margins of a page, the browser knows
    + All of this happens whether we create a JavaScript event listener or not
* When we use JavaScript to listen for an event that occurs on an `HTML` element, however, the browser collects all of the information for that event and packages it into an object for us to use
  - This is known as the `event` interface, but that's just a fancy name for a nicely packaged JavaScript object we get to use in the `event` handler function
  - We can use this `event` object by making the function executed by the `event` have an argument to represent the `event` object
    + Once we do that, the **browser** can fill in the data for that `event` and pass the argument into the function
* By adding the `event` argument to the `createTaskHandler()` function, we can use the data and functionality that object holds
  - We did that when we added `event.preventDefault();` to the handler function's code

## Grab an element by it's `name` attribute
`const taskNameInput = document.querySelector("input[name='task-name']");`

## console.log(taskNameInput) vs console.dir(taskNameInput)
* The `console.log(someHtmlEL)` will display the HTML tag for that element
* The `console.dir(someHtmlEl)` will display an object
  - The `value` property for this element, and we'll see what we typed into the form before submitting it
* **note** While `console.log()` can get us the information we need most of the time, we can also use `console.dir()` to make the console display data as a JavaScript object

## getting and setting
* The common verb used for retrieving or reading data from an object's property is `getting`
* When we provide and store data in an object's property, it's called `setting` * **note** These two terms are used often in web development

## Gotchas
* You need to capture the input with name attribute but it doesn't exist unless you have access to the `event` object inside the event handler function

## Form validation
* When used in a condition, empty strings and the number `0` are evaluated as **falsy** values
* When we use the syntax `!taskNameInput`, we're checking to see if the `taskNameInput` variable is **empty** by asking if it's a `falsy` value.
* That's what the **"not"** operator `!` is doing here
* Because the default is to check for a `true` value, the `!` is used to check for the opposite `(false)` value.
  - Putting an exclamation point (`!`) in front of the variable name will make the condition return true if the value evaluates to false
    + So, this code literally says, "if either one or both of the variables are not true, then proceed,"
    + Which is the same as "if either one or both of the variables are false, then proceed."

## custom data attributes
* This is where `data-*` attributes come in
* Also known as **custom data attributes**, these allow developers to store extra information about an HTML element without conflicting with any of the built-in attributes

## localStorage
* Can only save data as a string and DOM elements are difficult to convert to strings

## CSS
* You'll notice that the `<main>` element has the declaration `display: flex`, allowing it to control the distribution of its content
* In turn, each `<section>` element has a `flex: 1` declaration to specify that they should share space evenly
* In the CSS media query, the `<section>` elements' `flex-basis` is set to `100%`, which defines a new width that takes up all available space (Thus, the elements become stacked)

## Testing code
* Any function that you create in the global scope can be accessed by the Chrome DevTools console
* This is a great way to test if functions are working rather than trying to find a place in your code to call it

## Event delegation
### Why necessary?
* If we want to delete an element

```javascript
var allButtonEls = document.querySelector(".delete-btn");
allButtonEls.addEventListener("click", myFunction);
```

* But the `Delete` buttons don't exist when the page first loads, so this would give us an error :(
* We could add individual event listeners to the `Delete` buttons as we make them

```javascript
var deleteButtonEl = document.createElement("button");
deleteButtonEl.addEventListener("click", myFunction);
```

* Bad
  - This might make our code harder to follow
  - And the number of event listeners we would be creating could lead to **memory leaks** and **performance issues** down the road

### event delegation to the rescue!
* With event delegation, we can set up the `click` event listener on a **parent** element and then, through that single event listener, determine which `child` elements were **clicked**
* **note** `Clicks` in JavaScript are a funny thing
  - If an element that has `parent` elements is **clicked**, the click event `bubbles`, (or travels), upwards to its **parents**
  - We can stop bubbling with `event.stopPropagation()`

```html
<div onclick="alert('this alert will run')">
  <strong>M</strong>
</div>
```

* If you click `M` in the strong tag, the onclick handler will run and trigger the alert to run in the browser
  - But why? Because of bubbling
* At its core when an event is triggered by an element it will first run its handlers on it (and in our code there weren't any handlers)
  - then it will run any handlers on its parent
  - And then it's parents parents
  - And then it's parents parents parents (you get the idea)
  - All the way back up the chain (this process is called `bubbling`)

```html
<div onclick="alert('this alert will not run')">
  <button conclick="event.stopPropagation()">Click me</button>
</div>
```

* The above handler will not run because we shut off bubbling using `event.stopProgagation()`

## DOM
### `matches()`
* There's a catch-all method called `matches()` that was created specifically for checking if an element matches certain criteria
* The `matches()` method is similar to using the `querySelector()` method, but it doesn't find and return an element
  - Instead, it returns `true` if the element would be returned by a `querySelector()` with the same argument, and it returns `false` if it wouldn't
