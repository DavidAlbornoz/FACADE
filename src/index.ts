import { Client } from './classes/Client.class.js';
import { Facade } from './classes/Facade.class.js';

//INFORMATION
let notification = document.getElementById('information') as HTMLDivElement;

// ANCHORS
let anchorPay = document.getElementById('pagePay') as HTMLAnchorElement;
let anchorInfo = document.getElementById('pageInfo') as HTMLAnchorElement;

anchorPay.addEventListener('click', changePagePay);
anchorInfo.addEventListener('click', changePageInfo);

// PAGES
let pagePayment = document.getElementById('payment') as HTMLDivElement;
let pageInfo = document.getElementById('info') as HTMLDivElement;

// INPUTS
let inputName = document.getElementById('inputName') as HTMLInputElement;
let inputTotalFounds = document.getElementById('inputTotalFounds') as HTMLInputElement;
let inputEmail = document.getElementById('inputEmail') as HTMLInputElement;
let inputPay = document.getElementById('inputPay') as HTMLInputElement;

// RESULTS
let textResults = document.getElementById('result') as HTMLParagraphElement;
let results: string[] = [];

// BUTTONS
let btnPay = document.getElementById('btnPay') as HTMLButtonElement;
btnPay.addEventListener('click', makeAPay);

// FUNCTIONS
function makeAPay(){
    let name: string  = inputName.value;
    let totalFounds: number   = parseFloat(inputTotalFounds.value);
    let email: string = inputEmail.value;
    let pay: number = parseFloat(inputPay.value);

    let client: Client = new Client(name, totalFounds, email);
    let facade: Facade = new Facade();
    results = facade.virtualPay(client, pay);

    setResults();

}


function setResults(){

    notification.classList.remove('d-none');
    notification.classList.add('d-block');

    let totalResults = '';

    for (const result of results) {
        totalResults += (result + '\n');
    }

    textResults.innerText = totalResults;
}

function changePagePay(){
    pageInfo.classList.remove('d-block');
    pageInfo.classList.add('d-none');
    pagePayment.classList.remove('d-none');
    pagePayment.classList.add('d-block');
}

function changePageInfo(){
    pageInfo.classList.remove('d-none');
    pageInfo.classList.add('d-block');
    pagePayment.classList.add('d-none');
    pagePayment.classList.remove('d-block');
}