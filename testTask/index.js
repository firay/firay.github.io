const imgInput = document.querySelector('input')
const gallery = document.querySelector('.gallery')
const imgEnter =   document.querySelector('.gallery__enter')



// привожу строку в норму если имя картинки слишком большое
const limitStr = (str, length) =>{
    return (str.substr(0, length -3) + '...')
};

// выводим на екран
const itemAppend = (name, id, img, position, imgArr) =>{
    if (imgArr.length > 0){
        imgEnter.classList.remove('gallery__enter--show')
    }
    position.insertAdjacentHTML('afterbegin',
        `<div class="item">
            <button id=${id} class="btn">
                <span class="btn__line"></span>
                <span class="btn__line"></span>
            </button>
            <p class="item__name">${name}</p>
            <div class="item__img-container">
                <img src='${img}'>
            </div>
        </div>`
    )
}


// создаем файлы
const addFile = (e) => {
    let imgArr = JSON.parse(localStorage.getItem('accept')) || []
    let counter = imgArr.length || 0
    const selectedFile = e.target.files;
    const testArr = [...selectedFile]
        for (let i = 0; i < testArr.length; i++) {
            const reader = new FileReader();
            let name = testArr[i].name
            let normalizeName =  limitStr(name,45)
            let id = counter
            counter ++
            reader.onload = (e) => {
                let item = e.target.result
                let result = {
                    itemName: normalizeName,
                    itemImg: item,
                    item:id
                }
                imgArr.push(result)
                let normalizeTest = imgArr.map((item, index) => {
                    item.id = index
                    return item
                })
                let someArr = JSON.stringify(normalizeTest)
                localStorage.setItem('accept', someArr)
               itemAppend(normalizeName,id,item, gallery, imgArr)
            }

            reader.readAsDataURL(e.target.files[i]);
        }
}

// удаляем файлы
gallery.addEventListener('click', e =>{
    let cursorTarget =  e.target
    const arr = JSON.parse(localStorage.getItem('accept')) || [];
    if (cursorTarget.tagName.toLowerCase() === 'button' || cursorTarget.tagName.toLowerCase() === 'span'){
        let id = cursorTarget.closest("button").id
        const updateArr = arr.filter(item=>item.id !== +id)
        localStorage.setItem('accept', JSON.stringify(updateArr))
        cursorTarget.closest('div').classList.add('item--hide')
        if (updateArr.length === 0){
                setTimeout(()=>{
                    imgEnter.classList.add('gallery__enter--show')
                },800)
        }
        setTimeout(()=> cursorTarget.closest('div').remove(),800)
    }
})

//загрузка сохраненных
const showSaveImg = () =>{
    const arr = JSON.parse(localStorage.getItem('accept')) || [];
    if (arr.length === 0){
        imgEnter.classList.add('gallery__enter--show')
    }
    for (let i = 0; i<arr.length; i++) {
        itemAppend(arr[i].itemName, arr[i].id, arr[i].itemImg, gallery, arr)
    }
}


document.addEventListener('DOMContentLoaded', e =>{
    showSaveImg()
})



//тригер по инпуту
imgInput.addEventListener('change', e =>{
    addFile(e)
    imgInput.value = ""
})


