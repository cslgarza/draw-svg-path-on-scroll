/**
 * @fileoverview Code for revealing an SVG path based on current scroll.
 */

/**
 * Hide the svg path with a stroke dasharray and offset.
 * @param {string} The HTML id of the svg object containing the path.
 */
function hideSvgPath(svgObjectId) {
  let path = getSvgPath(document.getElementById(svgObjectId).contentDocument)
  let pathLength = path.getTotalLength();

  // Hide the SVG line
  path.style.strokeDasharray = pathLength + ' ' + pathLength;
  path.style.strokeDashoffset = pathLength;
}

/**
 * Updates the stroke dash offset to either reveal or hide the SVG path 
 * depending on the current scrolled amount.
 * @param {string} The HTML id of the svg object container the path.
 */
function updateShownPath(svgObjectId) {
  let path = getSvgPath(document.getElementById(svgObjectId).contentDocument)
  let pathLength = path.getTotalLength();

  // Length to offset the dashes
  let drawLength = pathLength * getScrollPercentage();

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;
}

/**
 * Get the PATH element of the SVG object.
 * @param {object} The SVG element that contains the path to reveal or hide.
 * @returns {object} The path the will be revealed or hidden.
 */
function getSvgPath(svgObject) {
  return svgObject.querySelector('path');
}

/**
 * Get the scrolled amount.
 * @returns {number} The current scrolled amount.
 */
function getScrollPercentage() {
  return (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
}
