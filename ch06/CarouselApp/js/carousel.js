$(document).ready(function () {
  var slider = $("#image_list");
  var leftProperty, newLeftProperty;

  $("#left_button").click(function () {
    leftProperty = parseInt(slider.css("left"));

    if (leftProperty < 0) {
      newLeftProperty = leftProperty + 300;
    } else {
      newLeftProperty = 0;
    }

    // use animate method to change left property
    slider.animate(
      {
        left: newLeftProperty,
      },
      1000,
    );
  });

  $("#right_button").click(function () {
    leftProperty = parseInt(slider.css("left"));

    if (leftProperty - 300 <= -900) {
      newLeftProperty = 0;
    } else {
      newLeftProperty = leftProperty - 300;
    }

    // use animate method to change left property
    slider.animate(
      {
        left: newLeftProperty,
      },
      1000,
    );
  });
});
