class ClassForm {
    constructor() {
        this.elements ={
            title: document.createElement('h4'),
            buttonClose:document.createElement('button'),
            form:document.createElement('form'),
        }
    }

    elementsGetContent() {
        let {
            buttonClose,
            form,
            title,
        } = this.elements
        title.classList.add('standard-title')
        buttonClose.classList.add('btn-close');
        buttonClose.innerHTML = `<span class="btn-close__line"></span><span class='btn-close__line'></span>`;
        form.classList.add('form-standard')
    }

    closeForm() {
        const {
            buttonClose,
        } = this.elements
        buttonClose.addEventListener('click', e => {
            e.preventDefault()
            let cursorTarget = e.target
            if (cursorTarget === buttonClose || cursorTarget.classList.contains('btn-close__line')) {
                let modalContainer = document.querySelector('.modal-container')
                setTimeout(() => modalContainer.remove(), 100)
            }
        })
    }
    render() {
        this.elementsGetContent()
        let  container = document.querySelector('.modal-container')
        let {
            title,
            buttonClose,
            form,
        } = this.elements
        form.append(title, buttonClose,)
        container.prepend(form)
        this.closeForm()
    }
}


export default {
    ClassForm,
}
