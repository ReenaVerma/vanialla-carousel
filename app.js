document.addEventListener('DOMContentLoaded', function() {
  console.log('app.js loaded');

  const carouselContainer = document.getElementById('carousel-container');
  const itemsContainer    = document.querySelector('.items-container');
  const previousButton    = document.getElementById('previous');
  const nextButton        = document.getElementById('next');
  let currentImage        = 0;
  let count               = 0;
  
  
  console.log('count', count);

  // nextButton.addEventListener("click", event => {
  //   console.log('click');
  //   ++count
  //   // currentImage = (currentImage + 1) % count.length;
  //   // document.getElementById("one").style.backgroundImage="url(' "+ arrayCarousel[currentImage]+ " ')";


  // });


  function slideImages(dir){
    var totalChildren = carouselContainer.getElementsByTagName('div').length;
    console.log('totalChildren', totalChildren);
    
    // dir === "left" ? count ++ : count --;

    if (dir === "left") {
      count ++;
    } else {
      count --
    }


    console.log('updated count', count);

    carouselContainer.classList.add('horizTranslate');
    carouselContainer.style.left = count * 200 + 'px';
    
    previousButton.style.display = count < 0 ? "block" : "none";
    // Here, 4 is the number displayed at any given time
    nextButton.style.display = count > 4 - totalChildren ? "block" : "none";
  }

  previousButton.addEventListener("click", function(e) {
      slideImages("left");
  });
  nextButton.addEventListener("click", function(e) {
      slideImages("right");
      carouselContainer.classList.add("slideOutLeft")
  });



  // const arrayObjCarousel = [
  //   {
  //       id: 1,
  //       image: 'https://www.fillmurray.com/g/200/200'
  //   },
  //   {
  //       id: 2,
  //       image: 'https://www.fillmurray.com/200/200'
  //   },
  //   {
  //       id: 3,
  //       image: 'https://www.fillmurray.com/200/200'
  //   },
  //   {
  //       id: 4,
  //       image: 'https://www.fillmurray.com/g/200/200'
  //   },
  //   {
  //       id: 5,
  //       image: 'https://www.fillmurray.com/200/100'
  //   }
  // ]

  // const arrayCarousel = ['https://www.fillmurray.com/g/200/200', 'https://www.fillmurray.com/200/200', 'https://www.fillmurray.com/200/200', 'https://www.fillmurray.com/g/200/200', 'https://www.fillmurray.com/200/100'];

  // console.log('arrayObjCarousel', arrayObjCarousel);
  // console.log('arrayCarousel', arrayCarousel);


}); 
