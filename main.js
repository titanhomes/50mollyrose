$(document).ready(function() {
  window.setTimeout(function() {
    $('.for-rent').removeClass('puff-in-center');
  }, 700);
  window.setTimeout(function() {
    $('.for-rent').addClass('slide-up');
    $('.landing').addClass('bg-img');
  }, 1000);
});