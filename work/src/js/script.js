// настройка скрола
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 500,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Поддержка тачпада
    touchpadSupport: true,
})

const navContainer = document.querySelector('.contact-us')

let navFlag = true
navContainer.addEventListener('click', e => {
    e.preventDefault()
    console.log("work")
    anim(2000)
    function anim(duration) {
        let test = navContainer.getAttribute('href')
        console.log('test', test);
        cancelAnimationFrame(test);
        const start = performance.now();
        console.log("start", start);
        let from = window.pageYOffset || document.documentElement.scrollTop,
            to = document.querySelector(test).getBoundingClientRect().top;
        console.log('to', to);
        requestAnimationFrame(function step(timestamp) {
            let progress = (timestamp - start) / duration;
            1 <= progress && (progress = 1);
            window.scrollTo(0, from + to * progress | 0);
            1 > progress && (test = requestAnimationFrame(step))
        })
        return navFlag = false
    }
})


// //scrolling animation
// let isScrolling = false;
//
// window.addEventListener("scroll", throttleScroll, false);
//
// function throttleScroll(e){
//     console.log(e);
//     if (isScrolling === false) {
//         window.requestAnimationFrame(function() {
//             scrolling(e);
//             isScrolling = false;
//         });
//     }
//     isScrolling = true;
// }

let last_known_scroll_position = 0;
let ticking = false;
const listItems = document.querySelectorAll(".title-description,.hello__title,.hay,.component-of-success-big-decoration,.footer-content__decoration__container,.footer-content__decoration__triangle");
let offsetTop = 50
let transformSize = 0
function doSomething(scroll_pos) {
    offsetTop = document.body.scrollHeight;
    if (pageYOffset >200 && offsetTop > pageYOffset){
        transformSize = pageYOffset
        console.log(transformSize);
        if (transformSize<200){
            return
        }
        listItems[0].style.transform=`translateY(${transformSize/15}px)`
    }
    console.log(transformSize);
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});
// document.addEventListener("DOMContentLoaded", scrolling, false);
//
// const listItems = document.querySelectorAll(".title-description,.hello__title,.hay,.component-of-success-big-decoration,.footer-content__decoration__container,.footer-content__decoration__triangle");
// // var firstBox = document.querySelector("#firstBox");
// // var secondBox = document.querySelector("#secondBox");
//
// function scrolling(e) {
//
//     // if (isPartiallyVisible(firstBox)) {
//     //     firstBox.classList.add("active");
//     //
//     //     document.body.classList.add("colorOne");
//     //     document.body.classList.remove("colorTwo");
//     // } else {
//     //     document.body.classList.remove("colorOne");
//     //     document.body.classList.remove("colorTwo");
//     // }
//
//     // if (isFullyVisible(secondBox)) {
//     //     secondBox.classList.add("active");
//     //
//     //     document.body.classList.add("colorTwo");
//     //     document.body.classList.remove("colorOne");
//     // }
//
//     for (let i = 0; i < listItems.length; i++) {
//         let listItem = listItems[i];
//         if (isPartiallyVisible(listItem)) {
//             listItem.classList.add('active-item');
//         } else {
//             listItem.classList.remove('active-item');
//         }
//     }
// }
//
// function isPartiallyVisible(el) {
//     let elementBoundary = el.getBoundingClientRect();
//
//     let top = elementBoundary.top;
//     let bottom = elementBoundary.bottom;
//     let height = elementBoundary.height;
//
//     return ((top + height >= 0) && (height + window.innerHeight >= bottom));
// }
//
// function isFullyVisible(el) {
//     let elementBoundary = el.getBoundingClientRect();
//
//     let top = elementBoundary.top;
//     let bottom = elementBoundary.bottom;
//
//     return ((top >= 0) && (bottom <= window.innerHeight));
// }

