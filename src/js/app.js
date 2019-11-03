document.addEventListener('DOMContentLoaded', function() {
	const pixabayAPIService = PixabayAPIService();
	const domService        = DOMService();
  
	pixabayAPIService.getImages(domService.getItemsContainer());
	domService.getViewPortWidth().addListener(domService.checkViewPortWidth())
  
	domService.getPreviousButton().addEventListener('click', event => {
	//   event.preventDefault();
	  domService.slideImages('left');
	});
  
	domService.getNextButton().addEventListener('click', event => {
	//   event.preventDefault();
	  domService.slideImages('right');
	  getMostCentered();
	});
  
	const getMostCentered = () => {
	  const items = domService.getCarouselContainer().getElementsByTagName('div');
	  // Find center of the carousel
	  const bounds = domService.calculateItemBounds(domService.getCarouselContainer());
	  const center = bounds.left + (bounds.width / 2); 
  
	  for (var i = 0; i < items.length; i++) {
		const current = domService.calculateItemBounds(items[i]);
		const next = domService.calculateItemBounds(items[i+1]);
		// Find the first item whose left edge is past the center 
		if ((next && next.left) > center) {
		  if ((next.left - center < center) - current.right) {
			console.log(items[i+1]);
			  return items[i+1];
		  } 
		} 
	  }
	}
  });