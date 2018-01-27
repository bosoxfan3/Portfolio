'use strict';

$('.logo').click(event => {
  event.preventDefault();
  $('.js-landing-page').removeAttr('hidden');
  $('#footer').removeAttr('hidden');
  $('.js-bio-page').attr('hidden', true);
  $('.js-portfolio-page').attr('hidden', true);
})

$('.js-bio-link').click(event => {
  event.preventDefault();
  $('.js-landing-page').attr('hidden', true);
  $('#footer').attr('hidden', true);
  $('.js-bio-page').removeAttr('hidden');
  $('.js-portfolio-page').attr('hidden', true);
});

$('.js-portfolio-link').click(event => {
  event.preventDefault();
  $('.js-landing-page').attr('hidden', true);
  $('#footer').attr('hidden', true);
  $('.js-bio-page').attr('hidden', true);
  $('.js-portfolio-page').removeAttr('hidden');
});