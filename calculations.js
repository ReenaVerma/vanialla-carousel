// function CalculationsService() {
//     const itemsContainer    = document.getElementById('items-container');
//     let viewPortWidth       = window.matchMedia("(max-width: 599px)");
//     let count               = 0;

//     const checkViewPortWidth = () => {
//         viewPortWidth.matches ? itemsContainer.style.left = count * 400 + 'px' : itemsContainer.style.left = count * 200 + 'px';
//     }

//     // Use getBoundingClientRect to for element position.
//     const calculateItemBounds = (el) => {
//         if (el) {
//         const bound = el.getBoundingClientRect();
//         const width = bound.width;
//         const left = bound.x;
//         const right = left + width;
//         return {left: left, right: right, width: width};
//         }
//     }

//     return {
//         checkViewPortWidth,
//         calculateItemBounds
//     };
// }