$(document).ready(function () {
$('.container').on('click', newContainer);
$('.button').on('click', countClicks);
$('.container').on('click', '.deletebutton', deleteClick);
$('.container').on('click', '.changebutton', changeClick);
  });



  function newContainer(){
    $('.container').append('<div class = "new"></div>');
    var $el = $('.container').children().last();

    $el.append('<button class = "deletebutton">Delete</button>');
    $el.append('<button class = "changebutton">Change</button>');

  }
  var counter = 0;

  function countClicks(){
    counter++;
    $('.container').append('<div class="counter"></div>');
    var $el = $('.container').children().last();
    $el.append('<p>This is how many times the generate button has been clicked: ' + counter + '</p>');
  }

  function deleteClick(){
    $(this).parent().remove();
  }

  function changeClick(){
  $(this).toggleClass('change');
  }
