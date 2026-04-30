# Doubts and Answers

## 1) How do I connect CSS to HTML?
Question:
I forgot how to reference the stylesheet in HTML.

Answer:
Use a <link> tag in the <head> section:

```html
<link rel="stylesheet" href="styles.css">
```

- `rel="stylesheet"` tells the browser this file is CSS.
- `href="styles.css"` points to the CSS file path.
- `<link>` is a void element (no closing `</link>` tag).

## 2) In @font-face, is font-family a fallback list?
Question:
I thought `font-family` there was a fallback list.

Answer:
In `@font-face`, `font-family` is the name you assign to the custom font. It is not the fallback list.

Example:

```css
@font-face {
  src: url("./timer-font.ttf");
  font-family: TimerFont;
}

.current-score {
  font-family: TimerFont, monospace;
}
```

- `TimerFont` is the custom name you create.
- Fallback fonts are written when you use `font-family` on an element (like `.current-score`), after your primary font.

## 3) Why did my layout stay in one column?
Question:
I kept seeing one column layout.

Answer:
Because flex layout only applies when the parent has `display: flex`.

Your parent container (`.scoreboard`) already has that now, so children can sit in a row with:

```css
.scoreboard {
  display: flex;
  flex-direction: row;
}
```

## 4) How do I connect JavaScript to HTML elements?
Question:
I wasn’t sure whether it is done with `getElementById()`.

Answer:
There are two parts:

1. Load the JS file with a script tag (usually before `</body>`):

```html
<script src="scripts.js"></script>
```

2. In JS, select elements and modify them (yes, `getElementById()` is one valid way):

```js
const homeScoreEl = document.getElementById("home-score");
homeScoreEl.textContent = "0";
```

Important note:
`<link rel="script" ...>` does not load JavaScript. Use `<script src="..."></script>`.

## 5) How do I select elements and change their text in JavaScript?
Question:
I don't recall how to select elements. Is it `selectElementById`? Does it belong to a function? How do I change the text inside them?

Answer:
The correct method is `document.getElementById("id")`. It is a method of the `document` object, which represents your entire web page.
To change the text inside an HTML tag, you use properties like `.textContent` or `.innerText` on the selected element.

Example:
```js
let guestScoreEl = document.getElementById("guest-score");
guestScoreEl.textContent = "10";
```

## 6) How do Event Listeners and if statements work in JS?
Question:
I don't remember the syntax for event listeners and if statements. Do I need to import something like in React?

Answer:
In vanilla JavaScript, you don't need to import anything for standard DOM manipulation.
The syntax for an `if` statement is:
```js
if (condition) {
  // code to execute
}
```
For clicking buttons, you select the button and attach an event listener like this:
```js
let btn = document.getElementById("guest-plus-one");
btn.addEventListener("click", function() {
    // code to run on click
});
```

## 7) HTML script tag and inline scripts vs script attributes
Question:
Does whatever goes inside the `<script>` tag affect the HTML block I target? Also, can I put a `script="./script.js"` attribute on any tag like `<h1>`?

Answer:
- The `<script>` tag doesn't target a specific block of HTML visually. It runs JavaScript for the entire page (`document`).
- The syntax `<h1 script="./script.js">` is invalid. You cannot link a separate JS file to individual HTML tags using a `script` attribute.
- You link your JS once (or a few times) using `<script src="scripts.js"></script>`, usually at the end of the `<body>` or in the `<head>` with the `defer` keyword.
- HTML comments `<!-- -->` inside a `<script>` tag don't work the same way in modern JS (JS uses `//` or `/* */`).

## 8) Are IDs shared between HTML, CSS, and JS?
Question:
I can target elements by id in JS, but is that the same id used for styling in CSS?

Answer:
Yes! The `id` attribute is universal for that element. 
- In CSS, you target it with a hash: `#home-score { ... }`
- In JS, you target it with `document.getElementById("home-score")`

## 9) Can I use curly braces {} in HTML like Python formatted strings?
Question:
I put `{guest_score}` in the HTML. Can I format it like a Python f-string to update automatically?

Answer:
No, standard HTML does not support native string templating like Python's f-strings or React's JSX (`{}`). 
To update HTML content, you have to leave the HTML simply as `<h1 id="guest-score">0</h1>` and then use JavaScript to manually update it via `document.getElementById("guest-score").textContent = newScore;`.

## 10) CSS linear-gradient and background property
Question:
I noticed `background: linear-gradient(...)` works, but not `background-color`. 

Answer:
(Based on user research) The `background` property is a shorthand that can accept multiple background attributes (colors, images, gradients). `linear-gradient` is technically mapped as a background-image, not a background-color. That is why it must be attached to the `background` (or `background-image`) property, not `background-color`.

## 11) What is `rem` in CSS?
Question:
Tutorials use `rem` for margins. Is it just a multiple of 16px to be pleasing to the eyes?

Answer:
(Based on user research) `rem` stands for "root em". It is a relative unit based on the font-size of the root element (`<html>`). By default in most browsers, 1 rem = 16px. 
It is widely used not just for looks, but for accessibility: if a visually impaired user increases their browser's default font size to 24px, all your `rem` measurements will scale up proportionally, keeping the layout perfectly responsive.
