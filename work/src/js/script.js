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
