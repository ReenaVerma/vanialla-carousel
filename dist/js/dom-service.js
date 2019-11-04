/*! project-name v0.0.1 | (c) 2019 YOUR NAME | MIT License | http://link-to-your-git-repo.com */
function DOMService() {
    const carouselContainer = document.getElementById('carousel-container');
    const itemsContainer    = document.getElementById('items-container');
    const previousButton    = document.getElementById('previous');
    const nextButton        = document.getElementById('next');
    let viewPortWidth       = window.matchMedia("(max-width: 599px)");
    let count               = 0;

    // itemList.width(itemWidth * itemNum);

    


    const getCarouselContainer = () => {
        return carouselContainer;
    }
    const getItemsContainer = () => {
        return itemsContainer;
    }

    const getNextButton = () => {
        return nextButton;
    }

    const getPreviousButton = () => {
        return previousButton;
    }

    const getViewPortWidth = () => {
        return viewPortWidth;
    }

    const slideImages = (direction) => {
        const totalChildren = itemsContainer.getElementsByTagName('div').length;
        direction === 'left' ? count ++ : count --;
        itemsContainer.classList.add('horizTranslate');
        itemsContainer.classList.add("slideOutLeft")

        // if (count < 0) {
        //     previousButton.removeAttribute("disabled");
        // }
        // else {
        //     previousButton.setAttribute("disabled");
        // }
   
        previousButton.style.display = count < 0 ? 'block' : 'none';
        nextButton.style.display = count > 5 - totalChildren ? 'block' : 'none';
        checkViewPortWidth(viewPortWidth);
      }

    const checkViewPortWidth = () => {
        viewPortWidth.matches ? itemsContainer.style.left = count * 400 + 'px' : itemsContainer.style.left = count * 200 + 'px';
    }

    const calculateItemBounds = (el) => {
        if (el) {
        const bound = el.getBoundingClientRect();
        const width = bound.width;
        const left = bound.x;
        const right = left + width;
        return {left: left, right: right, width: width};
        }
    }

    return {
        getCarouselContainer,
        getItemsContainer,
        getNextButton,
        getPreviousButton,
        getViewPortWidth,
        slideImages,
        checkViewPortWidth,
        calculateItemBounds
    };
}