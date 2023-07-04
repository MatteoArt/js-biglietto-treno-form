//recupero i campi input del form e i due button

const nameElement = document.querySelector(".input-name");
const kmInputElement = document.getElementById("km_travel");
const userAgeElement = document.getElementById("user_age");
const btnClick = document.querySelector(".btn-click");
const btnReset = document.querySelector(".btn-reset");

//wrapper
const wrapperElement = document.getElementById("wrapper");

//elementi html dove verrà visualizzato l'output
const priceElement = document.querySelector(".price");
const discountEl = document.getElementById("discount");
const carEl = document.getElementById("carrozza");
const codeCpEl = document.querySelector(".cp-code");
const outNameEl = document.querySelector(".name-pas");

//al click sul bottone richiamo funzione

btnClick.addEventListener("click", function () {
    //raccolgo i dati contenuti nell'input
    let nomePassegero = nameElement.value;
    let kilometres = kmInputElement.value;
    let age = userAgeElement.value;
    age = parseInt(age);
    //console.log(age);
    
    wrapperElement.style.display = "block";

    const price = (kilometres * 0.21).toFixed(2);
    //console.log(price);

    let ticket = "Standard" //di default il biglietto è standard
    let discount = 0; //di default lo sconto è 0
    let coupon;
    let finalPrice;

    if (age < 18) {
        discount = 20;
        ticket = "Scontato - 20%";
    } else if (age > 65) {
        discount = 40;
        ticket = "Scontato - 40%";
    }

    coupon = (price * discount) / 100; //sarà naturalmente 0 se non entro nell'if
    finalPrice = price - coupon;
    coupon = coupon.toFixed(2);
    finalPrice = finalPrice.toFixed(2);
    /*
    console.log(`Il prezzo del biglietto è di ${price}€, lo sconto applicato è del ${discount}% (${coupon}€),
    il prezzo finale da pagare è di ${finalPrice}€`); */
    outNameEl.innerHTML = `${nomePassegero}`;

    discountEl.innerHTML = `Biglietto ${ticket}<br>
    Coupon: ${coupon}€`;
    discountEl.className = "semibold-output";

    carEl.innerHTML = Math.floor(Math.random() * 10 + 1);
    carEl.className = "semibold-output";

    codeCpEl.innerHTML = Math.floor(Math.random() * 100000 + 1);

    priceElement.innerHTML = `${finalPrice}€`;
})

//al click sul bottone 'annulla' resetto i campi input e faccio sparire il biglietto
btnReset.addEventListener("click", function () {
    nameElement.value = "";
    kmInputElement.value = "";
    userAgeElement.value = "";

    outNameEl.innerHTML = "";
    discountEl.innerHTML = "";
    carEl.innerHTML = "";
    codeCpEl.innerHTML = "";
    priceElement.innerHTML = "";

    wrapperElement.style.display = "none";
})