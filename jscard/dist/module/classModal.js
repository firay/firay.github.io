class ClassModal {
    constructor() {
        this.elements = {
            container: document.createElement('div'),
        }
    }
    addStyle (){
        const {
            container,
        } = this.elements
        container.classList.add('modal-container')
    }
    handler(){
        this.addStyle()
        const {
            container
        } = this.elements
        container.addEventListener('click', event =>{
            let cursorTarget = event.target
            if (cursorTarget.classList === container.classList){
                container.remove()
            }
        })
    }
    render() {
        this.handler()
        const {
            container,
        } = this.elements
       document.body.append(container)
    }
}

export default {
    ClassModal
}