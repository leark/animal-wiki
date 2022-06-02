$(document).ready(function () {
  $('.clickable').click(function () {
    let thisOff = $(this).siblings('.hidden').css('display') === 'none';

    let animalDesc = $('.hidden');
    if (animalDesc[0].style.display === 'block') {
      // .hide() works on jQuery element but not on regular DOM
      $(animalDesc[0]).hide();
    }
    if (animalDesc[1].style.display === 'block') {
      $(animalDesc[1]).hide();
    }
    if (animalDesc[2].style.display === 'block') {
      $(animalDesc[2]).hide();
    }
    if (thisOff) {
      $(this).siblings('.hidden').toggle();
    } else {
      $(this).siblings('.hidden').hide();
    }
  });
});
