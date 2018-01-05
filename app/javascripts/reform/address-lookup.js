(function (root) {


  "use strict";


  // check if element exists
  var element = document.querySelector("[data-js=address-lookup]");
  if (!element) return;


  // get elements
  var addressLookup = document.getElementById("address-lookup-form-control");
  var addressLookupButton = document.getElementById("address-lookup-button");
  var addressLookupAddresses = document.getElementById("address-lookup-addresses");
  var addressLookupManualAddress = document.getElementById("address-lookup-manual-address");

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

        addressLookupManualAddress.className = "hidden";
        addressLookupAddresses.className = "hidden";

    }


    // tests to see if string is in correct UK style postcode: NW1 5DA, NW1 4QA etc
    function isValidPostcode(p) {
        var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
        return postcodeRegEx.test(p);
    }


    function formatPostcode(p) {
      if (isValidPostcode(p)) {
          var postcodeRegEx = /(^[A-Z]{1,2}[0-9]{1,2})([0-9][A-Z]{2}$)/i;
          return p.replace(postcodeRegEx,"$1 $2");
      } else {
          return p;
      }
    }


    // filter by postcode
    function postcodeFilter(event) {

        event.preventDefault();

        resetFields();

        var i;
        var content = "";

        var addresses = arr.filter(function(el, index, arr) {
            return el.postcode === formatPostcode(addressLookup.value);
        });


        // perform checks
        if ( addressLookup.value === "" ) {

          console.log("Postcode field is empty");

        } else if ( isValidPostcode(addressLookup.value) === false ) {

          console.log("Postcode field is not valid");

        } else if ( isValidPostcode(addressLookup.value) === true && addresses.length < 1 ) {

          console.log("Postcode field has a valid postcode but no records returned");

          addressLookupAddresses.className = "";

          content += "<p>No addresses found.</p>";

          addressLookupAddresses.innerHTML = content;

        } else if ( isValidPostcode(addressLookup.value) === true && addresses.length > 1 ) {

          addressLookupAddresses.className = "";

          content += "<div class=\"form-group\">" +
                     "<label class=\"form-label-bold\" for=\"address-lookup-options\">Select an address</label>" +
                     "<select class=\"form-control form-control-3-4\" id=\"address-lookup-options\" name=\"addressLookupOptions\">" +
                     "<option>" + addresses.length + " addresses found</option>";

          for (i = 0; i < addresses.length; i++) {
              content += "<option value=" + i + ">" + (addresses[i].building_name || addresses[i].building_number + " " + addresses[i].thoroughfare) + ", " + addresses[i].post_town + ", " + addresses[i].postcode + "</option>";
          }

          content += "</select>" +
                     "</div>";

          addressLookupAddresses.innerHTML = content;

        }

    }


    // filter by postcode and array index
    function addressFilter() {

        var selectedIndex = document.getElementById("address-lookup-options").selectedIndex;

        var address = arr.filter(function(el, index, arr) {
            return el.postcode === formatPostcode(addressLookup.value);
        });

        if (selectedIndex > 0) {

            selectedIndex --;

            addressLookupManualAddress.className = "";

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
    addressLookupButton.addEventListener("click", postcodeFilter, false);
    addressLookupAddresses.addEventListener("change", addressFilter, false);


}


})(this);