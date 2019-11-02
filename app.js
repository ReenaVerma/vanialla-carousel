document.addEventListener('DOMContentLoaded', function() {
  console.log('app.js loaded');

  const itemsContainer = document.getElementById('items-container');
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
  //   // document.getElementById("two").style.backgroundImage="url(' "+ arrayCarousel[currentImage]+ " ')";


  // });

  // var btnLeftEl = document.querySelector('#left-btn');
  // var btnRightEl = document.querySelector('#right-btn');
  // var count = 0;


  function slideImages(dir){
    var totalChildren = itemsContainer.getElementsByTagName('div').length;
    console.log('totalChildren', totalChildren);
    
    dir === "left" ? count ++ : count --;
    console.log('updated count', count);
    itemsContainer.style.left = count * 200 + 'px';
    
    previousButton.style.display = count < 0 ? "block" : "none";
    // Here, 4 is the number displayed at any given time
    nextButton.style.display = count > 4 - totalChildren ? "block" : "none";
  }

  previousButton.addEventListener("click", function(e) {
      slideImages("left");
  });
  nextButton.addEventListener("click", function(e) {
      slideImages("right");
  });



  const arrayObjCarousel = [
    {
        id: 1,
        image: 'https://www.fillmurray.com/g/200/200'
    },
    {
        id: 2,
        image: 'https://www.fillmurray.com/200/200'
    },
    {
        id: 3,
        image: 'https://www.fillmurray.com/200/200'
    },
    {
        id: 4,
        image: 'https://www.fillmurray.com/g/200/200'
    },
    {
        id: 5,
        image: 'https://www.fillmurray.com/200/100'
    }
  ]

  const arrayCarousel = ['https://www.fillmurray.com/g/200/200', 'https://www.fillmurray.com/200/200', 'https://www.fillmurray.com/200/200', 'https://www.fillmurray.com/g/200/200', 'https://www.fillmurray.com/200/100'];

  console.log('arrayObjCarousel', arrayObjCarousel);
  console.log('arrayCarousel', arrayCarousel);

  
  // function myFunction(item, index) {
  //     console.log('item + index: ', index + item);

  //     const divElement = document.createElement("div");
  //     const imgElement = document.createElement("img");
  //     imgElement.id = index
  //     imgElement.src = item;

  //     divElement.classList.add("item");
  //     divElement.appendChild(imgElement);
  //     carouselContainer.appendChild(divElement);
  // }

  // arrayCarousel.forEach(myFunction); 

  // for (let i = 0; i < arrayCarousel.length; i++) {
  //     const imageURL = arrayCarousel[i];
  //     console.log('imageURL', imageURL);

  //     const divElement = document.createElement("div");
  //     const imgElement = document.createElement("img");
  //     imgElement.src = imageURL;

  //     divElement.classList.add("item");
  //     divElement.appendChild(imgElement);
  //     carouselContainer.appendChild(divElement);
  // }


  // let result = '<h2> Random User Info From Jsonplaceholder API</h2>';

  // data.data.forEach(elem => {
  //   console.log('foreach', elem.images.original.url);

  //   result +=
  //           `<div>
  //            <h3> Hotel: ${elem.title} </h3>
  //            <h3> Location: ${elem.username} </h3>
  //            </h4>Date: ${elem.import_datetime}</h3>
  //            <img src="${elem.images.original.url}" />
  //            <button>book now</button>

  //             </div>`;
  //   place.innerHTML = result;
  // });



// function nextImage(){
//  currentImage = (currentImage + 1) % arrayCarousel.length;
//  document.getElementById("test").style.backgroundImage="url('"+arrayCarousel[currentImage]+"')";
// }



}); //end of js file
