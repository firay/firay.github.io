//navigation function
const menuListener = (containerParent, cssClass) => {
    const container = document.querySelector(containerParent)
    const containerChildren = [...container.children]
    const containerChildrenHref = containerChildren.map(item => item.firstChild)
    container.addEventListener('click', e => {
        let cursorTarget = e.target
        if (cursorTarget.tagName.toLowerCase() === 'a' || cursorTarget.tagName.toLowerCase() === 'button') {
            containerChildrenHref.forEach(item => {
                if(item.classList.contains(`${cssClass}`)){
                    item.classList.remove(`${cssClass}`)
                }
            })
            cursorTarget.classList.add(`${cssClass}`)
        }
    })
}

const showPop = (property) =>{
    let {containerClass, activeTarget,activeTarget2, showItemClass,addClassBtn, display} = property
    let container = document.querySelector(containerClass)
    let showItem = document.querySelector(showItemClass)
    let button = document.querySelector(`.${activeTarget}`)
    let flag = false
    container.addEventListener('click', e =>{
        e.preventDefault()
        let cursorTarget =  e.target
        if (cursorTarget.classList.contains(activeTarget) || cursorTarget.classList.contains(activeTarget2)){
            button.classList.toggle(addClassBtn)
            showItem.style.display = `${display}`
            setTimeout(() =>{showItem.style.opacity ='1'},100)
            showItem.style.transition = '1s opacity liner'
            flag =!flag
        }
        if (cursorTarget.classList.contains(activeTarget) && flag===false || cursorTarget.classList.contains(activeTarget2)){
            setTimeout(() =>{showItem.style.opacity ='0'},100)
            showItem.style.transition = '1s opacity liner'
            setTimeout(() =>{ showItem.style.display = 'none'}, 1000)
        }
    })
}

const userShow = (property) => {
    let {containerClass, cssClass, showArr} = property
    let container = document.querySelector(containerClass)
    let flag = false
    container.addEventListener('click', e => {
        let cursorTarget = e.target
        showArr.forEach(item => {
            if (cursorTarget.getAttribute('data-name') === item.getAttribute('data-name')) {
                item.classList.add('whoShow')
                flag = true
            }
        })
        if (flag){
            let showDiv = document.querySelector('.whoShow')
            if (cursorTarget.getAttribute('data-name') === showDiv.getAttribute('data-name'))
            showDiv.style.display = `flex`
            setTimeout(() =>{showDiv.style.opacity ='1'},100)
            showDiv.style.transition = '1s opacity liner'
        }
        menuListener(containerClass, cssClass)
    })
}

const closeModal = (popContainerCss, cssSpan, cssButton) =>{
    let loginContainer = document.querySelector(popContainerCss)
    loginContainer.addEventListener('click', e =>{
    e.preventDefault()
        let cursorTarget = e.target
    if (cursorTarget.classList.contains(cssSpan) ||cursorTarget.classList.contains(cssButton)){
        setTimeout(() =>{loginContainer.style.opacity ='0'},100)
        loginContainer.style.transition = '1s opacity liner'
        setTimeout(() =>{ loginContainer.style.display = 'none'}, 1000)
        let showDiv = document.querySelector('.whoShow')
        showDiv.classList.remove('whoShow')
    }
    })
}
//close modal-login

closeModal('.pop-container', 'btn--show-menu--form__line', 'btn--show-menu--form')

//close modal sing-up
closeModal('.pop-container--sing-up', 'btn--show-menu--form__line', 'btn--show-menu--form')

//navigation currency
const navigationCurrency = menuListener('.simple-ul--currency', 'ul-list__link--active')
//navigation lang
const navigationLang = menuListener('.simple-ul--lang', 'ul-list__link--active')
//mainMenu
const mainMenu = menuListener('.simple-ul--main', 'ul-list__link--active')
// userNav


showPop({
    containerClass:'.user',
    activeTarget: 'btn--cart',
    activeTarget2:'btn--cart__icon-img',
    showItemClass:'.cart-content',
    display:'block',
    addClassBtn:'btn--cart--active',
})

 showPop({
    containerClass:'.btn--show-menu',
    activeTarget: 'btn--show-menu',
    activeTarget2:'btn--show-menu__line',
    addClassBtn:'btn--show-menu--active',
    display:'flex',
    showItemClass:'.user__content__info',
})

userShow({
    containerClass:'.simple-ul--user',
    cssClass:'user-list__href--active',
    showArr: document.querySelectorAll('.pop-container')
})

const swiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    speed: 450,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

