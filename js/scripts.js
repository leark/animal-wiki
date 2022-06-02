$(document).ready(function () {
  $('.clickable').click(function () {
    $(this).siblings('.hidden').toggle();
  });
});
