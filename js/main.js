//recupero i due campi input del form e il button

const kmInputElement = document.getElementById("km_travel");
const userAgeElement = document.getElementById("user_age");
const btnClick = document.querySelector(".btn-click");

//al click sul bottone richiamo funzione

btnClick.addEventListener("click", function () {
    //raccolgo i dati contenuti nell'input
    const kilometres = kmInputElement.value;
    const age = userAgeElement.value;

    const price = kilometres * 0.21;
    //console.log(price);

    let discount = 0; //di default lo sconto è 0
    let coupon;
    let finalPrice;

    if (age < 18) {
        discount = 20;
    } else if (age > 65) {
        discount = 40;
    }

    coupon = (price * discount) / 100; //sarà naturalmente 0 se non entro nell'if
    finalPrice = price - coupon;
    coupon = coupon.toFixed(2);
    finalPrice = finalPrice.toFixed(2);
    console.log(`Il prezzo del biglietto è di ${price}€, lo sconto applicato è del ${discount}% (${coupon}€),
    il prezzo finale da pagare è di ${finalPrice}€`);
})