# **Vanilla Carousel**

## **Approach**
===========

I chose to build this carousel in vanilla JavaScript, as I was keen to showcase my vanilla JavaScript skills.

### **Setup a basic carousel**
Initally, my approach was to get a basic carousel working, where you can move through the carousel - left/right.  I'm doing this by:
- Using an eventlistener on each arrow button, and incrementing +1 or -1, depending on the direction button.
- I'm then adding a CSS class to the container div, by which the carousel should move by.  (And this varies per viewport).
- And lastly, I'm removing an arrow button, by toggling the `display: none` class on `items-container` div.

### **Animations**
I then wanted to add a basic animation to my carousel feature, to improve the UX experience, whilst gliding through the carousel.  (Later in the project, I also utilised Animate.js, for further light touches).

### **Refactor setup of code**
My current role at Expedia Group, has taught me to modularise my code as much as possible.  And create seperate JS files, for seperate groups of actions, which I have tried to demonstrate:

- pixabay-service.js - to host API request functions.
- dom-service.js  - to host resusable DOM methods and functions.
- app.js - to call key functions and events from the above files.

### **Fetch API**
For ease of time, I chose to use Fetch API to make my Pixabay API call.  However ideally, I would have preferred to use "XMLHttpRequest", as an API response can be handled more deeply with more methods:
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

### **Gulp**
Keen to use more modern front-end technology and demonstrate my skilset, I intergrated `Gulp` into my test, as I wanted a compiler for my files - SCSS and JS.  (This should have been setup earlier in my project - however, I wanted to spend more time building the core features of the test first.  And if I had time spare, then move over to `Gulp`).

# **Extras built into the test:**

- Responsiveness
- Clean design/UX
- Accessibility

### **Key features I did not have time to finish, but would continue to work on:**
To aid cleaner UX within this test, here are the following enhancements I would continue to work on:
- Allow the carousel to continously loop through all banners, in a continuous cycle of scrolling.  (Therefore, removing the need to hide/disable buttons).
- Continuing to work with `getBoundingClientRect()` methods, to move the active banner, to the center of the carousel.
- You can see, I'm actually sucessfully console.logging the middle carousel on scroll.  However, I ran out of time, to add an active class/CSS animation.  (A working solution is present though).

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
- I also did not have time to replace arrow buttons, with the provided arrow icons.  As I wanted to get the core features working and my JavaScript code well structured and cleanly written.
- I would also create a new JS file, to host my `checkViewPortWidth(), calculateItemBounds()` and `getMostCentered()` calculations.  And remove these from `dom-service.js` and `app.js`.





