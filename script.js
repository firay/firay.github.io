document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() =>{
        const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            multiplier: 0.8,
            direction: "horizontal",
            reloadOnContextChange: false,
        })
        const menuContainer = document.querySelector('.nav-small')
        const menuShow = document.querySelector('.navigation-container-wrapper')
        menuContainer.addEventListener('click', (e) => {
            if (e.currentTarget.classList.contains('nav-small') && !e.target.classList.contains('nav-small__lang')) {
                menuShow.classList.add('navigation-container-wrapper--active')
            }
        })
        const closeBtn = document.querySelector('.btn--close')
        menuShow.addEventListener('click', (e) => {
            const cursorTarget = e.target
            console.log(cursorTarget);
            if (cursorTarget.classList.contains('navigation-container-wrapper')) {
                menuShow.classList.remove('navigation-container-wrapper--active')
            }
        })
        closeBtn.addEventListener('click', e => {
            if (e.currentTarget === closeBtn) {
                menuShow.classList.remove('navigation-container-wrapper--active')
            }
        })
        const swiperNews = new Swiper('.swiper-container--news', {
            slidesPerView: 3,
            spaceBetween: 68,
            allowTouchMove:true,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next--news',
                prevEl: '.swiper-button-prev--news',
            },
        });
        const swiperHero = new Swiper('.swiper-container--hero', {
            slidesPerView: 1.50,
            spaceBetween: 50,
            allowTouchMove:true,
            autoplay:true,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next--hero',
                prevEl: '.swiper-button-prev--hero',
            },
        });
        const showPop = document.querySelectorAll('.competence-pop')
        const showPopItems = document.querySelectorAll('.competence__list')
        for (let showPopItem of showPopItems) {
            showPopItem.addEventListener('click',e =>{
               const id = e.currentTarget.id;
                showPop.forEach(item=>{
                    if (item.id === id){
                        item.classList.add('showPop')
                    }else {
                        if (item.classList.contains('showPop')){
                            item.classList.remove('showPop')
                        }
                    }
                })
            })
        }
        const closePop = document.querySelectorAll('.btn--close--competence-pop')
        for (let closePopItem of closePop){
            closePopItem.addEventListener('click',e =>{
                e.preventDefault()
                showPop.forEach(item =>{
                    if (item.classList.contains('showPop')){
                        item.classList.remove('showPop')
                    }
                })
            })
        }

    },1000)

})

const showPopContainer = document.querySelector('.competence__lists')

