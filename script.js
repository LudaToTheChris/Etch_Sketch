$(document).ready(function() {

  //setups default configuration
  $('.holder').append('<div>');
  $('.holder').append('<div>');
  $('.holder').append('<div>');
  $('.holder').append('<div>');
  $('.holder').append('<div>');
  $('.holder').append('<div>');
  $('.holder').append('<div>');
  $('.holder').append('<div>');

  //Adds the hover class
  $('.holder div').hover(function() {
    var hue = 'rgb(' + (Math.floor((1 - 255) * Math.random()) + 200) + ',' + (Math.floor((1 - 255) * Math.random()) + 200) + ',' + (Math.floor((1 - 255) * Math.random()) + 200) + ')';
    $(this).css("background-color", hue);
  });
});
//Returns the square to blue
function clearFunc() {
  $('.holder div').css("background-color", 'blue');
  //Adds the hover class
  $('.holder div').hover(function() {
    var hue = 'rgb(' + (Math.floor((1 - 255) * Math.random()) + 200) + ',' + (Math.floor((1 - 255) * Math.random()) + 200) + ',' + (Math.floor((1 - 255) * Math.random()) + 200) + ')';
    $(this).css("background-color", hue);
  });
}
//alows you to customize how many squares you want
function custom() {
  var userValue = document.getElementById('entryBox').value;
  $('.holder').empty('<div>');
  alert(userValue);

  var textBox = $('.holder').children('div').length;
  if (textBox < userValue) {
    while (textBox < userValue) {
      $('.holder').append('<div>');
      var textBox = textBox + 1;
      $('.holder div').hover(function() {
        $(this).addClass('hover')
      });
    }
  } else {
    alert("Please provide a number that is greater than 0. Please enjoy the default configuration :)");

    //setups default configuration
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');
    $('.holder').append('<div>');

    //adds random color to each square
    $('.holder div').hover(function() {
    var hue = 'rgb(' + (Math.floor((1 - 255) * Math.random()) + 200) + ',' + (Math.floor((1 - 255) * Math.random()) + 200) + ',' + (Math.floor((1 - 255) * Math.random()) + 200) + ')';
      $(this).css("background-color", hue);
    });
  }
}
//Tells you how many boxes are on screen
function howManyFunc() {
  var textBox = $('.holder').children('div').length;
  alert(textBox);
}
