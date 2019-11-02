function PixabayAPIService() {
    const searchURL = 'https://pixabay.com/api/';
    const apikey    = 'a4094594c34f9ac14c7fc4c39';

    function getImages(carouselContainer) {
      fetch(`${searchURL}?key=9656065-${apikey}&q=beautiful+landscape&image_type=photo&page=1&per_page=6`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('data', data);
          console.log(typeof data);

          let result = '';
          data.hits.forEach(elem => {
            
            let result = document.createElement('div');
            result.classList.add('item');
            result.innerHTML = `<img src="${elem.largeImageURL}" />`;
            carouselContainer.append(result);
          });
        });
    }

    return {
      getImages
    };
  }