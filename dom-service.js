function DOMService() {
    const carouselContainer = document.getElementById('carousel-container');
    const previousButton    = document.getElementById('previous');
    const nextButton        = document.getElementById('next');
    let viewPortWidth       = window.matchMedia("(max-width: 599px)");
    let count               = 0;

    const getCarouselContainer = () => {
        return carouselContainer;
    }

    const getNextButton = () => {
        return nextButton;
    }

    const getPreviousButton = () => {
        return previousButton;
    }

    const slideImages = (direction) => {
        const totalChildren = carouselContainer.getElementsByTagName('div').length;
        direction === 'left' ? count ++ : count --;
        carouselContainer.classList.add('horizTranslate');
        carouselContainer.classList.add("slideOutLeft")
        previousButton.style.display = count < 0 ? 'block' : 'none';
        nextButton.style.display = count > 5 - totalChildren ? 'block' : 'none';
        checkViewPortWidth(viewPortWidth);
      }

    const checkViewPortWidth = (viewPortWidth) => {
        // viewPortWidth.matches ===  viewPortWidth.matches ? carouselContainer.style.left = count * 400 + 'px' : carouselContainer.style.left = count * 200 + 'px';
        if (viewPortWidth.matches) { 
            carouselContainer.style.left = count * 400 + 'px';
        } else {
            carouselContainer.style.left = count * 200 + 'px';
        }
    }
    viewPortWidth.addListener(checkViewPortWidth)

    return {
        getCarouselContainer,
        getNextButton,
        getPreviousButton,
        slideImages,
        checkViewPortWidth,
    };
}