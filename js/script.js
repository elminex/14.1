(function () {
  const template = document.getElementById('carousel-template').innerHTML;
  const output = document.getElementById('carousel');
  let slides = '';
  for (var i = 0; i < data.length; i++) {
    console.log(data);
    slides += Mustache.render(template, data[i]);
  }
  output.innerHTML = slides;

})();


var elem = document.querySelector('.carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
    contain: true,
  hash: true,
  pageDots: false,
});

const button = document.getElementById('carousel-button');
button.addEventListener('click', function() {
    flkty.select(0);
})

const progressBar = document.querySelector('.carousel__progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});