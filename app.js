document.addEventListener('DOMContentLoaded', function() {
  console.log('app.js loaded');

  const pixabayAPIService = PixabayAPIService();
  const carouselContainer = document.getElementById('carousel-container');
  const previousButton    = document.getElementById('previous');
  const nextButton        = document.getElementById('next');
  let count               = 0;

  console.log('count', count);

  pixabayAPIService.getImages(carouselContainer);



  slideImages = (direction) => {
    const totalChildren = carouselContainer.getElementsByTagName('div').length;
    console.log('totalChildren', totalChildren);

    direction === 'left' ? count ++ : count --;
    console.log('updated count', count);

    carouselContainer.classList.add('horizTranslate');
    carouselContainer.style.left = count * 200 + 'px';
    carouselContainer.classList.add("slideOutLeft")

    previousButton.style.display = count < 0 ? 'block' : 'none';
    nextButton.style.display = count > 5 - totalChildren ? 'block' : 'none';
  }

  previousButton.addEventListener('click', event => {
    event.preventDefault();
    slideImages('left');
  });

  nextButton.addEventListener('click', event => {
    event.preventDefault();
    slideImages('right');
  });

  if (count === -1) {

  }
});
