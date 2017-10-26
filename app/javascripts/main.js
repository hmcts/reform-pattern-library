function ajaxLoading() {

  var xhr = new XMLHttpRequest();

  xhr.open('GET', '/public/data/example.jsons');

  xhr.onload = function() {
      if (xhr.status === 200) {
          console.log(xhr.responseText);
      }
      else {
          console.log('Request failed: ' + xhr.status);
      }
  };

  xhr.send();


}


function postcodeLookup() {


  "use strict";


  // get elements
  var postcodeButton = document.getElementById("postcode-button");
  var postcodeLookup = document.getElementById("postcode-lookup");
  var postcodeAddresses = document.getElementById("postcode-addresses");
  var postcodeSelect = document.getElementById("postcode-select");
  var manualAddress = document.getElementById("manual-address");

  var addressLine1 = document.getElementById("address-line-1");
  var addressLine2 = document.getElementById("address-line-2");
  var townOrCity = document.getElementById("town-or-city");
  var county = document.getElementById("county");
  var postcode = document.getElementById("postcode");


  var xmlhttp = new XMLHttpRequest();

  var url = "/public/data/addresses.json";

  xmlhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
          var myArr = JSON.parse(this.responseText);
          myFunction(myArr);
      }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();


  function myFunction(arr) {


      // reset elements
      function resetFields() {

          // reset fields
          addressLine1.value = null;
          addressLine2.value = null;
          townOrCity.value = null;
          county.value = null;
          postcode.value = null;

          manualAddress.className = "hidden";
          postcodeAddresses.className = "hidden";

      }


      // filter by postcode
      function postcodeFilter(event) {

          event.preventDefault();

          resetFields();

          if (postcodeLookup !== "") {

              var i;
              var content = "";

              var addresses = arr.filter(function(el, index, arr) {
                  return el.postcode === postcodeLookup.value;
              });

              content += "<div class=\"form-group\">" +
                         "<label class=\"form-label-bold\" for=\"postcode-select\">Select an address</label>" +
                         "<select class=\"form-control form-control-3-4\" id=\"postcode-select\" name=\"postcodeSelect\">"

              if (addresses.length > 1) {

                  postcodeAddresses.className = "";

                  // populate select
                  content += "<option>" + addresses.length + " addresses found</option>";

                  for (i = 0; i < addresses.length; i++) {
                      content += "<option value=" + i + ">" + (addresses[i].building_name || addresses[i].building_number + " " + addresses[i].thoroughfare) + ", " + addresses[i].post_town + ", " + addresses[i].postcode + "</option>";
                  }

              } else {

                  // no results found
                  content += "<option>No addresses found with that postcode</option>";

              }

              content += "</select>" +
                         "</div>"

              postcodeAddresses.innerHTML = content;

          }

      }


      // filter by postcode and array index
      function addressFilter() {

          var selectedIndex = document.getElementById("postcode-select").selectedIndex;

          var address = arr.filter(function(el, index, arr) {
              return el.postcode === postcodeLookup.value;
          });

          if (selectedIndex > 0) {

              selectedIndex --;

              manualAddress.className = "";

              // populate address fields
              addressLine1.value = (address[selectedIndex].building_name || address[selectedIndex].building_number);
              addressLine2.value = address[selectedIndex].thoroughfare;
              townOrCity.value = address[selectedIndex].post_town;
              county.value = address[selectedIndex].county;
              postcode.value = address[selectedIndex].postcode;

          } else {

              addressLine1.value = null;
              addressLine2.value = null;
              townOrCity.value = null;
              county.value = null;
              postcode.value = null;

          }

      }


      // event listeners
      postcodeButton.addEventListener("click", postcodeFilter, false);
      postcodeAddresses.addEventListener("change", addressFilter, false);

  }


}


window.onload = function(){
  //ajaxLoading();
  postcodeLookup();
};
