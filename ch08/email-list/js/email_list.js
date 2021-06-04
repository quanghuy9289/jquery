$.validator.addMethod(
  "notEmpty",
  function (value, element) {
    return value != "";
  },
  "Please enter a value",
);

$(document).ready(function () {
  $("#email").focus();

  $("#email_form").validate({
    rules: {
      // use name attributes to refer to fields
      email: {
        required: true,
        email: true,
      },
      email2: {
        //required: true,
        notEmpty: true,
        equalTo: "#email",
      },
      first_name: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Please supply an email address",
        email: "This is not a valid email address",
      },
      email2: {
        required: "Please supply an email address",
        notEmpty: "not empty please",
        email: "This is not a valid email address",
        equalTo: "This entry must equal first entry",
      },
      first_name: {
        required: "Please supply a first name",
      },
    },
  });
});
