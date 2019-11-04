/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function PixabayAPIService() {
    const searchURL = 'https://pixabay.com/api/';
    const apikey    = 'a4094594c34f9ac14c7fc4c39';

    function getImages(carouselContainer) {
      fetch(`${searchURL}?key=9656065-${apikey}&q=manhattan&image_type=photo&page=1&per_page=9`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('data', data);
          // console.log(type)

          let result = '';
          data.hits.forEach(elem => {
            console.log(typeof elem.largeImageURL);
            result +=
                    `<div class="item animated fadeIn slow">
                       <a href="#"><img src="${elem.largeImageURL}" /></a>
                       <p><strong>poster:</strong> <br />${elem.user}</p>
                       <p><strong>tags:</strong> <br />${elem.tags}
                     </div>`;
            carouselContainer.innerHTML = result;
          });

          const backGroundImage = data.hits[1].largeImageURL;
          document.getElementById('header').style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${backGroundImage})`;
          document.getElementById('header').style.backgroundRepeat = 'no-repeat';
        });
    }

    return {
      getImages
    };
  }