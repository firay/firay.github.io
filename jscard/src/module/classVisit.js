import ClassForm from "../module/ClassForm.js";

class ClassVisit extends ClassForm.ClassForm {
    constructor() {
        super();
        this.elements = {
            ...this.elements,
            getName: document.createElement('input'),
            getSurName: document.createElement('input'),
            getTarget: document.createElement('input'),
            getDescription: document.createElement('textarea'),
            getEmergency: document.createElement('select'),
            choiceDoctor: document.createElement('select'),
            dopInfo: document.createElement('div'),
            buttonSend: document.createElement('button'),
            error: document.createElement('span'),
            flag: false
        }
    }

    allElementsGetContent() {
        let {
            title,
            getName,
            getSurName,
            choiceDoctor,
            getTarget,
            getDescription,
            getEmergency,
            buttonSend,
            error,
        } = this.elements
        title.textContent = 'Create visit';
        getName.placeholder = "Enter your name";
        getSurName.placeholder = "Enter your surname"
        choiceDoctor.innerHTML = `<option data-name ="choose a doctor"> Choose a doctor</option><option data-name ="cardiologist">Cardiologist</option><option data-name ="dentist">Dentist</option><option data-name ="therapist"> Therapist</option>`;
        getTarget.placeholder = 'Enter your target';
        getDescription.placeholder = 'Enter description'
        getEmergency.innerHTML = `<option data-name ="chooseEmergence"> Choose emergence</option><option data-name ="high">High</option><option data-name ="middle">Middle</option><option data-name ="low">Low</option>`
        buttonSend.textContent = "send"

        this.allElementsGetStyle()
    }

    allElementsGetStyle() {
        let {
            getName,
            getSurName,
            choiceDoctor,
            getTarget,
            getDescription,
            getEmergency,
            dopInfo,
            buttonSend,
            error,
        } = this.elements
        getName.classList.add('input__form');
        getSurName.classList.add('input__form');
        getEmergency.classList.add('form__select');
        getTarget.classList.add('input__form');
        getDescription.classList.add('textarea__form');
        choiceDoctor.classList.add('form__select');
        dopInfo.classList.add('form__more-info');
        buttonSend.classList.add("btn-send");
        error.classList.add('form__error')
    }

    removeDopInfo() {
        let form = document.querySelector('form');
        let formChildren = form.childNodes
        formChildren.forEach(item => {
            if (item.classList.contains('form__more-info') || item.classList.contains('form__error')) {
                item.remove()
            }
        })
    }

    handler() {
        this.renderDopInfo()
        this.validation()
        this.sendCards()
    }

    renderDopInfo() {
        let {
            choiceDoctor
        } = this.elements
        choiceDoctor.addEventListener('change', e => {
            let cardiologistic = new Cardiologist
            let dentist = new VisitDentist
            let therapist = new Therapist
            if (choiceDoctor.value === "Cardiologist") {
                cardiologistic.renderSubsidiaryElement()
            }
            if (choiceDoctor.value === "Dentist") {
                dentist.renderSubsidiaryElement()
            }
            if (choiceDoctor.value === "Therapist") {
                therapist.renderSubsidiaryElement()
            }
            if (choiceDoctor.value === "Choose a doctor") {
                this.removeDopInfo()
            }
        })
    }
    formRemove(){
        let {
            getName,
            getSurName,
            choiceDoctor,
            getTarget,
            getDescription,
            getEmergency,
            dopInfo,
        } = this.elements
        let formChildren = [getName, getSurName, choiceDoctor, getTarget, getDescription, getEmergency, dopInfo,]
        formChildren.forEach(item =>item.value ="")
        let container = document.querySelector('.modal-container')
        container.remove()
    }
    validation() {
        const {
            buttonSend,
            error
        } = this.elements
        let form = document.querySelector('form')
        buttonSend.addEventListener('click', e => {
            e.preventDefault()
            let moreInfo = document.querySelectorAll(".input__form, .textarea__form")
            form.insertAdjacentElement('beforeend', error)
            moreInfo.forEach(item => {
                if (item.value === "") {
                    this.elements.error.textContent = "заполните все поля"
                    return this.elements.flag = false
                } else if (this.elements.choiceDoctor.value === "Choose a doctor") {
                    this.elements.error.textContent = "choice doctor"
                    return this.elements.flag = false
                } else if (this.elements.getEmergency.value === "Choose emergence") {
                    this.elements.error.textContent = "Choose emergence"
                    return this.elements.flag = false
                } else {
                    error.textContent = 'send'
                    return this.elements.flag = true
                }
            })
        })
    }

    sendCards() {
        let dentist = new VisitDentist
        let therapist = new Therapist
        let cardiologist = new Cardiologist
        const {
            buttonSend,
            error,
            choiceDoctor
        } = this.elements
        buttonSend.addEventListener('click', e => {
            if (error.textContent === "send" && choiceDoctor.value === "Dentist") {
                dentist.sendSome()
                this.formRemove()
            }
            if (error.textContent === "send" && choiceDoctor.value === "Therapist") {
                therapist.sendSome()
                this.formRemove()
            }
            if (error.textContent === "send" && choiceDoctor.value === "Cardiologist") {
                cardiologist.sendSome()
                this.formRemove()
            }
        })
    }

