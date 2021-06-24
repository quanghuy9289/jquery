$(document).ready(function () {
  $("#vecta_menu").highlightMenu({
    bgColor: "#dfe3e6",
    color: "#cc1c0d",
    hoverBgColor: "#cc1c0d",
    hoverColor: "#fff",
    linkWidth: "125px",
  });

  //BUTTON
  $("#submitbutton").button();

  //DIALOG
  $("#help").click(function () {
    $("#helpdialog").dialog({
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
      },
    });
  });

  //DATEPICKER
  $("#datepicker").datepicker();

  // handle submit form
  $("#contactForm").submit(function () {
    var formData = $("#contactForm").serializeArray();
    // do request
    $.post("http://localhost:3000/profiles", formData, function (data) {
      // handle return data
      alert("Send contact successful!");
    });
  });
});
