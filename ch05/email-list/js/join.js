function setFirstName() {
  var urlString = window.location.href;
  var url = new URL(urlString);
  var firstName = url.searchParams.get("first_name");
  $("#first_name").text(firstName);
}

$(document).ready(function () {
  setFirstName();
});
