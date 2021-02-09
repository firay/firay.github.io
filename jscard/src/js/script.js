import utils from "../module/utils-functions.js";


// utils.showCards()



import API from "../module/API.js";
// import card from "../module/card.js";

const btnAddCard = document.querySelector('#btnAddCard');
// const btnDeleteCard = document.querySelector('#btnDeleteCard');
// const btnChangeCard = document.querySelector('#btnChangeCard');

btnAddCard.style.backgroundColor = 'red';
btnAddCard.style.padding = 20 + 'px';

// btnDeleteCard.style.backgroundColor = 'blue';
// btnDeleteCard.style.padding = 20 + 'px';
//
// btnChangeCard.style.backgroundColor = 'green';
// btnChangeCard.style.padding = 20 + 'px';


// btnAddCard.addEventListener('click', (e) => {
//     console.log("working");
//     fetch('https://ajax.test-danit.com/api/v2/cards', {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer b72f0991-4578-4644-9fb3-a034dde491d8`
// }
//     }).then(res => res.json())
//         .then(tr => {
//             console.log(tr);
//         })
//
// })


btnAddCard.addEventListener('click', async () => {
    const token = await API.auth({
        email: 'artat@ukr.net',
        password: "123321"
    }).then(r => r.text());

    localStorage.setItem('token', token);
    const cards = await API.getCards();
    console.log(cards);
});

//
// btnChangeCard.addEventListener("click", (e) => {
// fetch("https://ajax.test-danit.com/api/v2/cards/8202", {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${"b72f0991-4578-4644-9fb3-a034dde491d8"}`
//     },
//     body: JSON.stringify({
//         id: 8202,
//         title: 'Визит к кардиологу',
//         description: 'Новое описание визита',
//         doctor: 'Cardiologist',
//         bp: '24',
//         age: 445,
//         weight: 70
//     })
// })
//     .then(response => response.json())
//     .then(response => console.log(response))
// })
//
// let test = new card.UserCard;
// console.log(test);
// test.getInfo();
// // test.getContent();
// test.render();


// import API from "../module/API.js";
import ClassForm from "../module/ClassForm.js";
let trySome = new ClassForm.ClassForm ({
})
import classVisit from "../module/classVisit.js";
let dd = new classVisit.ClassVisit
import ClassForModal from "../module/classModal.js"
import Form from '../module/ClassForm.js'
// import ClassForm from "../module/ClassForm.js";
let some =  new ClassForModal.ClassModal
let startWork = document.querySelector('.getCards');
startWork.addEventListener('click', e =>{
    some.render()
    dd.renderStandardItems()
    console.log("Сам ты лузер");
})
import auth from "../module/Auth-regis.js";

const authBtn = document.querySelector('#authorization');
let formAuth = new auth.Athorization;

authBtn.addEventListener('click', (e) => {
    some.render()
    formAuth.authRender()
})