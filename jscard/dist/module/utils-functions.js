function showCards() {
    fetch(`https://ajax.test-danit.com/api/v2/cards/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${"b72f0991-4578-4644-9fb3-a034dde491d8"}`
        },
    }).then(result => {
            return result.json();
        }
    ).then(arr => {
            arr.forEach(item => {
                // cardDelete(item.id)
                if (item.doctor === "Therapist"){
                new TherapistCard(item).therapyCardRender()
            }
                if (item.doctor === "Dentist"){
                    new DentistCard(item).dentistCardRender()
                } if (item.doctor === "Cardiologist"){
                    new CardioCard(item).cardioCardRender()
                }
            })
        }
    )
}

function Card(item) {
    let {
        cardName = item.name,
        cardTitle = item.title,
        cardDescription = item.description,
        cardDoctor = item.doctor,
        cardTarget = item.target,
        cardStatus = item.status || undefined,
        cardPressure = item.pressure || undefined,
        cardDiseases = item.diseases || undefined,
        cardAge = item.age,
    } = item;

    document.body.insertAdjacentHTML("beforebegin",
        `<div class="visits cardio">
<h4 class="card-title">${cardTitle}</h4>
<p class="card-title">ФИО: ${cardName}</p>
<p class="card-title">Специалист: ${cardDoctor}</p>
<button class="btn-show" id="${item.id}">SHOW MORE</button>
<div class="hide-info ${item.id}">
<p>Age: ${cardAge}</p>
<p>Visit's target: ${cardTarget}</p>
<p>Visit's description: ${cardDescription}</p>
<p>Status: ${cardStatus}</p>
<p>Norm pressure: ${cardPressure}</p>
</div> 
</div>`);
    const btnShow = document.getElementById(item.id.toString());
    const hiddenInfo = document.getElementsByClassName(item.id.toString());
    let marker = hiddenInfo[0].className.slice(10, hiddenInfo[0].className.length)
    btnShow.addEventListener('click', (e) => {
        console.log(hiddenInfo[0]);
        console.log(marker);
        console.log(btnShow.textContent);
        if (marker === item.id.toString()) {
            hiddenInfo[0].classList.toggle("hide-info")
            if (!hiddenInfo[0].classList.contains('hide-info')) {
                btnShow.textContent = '';
                btnShow.textContent = 'SHOW LESS'
            } else {
                btnShow.textContent = '';
                btnShow.textContent = 'SHOW MORE'
            }
        }

    })
}


showCards();


// export default {
//     getInfo,
// }


// const btnShow = document.getElementById(item.id.toString());
// const hiddenInfo = document.getElementsByClassName(item.id.toString());
// let marker = hiddenInfo[0].className.slice(10, hiddenInfo[0].className.length)
// btnShow.addEventListener('click', (e) =>{
//     console.log(hiddenInfo[0]);
//     console.log(marker);
//     if (marker === item.id.toString()){
//         hiddenInfo[0].classList.toggle("hide-info")
//     }
//
// })

class DoctorsCard {
    constructor(item) {
        this.nameValue = item.name;
        this.titleValue = item.title;
        this.descriptionValue = item.description;
        this.doctorValue = item.doctor;
        this.targetValue = item.target;
        this.cardId = item.id;
        this.emergency = item.emergency;

        this.elements = {
            cardBoard: document.querySelector('.board'),
            cardContainer: document.createElement('div'),
            cardTitle: document.createElement('h4'),
            cardName: document.createElement('p'),
            cardDoctor: document.createElement('p'),
            cardBtnShow: document.createElement('button'),
            cardHiddenDiv: document.createElement('div'),
            cardHiddenBtn: document.createElement('div'),
            cardTarget: document.createElement('p'),
            cardDescription: document.createElement('p'),
            cardStatus: document.createElement('h4'),
            cardBtnChange: document.createElement('button'),
            cardSelectChange: document.createElement('select'),
            cardBtnOk: document.createElement('button'),

            cardCheckDiv: document.createElement('div'),
            cardCheckSelect: document.createElement('select'),
            cardCheckBtn: document.createElement("button")
        }


    }

