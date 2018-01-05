(function (root) {


  "use strict";


  // check if element exists
  var element = document.querySelector("[data-js=form]");
  if (!element) return;


  var formItems = document.getElementById("form-items");
  var addItem   = document.getElementById("add-form-item");
  var count     = 3;


  // add form item
  function addFormItem() {

    count ++; // increment count

    var formItem = '<div class=\"form-group\">' +
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


})(this);