document.addEventListener('DOMContentLoaded', function() {
  console.log('app.js loaded');

  const pixabayAPIService = PixabayAPIService();
  const domService        = DOMService();


  pixabayAPIService.getImages(domService.getCarouselContainer())


  domService.getPreviousButton().addEventListener('click', event => {
    event.preventDefault();
    domService.slideImages('left');
  });

  domService.getNextButton().addEventListener('click', event => {
    event.preventDefault();
    domService.slideImages('right');
    getMostCentered();
  });


    // Use getBoundingClientRect to for element position.
    function itemBounds(el) {
      if (el) {
        const bound = el.getBoundingClientRect();
        const width = bound.width;
        const left = bound.x;
        const right = left + width;
        return {left: left, right: right, width: width};
      }
    }

  function getMostCentered() {
    const carousel = document.getElementById('test');
    const items = carousel.getElementsByTagName('div');
    // console.log(typeof items);

    // Find center of the carousel
    const bounds = itemBounds(carousel);
    // console.log('bounds', bounds);

    const center = bounds.left + (bounds.width / 2);
    console.log('center', center);


    for (var i = 0; i < items.length; i++) {
      // console.log('items', items);
      const previous = itemBounds(items[i-1]);
      const current = itemBounds(items[i]);
      // console.log('current div', current);
      const next = itemBounds(items[i+1]);
      console.log('next', items[i+1]);


    // Find the first item whose left edge is past the center 
      // and compare it with the previous item to see which is closer
      if ((next && next.left) > center) {
        console.log('true 1', items[i]);

        if ((next.left - center < center) - current.right) {
            console.log('true 2', items[i+1]);

            return items[i+1];
        } else {
          console.log('else', items[i+1]);
          return items[i];
        }

      // If we've hit the last item then it must be closest
      } else if (!next) {
        console.log('elseif', items[i+1]);
        return items[i];
      }

   }
  }

});
