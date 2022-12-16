# Draw an SVG Path Element on Scroll

This is an example of using JavaScript in a web browser to draw an SVG path as
the page is scrolled.

## Usage
1. Add the svg to an `<object>` element.

``` HTML
<object id="svg-object" type="image/svg+xml" data="path/to/final_tree_line_svg_opt.svg" class="svg-img full-viewport-height">
  [ Text to show in case svg isn't loaded. ]
</object>
```

2. Link the JavaScript file in the bottom of the `body` tag.

3. Add an event listener to the window that hides the svg object when the page
   loads. `svg-object` is the id of the `<object>` element.

``` JavaScript
window.addEventListener("load", function() {
  // The svg object element is initially set to hidden visibility in css to
  // prevent the svg from showing when the page loads.
  document.getElementById("svg-object").style.visibility = "visible";
  hideSvgPath("svg-object");
});
```

4. Add an event listener to the window that updates the amount of the path to
   show based on the current amount scrolled. `svg-object` is the id of the
   `<object>` element.

``` JavaScript
window.addEventListener("scroll", event => {
  updateShownPath("svg-object");
});
```
