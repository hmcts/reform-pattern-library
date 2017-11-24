// task list
(function(root) {

    "use strict";

    // check if element exists
    var element = document.querySelector("[data-js=task-list]");
    if (!element) return;


    // gets all tasklists
    var tasklists = document.querySelectorAll(".task-list");


    Array.prototype.forEach.call(tasklists, function(tasklist) {


        // get all steps
        var steps = tasklist.querySelectorAll(".task-list__step");


        steps.forEach(function(step, index) {


            // get elements
            var header = step.querySelector(".task-list__header");
            var title = step.querySelector(".task-list__title");
            var toggle = step.querySelector(".task-list__toggle");
            var panel = step.querySelector(".task-list__panel");


            // add button for accessibility purposes
            wrapInner(title, "button", "class", "task-list__button");


            var button = step.querySelector(".task-list__button");


            button.setAttribute("id", "button-" + (index + 1));
            button.setAttribute("aria-expanded", false);
            button.setAttribute("aria-controls", "panel-" + (index + 1));


            panel.setAttribute("id", "panel-" + (index + 1));
            panel.setAttribute("role", "region");
            panel.setAttribute("aria-labelledby", "button-" + (index + 1));


            // add click handler
            header.addEventListener("click", function(event, element) {

                var isExpanded = button.getAttribute("aria-expanded") == "true";

                if (isExpanded) {

                    button.setAttribute("aria-expanded", false);
                    panel.classList.add("js-hidden");
                    toggle.innerText = "Show";

                } else {

                    button.setAttribute("aria-expanded", true);
                    panel.classList.remove("js-hidden");
                    toggle.innerText = "Hide";

                }

                event.preventDefault();

            }, false);


        });


    });


})(this);


// helper functions
function wrapInner(parent, wrapper, attribute, attributevalue) {

    if (typeof wrapper === "string") {
        wrapper = document.createElement(wrapper);
    }

    var div = parent.appendChild(wrapper).setAttribute(attribute, attributevalue);

    while (parent.firstChild !== wrapper) {
        wrapper.appendChild(parent.firstChild);
    }

}