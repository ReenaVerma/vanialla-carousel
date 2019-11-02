function PixabayAPIService() {
    const searchURL = 'https://pixabay.com/api/';
    const apikey    = 'a4094594c34f9ac14c7fc4c39';

    function getImages() {
      fetch(`${searchURL}?key=9656065-${apikey}&q=beautiful+landscape&image_type=photo`)
        .then((res) => {
          return res.json();

        })
        .then((data) => {
          console.log('data', data.hits);
        });
    }

    return {
      getImages
    };
  }