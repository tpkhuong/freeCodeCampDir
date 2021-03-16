var paragraphElement = document.querySelector(".projects-link-container");
var anchorElement = document.querySelector(".projects-link");
var codeElement = document.querySelectorAll(".projects-code-icon");

function showCodeIcons(anchor, addClass) {
  //   anchor.addEventListener("mouseover", function changeOpacity(event) {
  //     code.forEach(function printElement(element) {
  //       element.classList.add("active");
  //     });
  //   });\
  anchor.addEventListener("mouseover", function TODO(event) {
    // var { all } = style;
    console.dir(addClass.style);
    // console.log(length);
    addClass.classList.add("active");
  });
  anchor.addEventListener("mouseout", function TODO(event) {
    addClass.classList.remove("active");
  });
}

showCodeIcons(anchorElement, paragraphElement);
/*
How to get the scroll position of the current page?
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// Example
getScrollPosition(); // {x: 0, y: 200}
*/