    getContent() {
        let {
            cardContainer,
            cardTitle,
            cardName,
            cardDoctor,
            cardBtnShow,
            cardHiddenDiv,
            cardTarget,
            cardDescription,
            cardStatus,
            cardBtnChange,
            cardSelectChange,
            cardBtnOk,
            cardCheckBtn,
            cardCheckSelect,
            cardCheckDiv
        } = this.elements;
        cardTitle.textContent = `${this.titleValue}`;
        cardName.textContent = `ФИО: ${this.nameValue}` || undefined;
        cardDoctor.textContent = `${this.doctorValue}`;
        cardBtnShow.textContent = `SHOW MORE`;
        cardTarget.textContent = `Цель визита: ${this.targetValue}`;
        cardDescription.textContent = `Описание: ${this.descriptionValue}` || undefined;
        cardStatus.textContent = `Срочность: ${this.emergency}` || undefined;
        cardBtnChange.textContent = 'EDIT';
        cardSelectChange.innerHTML = `<option>Change</option><option>Delete</option>`;
        cardBtnOk.textContent = 'OK';
        cardCheckSelect.innerHTML = `<option class="select-default">Status</option><option>Open</option><option>Done</option>`;
        cardCheckBtn.textContent = 'OK';
    }

    getStyles() {
        let {
            cardContainer,
            cardTitle,
            cardName,
            cardDoctor,
            cardBtnShow,
            cardHiddenDiv,
            cardTarget,
            cardDescription,
            cardStatus,
            cardHiddenBtn,
            cardBtnChange,
            cardSelectChange,
            cardBtnOk,
            cardCheckDiv
        } = this.elements;
        cardContainer.classList.add('visits')
        cardTitle.classList.add('card-title')
        cardName.classList.add('card-text')
        cardDoctor.classList.add('card-text')
        cardBtnShow.classList.add('btn-show')
        cardHiddenDiv.classList.add('hide-info')
        cardHiddenBtn.classList.add('hide-btn')
        cardTarget.classList.add('card-text')
        cardDescription.classList.add('card-text')
        cardStatus.classList.add('card-text')
        cardCheckDiv.classList.add('check-status')
        // cardSelectChange.classList.add('card-select')
        cardBtnOk.classList.add(`${this.cardId}`)
    }

    handler() {
        let {cardBtnShow, cardHiddenDiv, cardBtnChange, cardHiddenBtn, cardCheckBtn, cardCheckSelect, cardSelectChange, cardBtnOk} = this.elements;
        cardBtnShow.addEventListener('click', (e) => {
            cardHiddenDiv.classList.toggle('hide-info')
            if (!cardHiddenDiv.classList.contains('hide-info')) {
                cardBtnShow.textContent = 'SHOW LESS'
            } else {
                cardBtnShow.textContent = 'SHOW MORE'

            }
        })
        cardBtnChange.addEventListener('click', (e) => {
            cardHiddenBtn.classList.toggle('hide-btn')
            cardBtnChange.remove()

        })

        cardCheckBtn.addEventListener('click', (e) => {
            let checkStatus = cardCheckSelect.value;
                localStorage.setItem('status', checkStatus)

        })
        cardBtnOk.addEventListener('click', (e) => {
            let cursorTarget = e.target;
            console.log(cursorTarget.className);
            if (cardSelectChange.value === "Delete"){
            cardDelete(cursorTarget.className);
        } if (cardSelectChange.value === "Change") {
                console.log('You are loser')
            }
        })

    }

    render() {
        let {
            cardBoard,
            cardContainer,
            cardTitle,
            cardName,
            cardDoctor,
            cardBtnShow,
            cardHiddenDiv,
            cardTarget,
            cardDescription,
            cardStatus,
            cardHiddenBtn,
            cardBtnChange,
            cardSelectChange,
            cardBtnOk,
            cardCheckBtn,
            cardCheckSelect,
            cardCheckDiv
        } = this.elements;
        this.getContent()
        this.getStyles()
        this.handler()
        cardCheckDiv.append(cardCheckSelect, cardCheckBtn)
        cardHiddenBtn.append(cardSelectChange, cardBtnOk)
        cardHiddenDiv.append(cardTarget, cardDescription, cardStatus, cardHiddenBtn, cardBtnChange)
        cardContainer.append(cardTitle, cardName, cardDoctor, cardBtnShow, cardHiddenDiv, cardCheckDiv);
        cardBoard.append(cardContainer)
    }
}

