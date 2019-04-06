const progressBar = document.querySelector('.carousel__progress-bar');
const button = document.getElementById('carousel-button');
const elem = document.querySelector('.carousel');

(function () {
  const template = document.getElementById('carousel-template').innerHTML;
  const output = document.getElementById('carousel');
  let slides = '';
  for (let i = 0; i < data.length; i++) {
    console.log(data);
    slides += Mustache.render(template, data[i]);
  }
  output.innerHTML = slides;
})();

window.initMap = function() {
  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: data[0].coords});
  for (let i = 0; i < data.length; i++) {
    let marker = new google.maps.Marker({ position: data[i].coords, map: map });
  }
}

let flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
});

button.addEventListener('click', function () {
  flkty.select(0);
});

flkty.on('scroll', function (progress) {
  progress = Math.max(0, Math.min(1, progress));
  progressBar.style.width = progress * 100 + '%';
});