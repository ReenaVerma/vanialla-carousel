# **Vanilla Carousel**

## **Approach**
===========

I chose to build this carousel in vanilla JavaScript, as I was keen to showcase my vanilla JavaScript skills.
 
### **Setup a basic carousel**
Initally, my approach was to setup the bare bones, of a working carousel, which could later be refactored and improvd.  I'm doing this by:


#### **1. Making a Fetch API Request**

1. Making an API call to https://pixabay.com and displaying my images, by looping though the response using `forEach()` (ES6).
2. I'm then using a template literal (ES6), to format my carousel item div and utilising any object key/values from my response.  And only then, injecting my API data, into the `carouselContainer` dom node.
3. This API request is being handled in `pixabay-service.js`:
4. For ease of time, I chose to use Fetch API to make my Pixabay API call.  However ideally, I would have preferred to use "XMLHttpRequest", as an API response can be handled more deeply with more methods:
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

```
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
```


#### **2. Looping Through Each Carousel Item**

1. Trying to use the best of latest front-end dev tech, I've utilised CSS3's `flex box` approach, to display my carousel items, (as well as a few other elements - header/buttons).
2. The `slideImages()` function, is now doing a lot of the hard work...
3. In this function, I am counting through the number of carousel items/divs, in my `itemsContainer`. And only then, incrementing +1 or -1, using an addEventListener, depending on which direction button has been clicked.
4. A `let count = 0` variable, has been already set, to help aid this function.
5. I'm then adding a CSS class to the container div, by which the carousel should move by.  (And this varies per viewport and images a carousel item width).
6. To prevent the user from scrolling past the first and last carousel item, I am toggling the `display: none` class on each button.

```
   const slideImages = (direction) => {
        const totalChildren = itemsContainer.getElementsByTagName('div').length;
        direction === 'left' ? count ++ : count --;
        itemsContainer.classList.add('scrollAnimation');

        previousButton.style.display = count < 0 ? 'block' : 'none';
        nextButton.style.display = count > 5 - totalChildren ? 'block' : 'none';
        checkViewPortWidth(viewPortWidth);
      }
```

#### **3. Animations**
I then wanted to add a basic animation to my carousel feature, to improve the UX experience, whilst gliding through the carousel.  (Later in the project, I also utilised Animate.js, for further light touches).

#### **4. Refactoring Code**
My current role at Expedia Group, has taught me to modularise my code as much as possible.  And as a result, I have created seperate JS files, for seperate groups of actions, which I have tried to demonstrate.  This means grouping relevant code together, maintain a clean code approach, but also providing modules/DOM functions, which can also be imported:

- pixabay-service.js - to host API request functions.
- dom-service.js  - to host resusable DOM methods and functions.
- app.js - to call key functions and events from the above files.


#### **5. Gulp**
Keen to use more modern front-end technology and demonstrate my skilset, I intergrated `Gulp` into my test, as I wanted a compiler for my files - SCSS and JS.  (This should have been setup earlier in my project - however, I wanted to spend more time building the core features of the test first.  And if I had time spare, then move over to `Gulp`).

#### **6. TDD**
I installed `mocha` and `chai` to aid TDD for this task. I've included some basic tests to:

- Test an API call has successfully been made, with a status code 200.
- Ensure my API is returning an object of data
- Ensure the key/values required for this task, are accessible (`largeImageURL, likes` and `user`)
- Ensure key DOM nodes are present, (using `JSDOM` to access and my DOM/index.html)

An immediate improvement I would make, would be to utilise the `beforeEach()` hook, before each test.  So I'm not making repetitive calls, which are really only needed once.  For example:

```
  beforeEach((done) => {
        fetch('https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=manhattan&image_type=photo&page=1&per_page=9')
          .then((res) => {
              expect(res.status).to.be.eq(200);
              return res.json();
          })
       done();
  });
```

I would also write more tests to ensure, the following scenarios are covered:
- Carousel items are injecting into DOM successfully.

However, I would probably utilise `Selennium` for BDD and P3/P4 scenearios.  Such as:
- When clicking on a button, the user can cycle through the carousel.
- The middle item is active.
- Test for responsiveness.


# **Extras built into this task:**

- Responsiveness
- Improved design
- Clean design/UX
- Accessibility

### **Key features I did not have time to finish, but would continue to work on:**
To aid cleaner UX within this test, here are the following enhancements I would continue to work on:

1. Allow the carousel to continously loop through all banners, in a continuous cycle of scrolling.  (Therefore, removing the need to hide/disable buttons).
2. Continuing to work with `getBoundingClientRect()` methods, to add a class/style for the active banner.
3. You can see, I'm actually sucessfully console.logging the middle carousel on scroll.  However, I ran out of time, to add an active class/CSS animation.  (A working solution is present though).

```
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
```
4.  I also did not have time to replace arrow buttons, with the provided arrow icons for mobile.  As I wanted to get the core features working and my JavaScript code well structured and cleanly written.
5. I would also create a new JS file, to host my `checkViewPortWidth(), calculateItemBounds()` and `getMostCentered()` calculations.  And remove these from `dom-service.js` and `app.js`.
6. I also have written some additional code, where any carousel item you click on, centers in the middle of the `itemsContainer`.  This works, but needs to be better integrated into the current working solution.  (So currently commented out):

```// THIS CODE CENTRES THE CAROUSEL ON CLICK
          const carouselItems = carouselContainer.children;
          for (let i=0; i < carouselItems.length; i++) {
            carouselItems[i].setAttribute("index", i);

            //click handler to center the clicked item
            carouselItems[i].onclick = function(e) {
                let slide = e.currentTarget;
                let slideWidth = slide.getBoundingClientRect().width;
                let slideIndex = parseInt(slide.getAttribute("index"));
                let newLeft = (slideIndex * slideWidth * -1) + Math.floor(((carouselContainer.getBoundingClientRect().width) / slideWidth) / 2) * slideWidth;
                document.getElementById("items-container").style.transition= "all 2s ease 0s";
                document.getElementById("items-container").style.left = newLeft + "px";
            }
          }
```


## **Instructions**
===========

1. Clone the repo
2. Run `npm install` to install dependencies
3. Run `gulp watch` in terminal, to run the repository locally on http://localhost:3000/
4. Run `npm test` to run unit tests.  (Please note, you my need to install devDependencies to run tests)

