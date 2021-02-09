import getInfo from "../module/utils-functions.js";





class UserCard {
    constructor() {
        this.elements = {
            cardPlace: document.createElement('div'),
            cardTitle: document.createElement('h4'),
            cardDescription: document.createElement('p'),
            cardDoctor: document.createElement('p'),
            cardFio: document.createElement("p"),
            cardVisitTarget: document.createElement('p'),
            cardEmergency: document.createElement('p'),
            cardLoadMore: document.createElement('button'),
            cardEdit: document.createElement('button'),
            cardDelete: document.createElement('button'),
            testId: 8202,
            token: 'b72f0991-4578-4644-9fb3-a034dde491d8',
        };
    };
        getInfo () {
            fetch(`https://ajax.test-danit.com/api/v2/cards/ + ${this.elements.testId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${"b72f0991-4578-4644-9fb3-a034dde491d8"}`
                },
            }).then(result => {
                    return result.json();
                }
            ).then(res => {
                console.log(res);
                this.getContent(res)
            })
        };

        getContent (obj)  {
            let {
                cardTitle,
                cardDescription,
                cardDoctor,
                cardFio,
                cardEmergency,
                cardVisitTarget,
                cardLoadMore,
                cardEdit,
                cardDelete,
                testId,
                token,
            } = this.elements
            // cardAge.textContent = `Возраст: ${obj.age}`;
            cardTitle.textContent = `${obj.title}`;
            cardDescription.textContent = `${obj.description}`;
            cardDoctor.textContent = `${obj.doctor}`;
            cardFio.textContent = `${obj.name}`|| undefined;

            // document.body.append(this.cardAge, this.cardEmergency)
        };
        render  () {
            let {
                cardEmergency,
                cardTitle,
                cardDescription,
                cardDoctor,
                cardFio
            } = this.elements
            document.body.append(cardEmergency,
                cardTitle,
                cardDescription,
                cardDoctor,
                cardFio)
        }

}

// let gogen = new UserCard(
//
// )
// gogen.getInfo()
// gogen.render()

export default {
    UserCard,
}
