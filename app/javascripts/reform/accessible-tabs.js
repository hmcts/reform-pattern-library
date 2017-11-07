(function (root) {


  "use strict";


  // check if element exists
  var element = document.querySelector("[data-js=tabs]");
  if (!element) return;


  // a temporary value to cache what we're about to show
  var target = null;

  var tabsList = document.querySelectorAll(".tabs-list")[0];
  var tabs     = document.querySelectorAll(".tabs-toggle");
  var panels   = document.querySelectorAll(".tabs-panel");


  // collect all tabs
  tabs.forEach(function(element) {

    element.addEventListener("click", function() {

      target = document.querySelectorAll(this.hash)[0];

      target.id = "";

      if (location.hash === this.hash) {
        setTimeout(update);
      }

    });

  });


  // prepare tabs
  tabsList.setAttribute("role", "tablist");


  // get an array of the panel IDs (from the anchor hash)
  var targets = Array.prototype.map.call(tabs, function(el) {
    el.setAttribute("role", "tab");
    el.setAttribute("aria-controls", el.hash.substring(1));
    el.setAttribute("tabindex", 0);
    return el.hash;
  });


  // keep a copy of the original ID // (already defined)
  panels = Array.prototype.map.call(panels, function(el) {
    el.setAttribute("role", "tabpanel");
    el.setAttribute("data-id", el.id);
    return el;
  });


  function update() {

    if (target) {
      target.id = target.dataset.id;
      target = null;
    }

    var hash = window.location.hash;

    if (targets.indexOf(hash) !== -1) {
      return show(hash);
    }

    if (!hash) {
      show();
    }

  }


  function show(id) {


    // if no value was given, let's take the first panel
    if (!id) {
      id = targets[0];
    }


    tabs.forEach(function(el) {
      var match = el.hash === id;

      // Conditional (ternary) operator
      el.classList[match ? "add" : "remove"]("tabs-toggle-selected");
      el.setAttribute("aria-selected", match);
    });


    panels.forEach(function (el) {
      var match = "#" + el.id === id;

      // Conditional (ternary) operator
      el.classList[match ? "remove" : "add"]("js-hidden");
      el.setAttribute("aria-hidden", !match);
    });


  }


  // hashchange event listener
  window.addEventListener("hashchange", update);


  // initialise
  if (targets.indexOf(window.location.hash) !== -1) {
    update();
  } else {
    show();
  }


})(this);
