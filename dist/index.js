import { Client } from './classes/Client.class.js';
import { Facade } from './classes/Facade.class.js';
//INFORMATION
let notification = document.getElementById('information');
// ANCHORS
let anchorPay = document.getElementById('pagePay');
let anchorInfo = document.getElementById('pageInfo');
anchorPay.addEventListener('click', changePagePay);
anchorInfo.addEventListener('click', changePageInfo);
// PAGES
let pagePayment = document.getElementById('payment');
let pageInfo = document.getElementById('info');
// INPUTS
let inputName = document.getElementById('inputName');
let inputTotalFounds = document.getElementById('inputTotalFounds');
let inputEmail = document.getElementById('inputEmail');
let inputPay = document.getElementById('inputPay');
// RESULTS
let textResults = document.getElementById('result');
let results = [];
// BUTTONS
let btnPay = document.getElementById('btnPay');
btnPay.addEventListener('click', makeAPay);
// FUNCTIONS
function makeAPay() {
    let name = inputName.value;
    let totalFounds = parseFloat(inputTotalFounds.value);
    let email = inputEmail.value;
    let pay = parseFloat(inputPay.value);
    let client = new Client(name, totalFounds, email);
    let facade = new Facade();
    results = facade.virtualPay(client, pay);
    setResults();
}
function setResults() {
    notification.classList.remove('d-none');
    notification.classList.add('d-block');
    let totalResults = '';
    for (const result of results) {
        totalResults += (result + '\n');
    }
    textResults.innerText = totalResults;
}
function changePagePay() {
    pageInfo.classList.remove('d-block');
    pageInfo.classList.add('d-none');
    pagePayment.classList.remove('d-none');
    pagePayment.classList.add('d-block');
}
function changePageInfo() {
    pageInfo.classList.remove('d-none');
    pageInfo.classList.add('d-block');
    pagePayment.classList.add('d-none');
    pagePayment.classList.remove('d-block');
}
