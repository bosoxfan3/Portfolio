'use strict';

const STATE = {
  pick16: [
    {url: './Pick16Pics/LangingPage.png',
      alt: 'Pick 16 landing page'},
    {url: './Pick16Pics/Leaderboard.png',
      alt: 'Pick 16 leaderboard page'},
    {url: './Pick16Pics/MakePics.png',
      alt: 'Pick 16 make picks page'},
    {url: './Pick16Pics/MyPicks.png',
      alt: 'Pick 16 my picks page'}
  ],
  currentPick16Pic: 1,
  restfull: [
    {url: './RestFullPics/Landing.jpg',
      alt: 'RestFull landing page'},
    {url: './RestFullPics/Stats.jpg',
      alt: 'RestFull stats page'},
    {url: './RestFullPics/Sleeps.jpg',
      alt: 'RestFull sleeps page'}
  ],
  currentRestFullPic: 1,
  woofle: [
    {url: './WooflePics/Landing.jpg',
      alt: 'Woofle landing page'},
    {url: './WooflePics/Search.jpg',
      alt: 'Woofle breed search page'},
    {url: './WooflePics/Results.jpg',
      alt: 'Woofle search results'}
  ],
  currentWooflePic: 1,
  boredBeforeBoard: [
    {url: './BoredBeforeBoardPics/Landing.jpg',
      alt: 'BoredBeforeBoard landing page'},
    {url: './BoredBeforeBoardPics/TrainSearch.jpg',
      alt: 'BoredBeforeBoard train time search'},
    {url: './BoredBeforeBoardPics/YouTube.jpg',
      alt: 'BoredBeforeBoard youtube search'},
    {url: './BoredBeforeBoardPics/TicTacToe.jpg',
      alt: 'BoredBeforeBoard tictactoe game'}
  ],
  currentBoredBeforeBoardPic: 1
};

function renderPick16Image() {
  let result = `<img class="portfolio-img" src="${STATE.pick16[STATE.currentPick16Pic].url}"
                alt="${STATE.pick16[STATE.currentPick16Pic].alt}">`;
  $('#pick16-screenshots').html(result);
}

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

$('.js-pick16-button').click(event => {
  event.preventDefault();
  renderPick16Image();
  STATE.currentPick16Pic++;
  if (STATE.currentPick16Pic === 3) {
    STATE.currentPick16Pic = 0;
  }
});

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