    send(someObject, optionObject) {
        fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${'b72f0991-4578-4644-9fb3-a034dde491d8'}`
            },
            body: JSON.stringify({
                title: `визит к ${someObject[0].value}`,
                doctor: someObject[0].value,
                name: `${someObject[1].value}  ${someObject[2].value}`,
                target: someObject[3].value,
                emergency: someObject[4].value,
                description: someObject[5].value,
                ...optionObject
            })
        })
            .then(response => response.json())
            .then(response => console.log(response))
    }


    renderStandardItems() {
        this.render()
        this.removeDopInfo()
        this.allElementsGetContent()
        let {
            getName,
            getSurName,
            choiceDoctor,
            getTarget,
            getDescription,
            getEmergency,
            form,
            buttonSend
        } = this.elements
        form.append(choiceDoctor, getName, getSurName, getTarget, getEmergency, getDescription, buttonSend)
        this.handler()
    }
}


/////////////////////////////////VisitDentist//////////////////////////////////////////////////////////


class VisitDentist extends ClassVisit {
    constructor() {
        super();
        this.elements = {
            ...this.elements,
            lastDate: document.createElement('input'),
        }
    }

    allElementsGetStyle() {
        let {
            lastDate,
            dopInfo,
        } = this.elements
        lastDate.classList.add('input__form');
        dopInfo.classList.add('form__more-info');
        this.allElementsGetContent()

    }

    allElementsGetContent() {
        let {
            lastDate,
        } = this.elements

        lastDate.placeholder = "Enter your last visit date";
    }

    sendSome() {
        const formChildrenArr = document.querySelectorAll('.input__form, .textarea__form, .form__select')
        const forSend = {...formChildrenArr}
        let dopInfo = {lastDate: formChildrenArr[6].value}
        super.send(forSend, dopInfo)
    }

    renderSubsidiaryElement() {
        super.removeDopInfo()
        this.allElementsGetStyle()
        let {
            lastDate,
            form,
            dopInfo,
        } = this.elements
        dopInfo.append(lastDate)
        form = document.querySelector('.btn-send')
        form.insertAdjacentElement('beforebegin', dopInfo)
    }
}


/////////////////////////////////////////////Cardiologist////////////////////////////////////////////////////

class Cardiologist extends ClassVisit {
    constructor() {
        super();
        this.elements = {
            ...this.elements,
            age: document.createElement("input"),
            pressure: document.createElement("input"),
            imb: document.createElement('input'),
            sick: document.createElement('textarea')
        }
    }

    allElementsGetStyle() {
        let {
            pressure,
            imb,
            sick,
            dopInfo,
            age,
        } = this.elements
        pressure.classList.add('input__form');
        imb.classList.add('input__form');
        sick.classList.add('textarea__form')
        dopInfo.classList.add('form__more-info')
        age.classList.add('input__form')
        this.allElementsGetContent()
    }

    allElementsGetContent() {
        let {
            pressure,
            imb,
            sick,
            age,
        } = this.elements
        pressure.placeholder = "Enter your pressure";
        imb.placeholder = "Enter your imb";
        sick.placeholder = "describe your sick";
        age.placeholder = "enter your age"
    }

    sendSome() {
        const formChildrenArr = document.querySelectorAll('.input__form, .textarea__form, .form__select')
        const forSend = {...formChildrenArr}
        let dopInfo = {pressure: forSend[6].value, indexBody: forSend[7].value, seek: forSend[8].value, age:forSend[9].value}
        super.send(forSend, dopInfo)

    }


    renderSubsidiaryElement() {
        super.removeDopInfo()
        this.allElementsGetStyle()
        let {
            age,
            pressure,
            imb,
            sick,
            form,
            dopInfo,

        } = this.elements
        dopInfo.append(pressure, imb, sick, age)
        form = document.querySelector('.btn-send')
        form.insertAdjacentElement('beforebegin', dopInfo)
    }
}

//////////////////////////////////////////Therapist//////////////////////////////////////////////////////////////

class Therapist extends ClassVisit {
    constructor() {
        super();
        this.elements = {
            ...this.elements,
            dopInfo: document.createElement("div"),
            age: document.createElement('input'),
        }
    }

    allElementsGetStyle() {
        let {
            age,
            dopInfo
        } = this.elements
        age.classList.add('input__form');
        dopInfo.classList.add('form__more-info')
        this.allElementsGetContent()
    }

    allElementsGetContent() {
        let {age,} = this.elements
        age.placeholder = "Enter your age";
    }

    sendSome() {
        const formChildrenArr = document.querySelectorAll('.input__form, .textarea__form, .form__select')
        const forSend = {...formChildrenArr}
        let dopInfo = {age: formChildrenArr[6].value}
        super.send(forSend, dopInfo)

    }

    renderSubsidiaryElement() {
        super.removeDopInfo()
        this.allElementsGetStyle()
        let {
            age,
            form,
            dopInfo,
        } = this.elements
        dopInfo.append(age,)
        form = document.querySelector('.btn-send')
        form.insertAdjacentElement('beforebegin', dopInfo)
    }
}


export default {
    ClassVisit,
    VisitDentist,
    Cardiologist,
}
