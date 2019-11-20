/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | https://github.com/ReenaVerma/vanilla-carousel */
function PixabayAPIService() {
    const searchURL         = 'https://pixabay.com/api/';
    const apikey            = 'a4094594c34f9ac14c7fc4c39';
    const itemsContainer    = document.getElementById('items-container');

    function getImages(carouselContainer) {
      fetch(`${searchURL}?key=9656065-${apikey}&q=manhattan&image_type=photo&page=1&per_page=9`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('data', data);

          let result = '';
          data.hits.forEach(elem => {
            console.log(typeof elem.largeImageURL);
            result +=
                    `<div class="item animated fadeIn slow">
                       <a href="#"><img src="${elem.largeImageURL}" role="presentation" alt="Image of ${elem.tags}"/></a>
                       <p><strong>user:</strong> <br />${elem.user}</p>
                       <p><strong>likes:</strong> <br />${elem.likes}
                     </div>`;
            carouselContainer.innerHTML = result;
          });

          const backGroundImage = data.hits[1].largeImageURL;
          document.getElementById('header').style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${backGroundImage})`;
          document.getElementById('header').style.backgroundRepeat = 'no-repeat';

          // THIS CODE CENTRES THE CAROUSEL ON CLICK
          // const carouselItems = carouselContainer.children;
          // for (let i=0; i < carouselItems.length; i++) {
          //   carouselItems[i].setAttribute("index", i);

          //   //click handler to center the clicked item
          //   carouselItems[i].onclick = function(e) {
          //       let slide = e.currentTarget;
          //       let slideWidth = slide.getBoundingClientRect().width;
          //       let slideIndex = parseInt(slide.getAttribute("index"));
          //       let newLeft = (slideIndex * slideWidth * -1) + Math.floor(((carouselContainer.getBoundingClientRect().width) / slideWidth) / 2) * slideWidth;
          //       document.getElementById("items-container").style.transition= "all 2s ease 0s";
          //       document.getElementById("items-container").style.left = newLeft + "px";
          //   }
          // }
        });
    }

    return {
      getImages
    };
  }