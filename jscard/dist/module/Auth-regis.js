import form from "../module/ClassForm.js";
import api from "../module/API.js";


class Athorization extends form.ClassForm {
    constructor() {
        super();
        this.elements = {
            ...this.elements,
            userName:  document.createElement('input'),
            userPass:  document.createElement('input'),
            error: document.createElement('p'),
            btnSend: document.createElement('button')
        }
    }
    authRender() {
        let {userName, userPass, error, form, btnSend} = this.elements
        form.append(userName, userPass, error, btnSend)
        super.render();
        this.getContent()
        this.getStyles()
        this.handler()
    }
    getContent () {
        let {userName, userPass, btnSend} = this.elements
        userName.placeholder = "Логин"
        userPass.placeholder = "Пароль"
        btnSend.textContent = 'Авторизироваться'

    }
    getStyles () {
        let {userName, userPass} = this.elements
        userName.type = "text";
        userName.classList.add('input__form')
        userPass.type = 'password'
        userPass.classList.add('input__form')
    }
    handler () {
        let {userName, userPass, btnSend, error} = this.elements

        btnSend.addEventListener('click', async () => {
            console.log('working')
            const token = await api.auth({
                email: `${userName.value}`,
                password: `${userPass.value}`
            }).then(r => r.text());

            localStorage.setItem('token', token);
            const cards = await api.getCards();
            console.log(cards);

        })
    }

}



export  default {
    Athorization,
}

