//tags-item

const whichElementGetContainer = document.querySelector('.our-services-category');
const whichElementGetClass = document.querySelectorAll('.our-services-category-selection');
const categoryDescription = document.querySelectorAll('.our-services-description-container');
whichElementGetContainer.addEventListener('click', (e) => {
    const cursorTarget = e.target;
    whichElementGetClass.forEach(item => {
        if (item.classList.contains('our-services-category-selection-active')) {
            item.classList.remove('our-services-category-selection-active');
        }
    });
    if (cursorTarget.tagName.toLowerCase() === "button") {
        cursorTarget.classList.add('our-services-category-selection-active');
    }
    categoryDescription.forEach(item => {
        if (cursorTarget.getAttribute("data-name") === item.getAttribute("data-name") && cursorTarget.tagName.toLowerCase() === "button") {
            item.classList.add('our-services-description-container-category-show')
        } else if (cursorTarget.getAttribute("data-name") !== item.getAttribute("data-name") && cursorTarget.tagName.toLowerCase() === "button") {
            item.classList.remove('our-services-description-container-category-show')
        }
    })
})

//gallery
const categorySwichContainer = document.querySelector('.amazing-category');
const categorySwich = document.querySelectorAll('.amazing-category-item');
const categoryItem = document.querySelectorAll('.amazing-gallery-item')
const categoryItemArr = [...categoryItem]
let categoryItemArrMin = categoryItemArr.slice(0, 12);
categorySwichContainer.addEventListener('click', (event) => {
    const cursorTarget = event.target;
    if (cursorTarget.tagName.toLowerCase() === "button") {
        categorySwich.forEach(item => {
            if (item.classList.contains('amazing-category-item-active')) {
                item.classList.remove('amazing-category-item-active')
            }
        })
        cursorTarget.classList.add('amazing-category-item-active')
        categoryItemArrMin.forEach(item => {
            if (cursorTarget.getAttribute('data-name') === item.getAttribute('data-name')) {
                item.classList.add('amazing-gallery-item-show')
            } else if (cursorTarget.getAttribute("data-name") === 'all') {
                item.classList.add('amazing-gallery-item-show')
            } else {
                item.classList.remove('amazing-gallery-item-show')
            }
        })
    }
});

const loadMore = document.querySelector(".load")

loadMore.addEventListener('click', () => {
    categoryItemArrMin = categoryItemArr;
    let activeCategory = document.querySelector('.amazing-category-item-active')
    console.log(activeCategory);
    categoryItemArr.forEach(item => {
        if (item.getAttribute('data-name') === activeCategory.getAttribute('data-name')) {
            item.classList.add('amazing-gallery-item-show')
        } else if (activeCategory.getAttribute('data-name') === 'all') {
            categoryItemArrMin = categoryItemArr
            categoryItemArr.forEach(item => {
                item.classList.add('amazing-gallery-item-show')
            })
        }
    })
    loadMore.remove()
})
//swiper
const swiper = new Swiper('.swiper-container', {
    initialSlide: 2,
    speed: 450,
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// masonry
window.onload = function () {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
    const loadCustomGallery = document.querySelector(".load-custom-gallery")
    const customGallery = document.querySelectorAll('.gallery-of-images-item-hide')

    loadCustomGallery.addEventListener('click', () => {
        let fragmentsNode = function () {
            customGallery.forEach(item => {
                item.classList.remove('gallery-of-images-item-hide')
            })
        }
        fragmentsNode()
        let hideGalleryItem = [...customGallery];
        masonry.appended(hideGalleryItem);
        loadCustomGallery.remove()
    })
}


//nav
const navContainer = document.querySelector('.nav-list')
const navItems = document.querySelectorAll('.nav-list-href')

navContainer.addEventListener('click', (event) => {
    event.preventDefault()
    const cursorTarget = event.target
    let move = cursorTarget.getAttribute('href')
    document.querySelector(move).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    navItems.forEach(item => {
        if (item.classList.contains('nav-list-href-active')) {
            item.classList.remove('nav-list-href-active')
        }
    });
    cursorTarget.classList.add('nav-list-href-active');
})

//nav static
const header = document.querySelector('header')
window.onscroll = function (event) {
    let top = header.clientHeight;
    if (window.scrollY >= top) {
        header.classList.add('header-static')
    } else {
        header.classList.remove('header-static')
    }
}
//nav getActive
const navLinks = document.querySelectorAll('.nav-list-href')
const sections = document.querySelectorAll('.join-us, .our-advantage-gallery, .our-services-buy-me, .breaking-news,.about-theHam, .gallery-of-images')

window.addEventListener('scroll',()=>{
    let scrollDistance = window.scrollY
    sections.forEach((item, i)=>{
        if(item.offsetTop - header.clientHeight <= scrollDistance){
            navLinks.forEach(item =>{
                if (item.classList.contains('nav-list-href-active')){
                    item.classList.remove('nav-list-href-active')
                }
            })
            document.querySelectorAll('.nav-list-item')[i].querySelector('.nav-list-href').classList.add('nav-list-href-active')
        }
    })
})

const navButton = document.querySelector('.nav-btn')
const navContentContainer = document.querySelector('.nav-content')
//nav toggle
header.addEventListener('click', event =>{
    let cursorTarget = event.target;
    if (cursorTarget === cursorTarget.classList.contains('nav-btn') || cursorTarget.classList.contains("nav-btn-line") ||cursorTarget.tagName.toLowerCase() ==="button"){
        navButton.classList.toggle('nav-btn-opened')
        navContentContainer.classList.toggle('nav-content-opened')
    }
})

let test = document.querySelector('#test')
console.log(test);

test.addEventListener('mousemove', e =>{
    console.log(e.left);
    console.log(e.target);
    let flag = true
    let kk = e.clientY
    let gg = [e.clientY,]
    setTimeout(()=>{gg.push(e.clientY)}, 50)
    console.log(gg);
    console.log(test.clientLeft);
    e.preventDefault()
    console.log(e.clientY);
    if (flag){
        test.addEventListener('click', e => {
            e.preventDefault()
            console.log(e.target);
        })
    }
})











