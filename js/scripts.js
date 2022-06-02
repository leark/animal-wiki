$(document).ready(function () {
  $('.clickable').click(function () {
    let animalDesc = $('.hidden');
    if (animalDesc[0].style.display === 'block') {
      animalDesc[0].style.display = 'none';
    }
    if (animalDesc[1].style.display === 'block') {
      animalDesc[1].style.display = 'none';
    }
    if (animalDesc[2].style.display === 'block') {
      animalDesc[2].style.display = 'none';
    }
    $(this).siblings('.hidden').toggle();
  });
});
