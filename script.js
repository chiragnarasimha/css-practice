/**
 * This function will scroll smoothly to the defined anchor element. It adds an click event listner to prevent the default behaviour. Has support for callback functions.
 * @param {HTMLAnchorElement} anchor The anchor Element of interest.
 * @param {Number} delayScroll Optional. Time in milliseconds to delay the scroll.
 * @param {Function} cb Optional. Call back function
 */
const smoothScrollToAnchor = (anchor, delayScroll = 0, cb = undefined) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (typeof cb === "function") {
      cb();
    }

    setTimeout(function () {
      let href = anchor.getAttribute("href");
      let elem =
        document.querySelector(href) ||
        document.querySelector(
          "a[name=" + href.substring(1, href.length) + "]"
        );
      window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }, delayScroll);
  });
};

/**
 * Close the nav bar when clicking on an element
 * Smoothly scroll to the section selected
 */
let navBarUl = document.getElementById("navigation__list");
navBarUl.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  smoothScrollToAnchor(anchor, 500, () => {
    document.getElementById("navi-toggle").click();
  });
});
/**
 * Adding smooth scrolling effect to other hrefs
 */
smoothScrollToAnchor(document.getElementById("btn-Header-discoverOurTours"));
smoothScrollToAnchor(document.getElementById("btn-section-about-learnMore"));
smoothScrollToAnchor(
  document.getElementById("btn-section-tours-discoverAllTours")
);
smoothScrollToAnchor(
  document.getElementById("btn-section-stories-readAllStories")
);