class CardioCard extends DoctorsCard {
    constructor(item) {
        super(item);
        this.pressure = item.pressure;
        this.indexBody = item.indexBody;
        this.seek = item.seek;
        this.age = item.age;
        this.elements = {
            ...this.elements,
            cardPressure: document.createElement('p'),
            cardIndexBody: document.createElement('p'),
            cardSeek: document.createElement('p'),
            cardAge: document.createElement('p'),
        }
    }

    cardioCardgetContent() {
        let {
            cardPressure,
            cardIndexBody,
            cardSeek,
            cardAge
        } = this.elements;
        // console.log(this.imb);
        cardPressure.textContent = `Обычное давление: ${this.pressure}` || undefined;
        cardIndexBody.textContent = `Индекс массы тела: ${this.indexBody}` || undefined;
        cardSeek.textContent = `Заболевания ССС: ${this.seek}` || undefined;
        cardAge.textContent = `Возраст: ${this.age}` || undefined;
    }

    cardioCardgetStyles() {
        let {
            cardContainer,
            cardPressure,
            cardIndexBody,
            cardSeek,
            cardAge
        } = this.elements;
        cardContainer.classList.add('cardio')
        cardPressure.classList.add('card-text')
        cardIndexBody.classList.add('card-text')
        cardSeek.classList.add('card-text')
        cardAge.classList.add('card-text')
    }

    cardioCardRender() {
        this.render()
        let {
            cardHiddenDiv,
            cardPressure,
            cardIndexBody,
            cardSeek,
            cardAge,
            cardBtnChange,
            cardHiddenBtn,
        } = this.elements;
        this.cardioCardgetContent()
        this.cardioCardgetStyles()
        cardHiddenDiv.append(cardPressure, cardSeek, cardAge, cardIndexBody, cardBtnChange, cardHiddenBtn)
    }

}

class DentistCard extends DoctorsCard {
    constructor(item) {
        super(item);
        this.lastDate = item.lastDate;
        this.elements = {
            ...this.elements,
            cardLastDate: document.createElement('p')
        }
    }

    dentistGetContent() {
        let {
            cardLastDate
        } = this.elements
        cardLastDate.textContent = `Последний визит: ${this.lastDate}` || undefined
    }

    dentistGetstyles() {
        let {cardLastDate, cardContainer} = this.elements;
        cardLastDate.classList.add('card-text');
        cardContainer.classList.add('dentist')
    }

    dentistCardRender() {
        this.render()
        let {
            cardHiddenDiv,
            cardBtnChange,
            cardHiddenBtn,
            cardLastDate
        } = this.elements;
        this.dentistGetContent();
        this.dentistGetstyles();
        cardHiddenDiv.append(cardLastDate, cardBtnChange, cardHiddenBtn)
    }
}

class TherapistCard extends DoctorsCard{
    constructor(item) {
        super(item);
        this.userAge = item.age
        this.elements = {
            ...this.elements,
            cardUserAge: document.createElement('p')
        }
    }
    therapyGetContent() {
        let {cardUserAge} = this.elements;
        cardUserAge.textContent = `Возраст: ${this.userAge}` || undefined;
    }
    therapyGetStyles() {
        let {cardContainer, cardUserAge} = this.elements;
        cardUserAge.classList.add('card-text');
        cardContainer.classList.add('therapy')
    }
    therapyCardRender() {
        this.render()
        let {
            cardHiddenDiv,
            cardBtnChange,
            cardHiddenBtn,
            cardUserAge
        } = this.elements;
        this.therapyGetContent();
        this.therapyGetStyles();
        cardHiddenDiv.append(cardUserAge, cardBtnChange, cardHiddenBtn)
    }

}




// console.log(new CardioCard());

function cardDelete (cardId) {
    fetch(`https://ajax.test-danit.com/api/v2/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${"b72f0991-4578-4644-9fb3-a034dde491d8"}`
        },
    })
}

export default {
    showCards,
    DoctorsCard,
    CardioCard,
    DentistCard,
    TherapistCard,
    cardDelete
}