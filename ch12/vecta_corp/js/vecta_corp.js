$(document).ready(function () {
  $("#vecta_menu").highlightMenu({
    bgColor: "#dfe3e6",
    color: "#cc1c0d",
    hoverBgColor: "#cc1c0d",
    hoverColor: "#fff",
    linkWidth: "125px",
  });
  $("#tabs").tabs();

  /* // request data for teams section using XMLHttpRequest object
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var xmlDoc = xhr.responseXML;
      var team = xmlDoc.getElementsByTagName("teammember");
      var html = "";
      for (var i = 0; i < team.length; i++) {
        html +=
          "<b>" +
          xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue +
          "</b><br>" +
          xmlDoc.getElementsByTagName("title")[i].childNodes[0].nodeValue +
          "<br>" +
          xmlDoc.getElementsByTagName("bio")[i].childNodes[0].nodeValue +
          "<br><br>";
      }
      document.getElementById("teams").innerHTML = html;
    }
  };
  //xhr.open("GET", "team.xml", true);
  xhr.open("GET", "http://localhost:3000/team.xml", true);
  xhr.send();
  // end xmlhttprequest */

  /* load html data when a link is clicked */
  $("#vprospect").click(function (evt) {
    $("#solution").load("http://localhost:3000/solutions.html #vprospect");
    evt.preventDefault();
  });
  $("#vconvert").click(function (evt) {
    $("#solution").load("http://localhost:3000/solutions.html #vconvert");
    evt.preventDefault();
  });
  $("#vretain").click(function (evt) {
    $("#solution").load("http://localhost:3000/solutions.html #vretain");
    evt.preventDefault();
  });

  /* load xml data using $.get() method 
  $.get("http://localhost:3000/team.xml", function (data) {
    $("#teams").html("");
    $(data)
      .find("management")
      .children()
      .each(function () {
        var xmlDoc = $(this);
        $("#teams").append(
          "<b>" +
            xmlDoc.find("name").text() +
            "</b><br>" +
            xmlDoc.find("title").text() +
            "<br>" +
            xmlDoc.find("bio").text() +
            "<br>",
        );
      });
  });*/

  /* get json data using getJSON method 
  $.getJSON("http://localhost:3000/team.json", function (data) {
    $.each(data, function () {
      $.each(this, function (key, value) {
        $("#teams").append("<b>" + value.name + "</b><br>" + value.title + "<br>" + value.bio + "<br><br>");
      });
    });
  });*/

  /* load data with $.ajax method 
  $.ajax({
    type: "get",
    url: "http://localhost:3000/team.xml",
    beforeSend: function () {
      $("#teams").html("Loading...");
    },
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
      $("#teams").html("");
    },
    dataType: "xml",
    success: function (data) {
      $("#teams").html("");
      $(data)
        .find("management")
        .children()
        .each(function () {
          var xmlDoc = $(this);
          $("#teams").append(
            "<b>" +
              xmlDoc.find("name").text() +
              "</b><br>" +
              xmlDoc.find("title").text() +
              "<br>" +
              xmlDoc.find("bio").text() +
              "<br>",
          );
        });
    },
  });*/

  /* get team members from flickrs api */
  var flickrUrl =
    "https://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vecta_corp";

  $.getJSON(flickrUrl, function (data) {
    var html = "";
    $.each(data.items, function (i, item) {
      html += "<h3>" + item.title + "</h3>";
      html += item.description; // description in html format
      // remove first paragraph of the description
      html = html.replace(
        '<p><a href="https://www.flickr.com/people/82407828@N07/">zakruvalcaba</a> posted a photo:</p>',
        "",
      );
    });
    $("#teams").html(html);
  });
});
