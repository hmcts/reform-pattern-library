(function (root) {


  "use strict";


  // check if element exists
  var element = document.querySelector("[data-js=drag-and-drop]");
  if (!element) return;
  
  
  // Dropzone class:
  var myDropzone = new Dropzone("#dropzone", { url: "/file/post"});


})(this);