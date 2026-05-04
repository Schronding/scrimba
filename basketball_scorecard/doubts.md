# Doubts and Notes

## JavaScript
**Q: Does JS use camelCase for variables as well as functions?**
A: Yes, camelCase is the standard naming convention for both variables and functions in JavaScript. 

**Q: Why aren't compound assignment operators (like +=, -=) working as expected?**
A: When extracting values from the DOM (like `textContent`), the value is a string. Using `+=` on strings concatenates them rather than adding mathematically. 

**Q: How do you properly convert text to an integer? How does multiplying by 1 work?**
A: Multiplying a numeric string by 1 (or using `-0`) implicitly coerces the string to a number in JavaScript. However, the standard and more explicit ways are using `parseInt()`, `Number()`, or the unary plus operator `+`. 

**Q: Why was using header tags looking like buttons a problem?**
A: Native `<button>` elements have built-in styling, accessibility features, and behaviors (like being clickable and focusable). While headers can be made to look and act like buttons with CSS and JS, it's semantically incorrect and less accessible. (Note: You already solved this by changing to `<button>` tags!).

**Q: Immediate execution in Event Listeners.**
A: When you write `element.addEventListener('click', addOnePoint(homeScore))`, the function is executed immediately on page load, and its result (which is undefined) is passed as the handler. You need to pass a reference to a function, like `element.addEventListener('click', function() { addOnePoint(homeScore); })` or use an arrow function.

## CSS
**Q: How to make round buttons? (Is it "pills"?)**
A: To make round buttons (pill shape), you use the `border-radius` property. A high value like `border-radius: 50px;` (or simply `50%` for circles) will give that "pill" effect. 

**Q: How to make the background of an element transparent?**
A: You can use `background-color: transparent;`. Alternatively, you can use `rgba()` or `hsla()` and set the alpha channel to 0.

## HTML
**Q: Alignment/layout shifts due to widths (like '0' resizing the screen or "GUEST" vs "HOME" spacing).**
A: Text lengths vary, causing containers to change widths if not explicitly set. To fix these issues, give fixed widths (e.g., `width: 100px;`) or use Flexbox/CSS Grid to ensure equal distribution regardless of text length. Additionally, using a monospace font or `font-variant-numeric: tabular-nums;` helps numbers stay the same width.

**Q: Are buttons self-closing tags?**
A: No, `<button>` requires a closing tag (`</button>`) because it can contain text, images, or other elements inside.


## CSS Part 2
**Q: What is the correct syntax for linear-gradient?**
A: The colors should not have quotes. The correct syntax is `linear-gradient(blue, purple);`, not `linear-gradient("blue", "purple");`.

**Q: How do you target an h1 tag to center it?**
A: You select the tag name directly by writing `h1 { }` and can use `text-align: center;` to center the text inside it.

**Q: What is the order for the margin shorthand (e.g., `margin: 0px auto`)?**
A: Your research is correct. The first value applies to the vertical margins (top and bottom) and the second value applies to the horizontal margins (left and right).

**Q: Why are the guest and home teams displayed differently?**
A: In your CSS, there is a specific rule for `.home-team h1 { margin: 1rem auto; }`, replacing the default margins. Since `.guest-team h1` does not have this specific rule, it uses the default browser margins, causing a vertical misalignment between the two sections.

**Q: Are the RGB values inconsequential if the alpha channel is 0?**
A: Yes. If the fourth number (alpha/opacity) is exactly 0, the color is completely transparent regardless of the first three RGB values. The CSS keyword `transparent` is interpreted by the browser as `rgba(0, 0, 0, 0)`.

## HTML Part 2
**Q: Why did adding 'center' inside the id change the visual aspect even without CSS? (e.g., `id="home-score center"`)**
A: The `id` attribute cannot contain spaces. By writing `id="home-score center"`, you essentially broke the ID. Since it no longer exactly matched `#home-score` and `#guest-score` in your CSS file, those elements lost their styling (width and padding properties). Losing those properties caused the container sizes to shift.

