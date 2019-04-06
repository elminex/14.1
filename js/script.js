const elem = document.querySelector('.carousel');
const button = document.getElementById('carousel-button');
const progressBar = document.querySelector('.carousel__progress-bar');
let flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
    contain: true,
  hash: true,
  pageDots: false,
});

button.addEventListener('click', function () {
  flkty.select(0);
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});