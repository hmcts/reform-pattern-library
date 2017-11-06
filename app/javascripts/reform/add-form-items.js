function addFormItems () {


  "use strict";


  var element   = document.querySelector("[data-js=form]");


  // does the element exist on the page?
  if (typeof(element) != "undefined" && element != null) {


    var formItems = document.getElementById("form-items");
    var addItem   = document.getElementById("add-form-item");
    var count     = 3;


    // add form item
    function addFormItem() {

      count ++; // increment counter

      var formItem = '<div class="form-group">' +
                     '<label class="form-label-bold" for="example-' + count + '">Example ' + count + '</label>' +
                     '<textarea class="form-control form-control-3-4" rows="3" id="example-' + count + '" name="example-' + count + '">My husband/wife &hellip;</textarea>' +
                     '</div>';

      formItems.insertAdjacentHTML("beforeend", formItem);

    }


    // listen for click events
    addItem.addEventListener("click", function(e) {

      e.preventDefault();

      addFormItem();

    }, false);


  }


}


window.addEventListener("load", function() {
  addFormItems();
});