## JavaScript Part 2
**Q: What is the difference between `parseInt()` and `Number()`?**
A: `parseInt()` reads a string left-to-right and stops when it hits a non-numeric character, returning whatever integer it found first (e.g., `parseInt("10px")` returns 10). `Number()` attempts to strictly convert the entire string into a number and returns `NaN` (Not-a-Number) if there is any text (e.g., `Number("10px")` returns `NaN`).

**Q: Why isn't the event listener updating the score when clicking?**
A: In `addEventListener("click", addOnePoint(homeScore))`, putting `()` at the end of `addOnePoint` executes the function immediately as the page loads instead of waiting for a click. The event listener receives the result of that function (which is `undefined`). To delay execution until the click, you need to pass a function reference, for example wrapping it in an anonymous function like `() => addOnePoint(homeScore)`.

## JavaScript Deep Dive: Event Listeners and Arrow Functions
**Q: What does "invoking the function directly" mean in the context of event listeners, and what are arrow functions?**
A: 
1. **Function Reference vs. Execution**: In JavaScript, when you write a function name without parentheses (e.g., `myFunction`), you are just referring to the function (passing the "recipe"). If you add parentheses (e.g., `myFunction()`), you are telling JavaScript to execute it immediately.
2. **The `addEventListener` Problem**: `addEventListener` expects a function reference to run *in the future* when the event (like a click) occurs. In your code (`addEventListener("click", addOnePoint(homeScore))`), the parentheses cause `addOnePoint` to run immediately as the page loads. Since your function doesn't explicitely return anything, it returns `undefined`. So the listener basically receives `undefined`, and does nothing when you actually click.
3. **The Wrapper Solution**: To pass arguments (like `homeScore`) to a function without executing it immediately, you must wrap it inside another function. For example: `function() { addOnePoint(homeScore); }`.
4. **Arrow Functions**: An arrow function is just a modern, shorter syntax for writing a function. Instead of writing `function() { ... }`, you skip the word "function" and use an arrow: `() => { ... }`. So, writing `() => addOnePoint(homeScore)` creates a tiny unnamed function that waits. When the click happens, this wrapper function runs, which in turn safely executes your `addOnePoint` function.

## JavaScript Part 3
**Q: What is the difference between `innerText` and `textContent`?**
A: `textContent` gets the exact text content of an element and all its descendants directly from the HTML code, including text hidden by CSS. `innerText` gets the text as it is visually rendered on the screen, meaning it ignores hidden text and applies CSS effects. For updating a simple numeric score, both work fine, but `textContent` is slightly faster since it doesn't need to calculate visual styles.

**Q: Do I need to return a value? Why isn't the score updating even after using arrow functions?**
A: You doing it perfectly like a 'void function'—your function directly updates `html_tag.innerText`. Returning a value is not needed here.
The real reason nothing happens when you click is hiding in your `index.html`. Your script is loaded inside the `<head>` tag: `<script src="scripts.js"></script>`. Because the browser reads top-to-bottom, it executes your script *before* the `<body>` exists! All your `document.getElementById` calls are silently returning `null`. To fix this, you must either add the `defer` keyword (`<script src="scripts.js" defer></script>`) or move the script tag to the very end of the `<body>`.
*(Also, look closely at your event listeners: you accidentally copy-pasted `addOnePoint` into your +2 and +3 buttons!)*

## HTML Part 3
**Q: Can an element not have multiple things targeting it? Can I use an ID and a class together?**
A: An element **can** absolutely have both an ID and multiple classes at the same time: `<h1 id="home-score" class="center big-text">`. Your previous problem was that you put a space *inside* the `id` attribute (`id="home-score center"`). An ID's name cannot contain spaces. Also, an element should only ever have **one** ID, and that ID must be unique on the entire page. IDs have higher "specificity", meaning their CSS rules will override rules from classes.

## CSS Part 3
**Q: Text alignment vs Flexbox.**
A: Your research is correct! `text-align: center;` is the simplest, most appropriate way to center text horizontally inside its block container (like an `h1`). You only need Flexbox (`justify-content`, `align-items`) when you are trying to layout and align multiple entire containers or elements relative to each other.
