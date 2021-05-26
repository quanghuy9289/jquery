function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function joinListHandler() {
  var email = $("#email").val();
  var email2 = $("#email2").val();
  var firstName = $("#first_name").val();
  var isValid = true;

  // validation for email
  if (email == "") {
    $("#email_error").text("This field is required.");
    isValid = false;
  } else {
    isValid = validateEmail(email);
    if (!isValid) {
      $("#email_error").text("Email is not valid.");
    } else {
      $("#email_error").text("");
    }
  }

  // validation for email2
  if (email2 == "") {
    $("#email2_error").text("This field is required.");
    isValid = false;
  } else if (email2 != email) {
    $("#email2_error").text("This entry must equal first entry.");
    isValid = false;
  } else {
    $("#email2_error").text("");
  }

  // validation for first name
  if (firstName == "") {
    $("#first_name_error").text("This field is required.");
    isValid = false;
  } else {
    $("#first_name_error").text("");
  }

  if (isValid) {
    // submit form
    $("#email_form").submit();
  }
}

$(document).ready(function () {
  $("#join_list").click(joinListHandler);
  $("#email").focus();
});
