$(document).ready(function () {
  // because h2 element for new input employee isn't include in the DOM when run this attach event handler
  // "on" method must be used so user can click on a new name to display the information for that employee
  // attach event handler like this is referred to as delegated
  $("#accordion").on("click", "h2", function () {
    $(this).toggleClass("minus");
    if ($(this).attr("class") != "minus") {
      $(this).next().slideUp();
    } else {
      $(this).next().slideDown();
    }
  }); // end click

  // attach click event handler as directly bound
  $("#add").click(function () {
    var html = "";
    html += "<h2><a href='#'>" + $("#name").val() + "</a></h2>";
    html += "<div><h3>" + $("#position").val() + "</h3>";
    html += "<p>" + $("#description").val() + "</p></div>";
    $("#accordion").append(html); // append to the end
    $("#name").val("");
    $("#position").val("");
    $("#description").val("");
  }); // end click
}); // end ready
