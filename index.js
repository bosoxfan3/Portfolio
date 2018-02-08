'use strict';

const STATE = {
  restfull: [
    {url: './RestFullPics/Landing.png',
      alt: 'RestFull landing page'},
    {url: './RestFullPics/Stats.png',
      alt: 'RestFull stats page'},
    {url: './RestFullPics/Sleeps.png',
      alt: 'RestFull sleeps page'}
  ],
  currentRestFullPic: 1,
  woofle: [
    {url: './WooflePics/Landing.png',
      alt: 'Woofle landing page'},
    {url: './WooflePics/Search.png',
      alt: 'Woofle breed search page'},
    {url: './WooflePics/Results.png',
      alt: 'Woofle search results'}
  ],
  currentWooflePic: 1,
  boredBeforeBoard: [
    {url: './BoredBeforeBoardPics/Landing.png',
      alt: 'BoredBeforeBoard landing page'},
    {url: './BoredBeforeBoardPics/TrainSearch.png',
      alt: 'BoredBeforeBoard train time search'},
    {url: './BoredBeforeBoardPics/YouTube.png',
      alt: 'BoredBeforeBoard youtube search'},
    {url: './BoredBeforeBoardPics/TicTacToe.png',
      alt: 'BoredBeforeBoard tictactoe game'}
  ],
  currentBoredBeforeBoardPic: 1
};

function renderRestFullImage() {
  let result = `<img class="portfolio-img" src="${STATE.restfull[STATE.currentRestFullPic].url}"
                alt="${STATE.restfull[STATE.currentRestFullPic].alt}">`;
  $('#restfull-screenshots').html(result);
}

function renderWoofleImage() {
  let result = `<img class="portfolio-img" src="${STATE.woofle[STATE.currentWooflePic].url}"
                alt="${STATE.woofle[STATE.currentWooflePic].alt}">`;
  $('#woofle-screenshots').html(result);
}

function renderBoredBeforeBoardImage() {
  let result = `<img class="portfolio-img" src="${STATE.boredBeforeBoard[STATE.currentBoredBeforeBoardPic].url}"
                alt="${STATE.boredBeforeBoard[STATE.currentBoredBeforeBoardPic].alt}">`;
  $('#bored-screenshots').html(result);
}

$('.js-restfull-button').click(event => {
  event.preventDefault();
  renderRestFullImage();
  STATE.currentRestFullPic++;
  if (STATE.currentRestFullPic === 3) {
    STATE.currentRestFullPic = 0;
  }
});

$('.js-woofle-button').click(event => {
  event.preventDefault();
  renderWoofleImage();
  STATE.currentWooflePic++;
  if (STATE.currentWooflePic === 3) {
    STATE.currentWooflePic = 0;
  }
});

$('.js-bored-button').click(event => {
  event.preventDefault();
  renderBoredBeforeBoardImage();
  STATE.currentBoredBeforeBoardPic++;
  if (STATE.currentBoredBeforeBoardPic === 4) {
    STATE.currentBoredBeforeBoardPic = 0;
  }
});

$('.logo').click(event => {
  event.preventDefault();
  $('.js-landing-page').removeAttr('hidden');
  $('#footer').removeAttr('hidden');
  $('.js-bio-page').attr('hidden', true);
  $('.js-portfolio-page').attr('hidden', true);
});

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