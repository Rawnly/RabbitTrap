$(document).ready(function() {

  console.log(`
    AUTHOR: Federico Vitale - Rawnly
    Website: https://rawnly.com
    Email: fedevitale99@gmail.com
  `);

  var countDownDate = new Date("Sept 21, 2017 00:00:00").getTime();
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('#days    .counter').html(days)
  $('#hours   .counter').html(hours)
  $('#minutes .counter').html(minutes)
  $('#seconds .counter').html(seconds)

  var timer = setInterval(function () {
    var countDownDate = new Date("Sept 21, 2017 00:00:00").getTime();
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days .counter').html(days)
    $('#hours .counter').html(hours)
    $('#minutes .counter').html(minutes)
    $('#seconds .counter').html(seconds)
  }, 1000);

  if (countDownDate == now) {
    clearInterval(timer);
  }


  $('.particles').particleground({
    dotColor: '#222',
    lineColor: '#222'
  })

  if ($(window).scrollTop() >= 826) {
    $('.menu').css('position', 'fixed').css('height', '0px');
  } else {
    $('.menu').css('position', 'absolute').css('height', '100vh');
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 826) {
      $('.menu').css('position', 'fixed').css('height', '0px');
    } else {
      $('.menu').css('position', 'absolute').css('height', '100vh');
    }
  })

  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $('[id="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
  });
});
