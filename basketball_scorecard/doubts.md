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
