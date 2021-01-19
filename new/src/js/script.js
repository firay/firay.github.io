const navContainer = document.querySelector('.nav-item-container--mobile')
const navItems = document.querySelectorAll('.nav-items__href')

navContainer.addEventListener('click', (event) => {
    event.preventDefault()
    const cursorTarget = event.target
    let move = cursorTarget.getAttribute('href')
    document.querySelector(move).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
    navItems.forEach(item => {
        if (item.classList.contains('nav-items__href--active')) {
            item.classList.remove('nav-items__href--active')
        }
    });
    cursorTarget.classList.add('nav-items__href--active');
})

//navigation toggle

const btnActive = document.querySelector('.btn')
const mobileNavigation = document.querySelector('.navigation')
btnActive.addEventListener('click', event => {
    let cursorTarget = event.target
    if (cursorTarget === btnActive || cursorTarget.classList.contains('btn__line')) {
        btnActive.classList.toggle('btn--active')
        mobileNavigation.classList.toggle('navigation-mobile')
    }
})


//navigation close if target === navigation container

const navContainerToggle = document.querySelector('.navigation')
navContainerToggle.addEventListener('click', event => {
    if (event.target === navContainerToggle) {
        navContainerToggle.classList.remove('navigation-mobile')
        btnActive.classList.toggle('btn--active')
    }
})


const letsContainer = document.querySelector('.lets-works__wrapper')
const letsContainerItems = document.querySelectorAll('.lets-works__item')
const letsWorksCategory = document.querySelectorAll('.nav-items__href--gray')
let test = document.querySelector('.lets-works__wrapper');


//function for gallery

const galleryHeight = (className) => {
    let letsItemsShow = document.querySelectorAll(className)
    let letsItemShow = document.querySelector(className)
    let letsGalleryHeight = (letsItemShow.clientHeight / 2) * letsItemsShow.length + 471
    test.style.height = `${letsGalleryHeight}px`;
}
const itemPosition = (className, offset, oldDescClass, newDescClass, oldImgClass, newImgClass) => {
    const kek = () => {
        let WhichItemToShow = document.querySelectorAll(className)
        WhichItemToShow.forEach(item => {
            if (item.offsetLeft > offset) {
                const itemChildren = [...item.children]
                itemChildren.forEach(item => {
                    if (item.classList.contains(newDescClass)) {
                        item.classList.add(oldDescClass);
                    }
                    if (item.classList.contains(oldImgClass)) {
                        item.classList.remove(oldImgClass)
                    }
                })
            } else {
                const itemChildren = [...item.children]
                itemChildren.forEach(item => {
                    if (item.classList.contains(newDescClass)) {
                        item.classList.toggle(newDescClass)
                    }
                    if (item.classList.contains(newImgClass)) {
                        item.classList.add(oldImgClass)
                    }
                })
            }
        })
    }
    setTimeout(kek, 200)
}

//media for letsGallery

const letsGalleryMedia = (className) => {
    let letsItemsShow = document.querySelectorAll(className)
    let letsItemShow = document.querySelector(className)
    let letsGalleryHeight = letsItemShow.clientHeight * letsItemsShow.length + 328
    test.style.height = `${letsGalleryHeight}px`;
}

letsContainer.addEventListener('click', event => {
    let cursorTarget = event.target
    letsWorksCategory.forEach(item => {
        if (cursorTarget.classList.contains('nav-items__href--gray'))
            if (cursorTarget.getAttribute('data-name') === item.getAttribute('data-name')) {
                item.classList.add('nav-items__href--gray--active')
            } else {
                item.classList.remove('nav-items__href--gray--active')
            }
    })
    letsContainerItems.forEach(item => {
        if (cursorTarget.classList.contains('nav-items__href--gray')) {
            if (item.classList.contains('lets-works__item--show')) {
                item.classList.remove('lets-works__item--show')
            }
        }
        if (cursorTarget.getAttribute('data-name') === item.getAttribute('data-name')) {
            const showItem = () => {
                item.classList.remove('lets-works__item--show')
                item.classList.add('lets-works__item--show')
                galleryHeight('.lets-works__item--show')
                if (screen.width <= 479){
                    letsGalleryMedia('.lets-works__item--show')
                }
            }
            setTimeout(showItem, 100)
            itemPosition('.lets-works__item--show', 400, 'lets-works__img-description--alternative', 'lets-works__img-description', 'lets-works__item__img--alternative', 'lets-works__item__img')
            setTimeout(itemPosition, 101)
            loadMore.classList.remove('lets-works__item--more-show')
            if (cursorTarget.getAttribute('data-name') === 'all') {
                loadMore.classList.add('lets-works__item--more-show')
            }
        }
    })
})


// load more img gallery


const loadMore = document.querySelector('.lets-works__item--more')
loadMore.addEventListener('click', event => {
    letsContainerItems.forEach(item => {
        item.classList.remove('lets-works__item--show')
        const showItem = () => {
            item.classList.add('lets-works__item--show')
            galleryHeight('.lets-works__item--show')
            if (screen.width <= 479){
                letsGalleryMedia('.lets-works__item--show')
            }
        }
        setTimeout(showItem, 100)
    })
    itemPosition('.lets-works__item--show', 400, 'lets-works__img-description--alternative', 'lets-works__img-description', 'lets-works__item__img--alternative', 'lets-works__item__img')
    setTimeout(itemPosition, 101)
    loadMore.classList.remove('lets-works__item--more-show')
})

//modal contact

const modalActive = document.querySelector('.simple-position-item--green');

modalActive.addEventListener('click', event => {
    const modalContainer = `
        <div class="modal-container">
            <form action="" class="form-position">
            <div class="form-title">
                <span class="form-position__title">Lets start</span>
            </div>
            <div class="form-soc">
                <a class="form-soc__link" href="#"><svg class="form-soc__icon" xmlns="http://www.w3.org/2000/svg"><path d="M8.85863 24V13.0533H12.5315L13.0826 8.78588H8.85863V6.06176C8.85863 4.82664 9.20021 3.98492 10.9734 3.98492L13.2312 3.98399V0.167076C12.8408 0.116334 11.5004 0 9.94045 0C6.68293 0 4.45278 1.98836 4.45278 5.63912V8.78588H0.768753V13.0533H4.45278V24H8.85863Z" /></svg><span>Facebook</span></a>
                <a class="form-soc__link form-soc__link--google" href="#"><svg class="form-soc__icon"xmlns="http://www.w3.org/2000/svg"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd"/></svg><span>Google</span></a>
            </div>
            <div class="form__items">
                <input type="text" class="form__items__input" placeholder="Name">
                <input type="text" class="form__items__input" placeholder="Last Name">
                <input type="email" class="form__items__input" placeholder="Email">
                <label class="form-checkbox">
                    <input type="checkbox" class="form-checkmark" placeholder="checkbox">
                    <span class="check-result"></span>
                    <span class="checkbox-info">Agree with our <span class="checkbox-title"> Terms & Conditions</span>
                    </span>
                </label>
                <input type="submit" class="form-create" value="Send">
            </div>
            <span class="green-square"></span>
            <button class="close-form">
                <span class="close-form__line"></span>
                <span class="close-form__line"></span>
            </button>
        </form>
          </div>
        `
    document.body.insertAdjacentHTML('beforebegin', modalContainer)

    const formBlur = document.querySelector('.modal-container')
    formBlur.addEventListener('click', e => {
        let cursorTarget = e.target
        console.log(cursorTarget.getAttribute);
        if (cursorTarget === formBlur) {
            formBlur.remove()
        }
    })
})



