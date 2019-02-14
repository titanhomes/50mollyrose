$(document).ready(function() {
  window.setTimeout(function() {
    $('.for-rent').removeClass('puff-in-center');
  }, 1000);
  window.setTimeout(function() {
    $('.for-rent').addClass('slide-up');
    $('.starting').addClass('opacity');
  }, 1300);
});