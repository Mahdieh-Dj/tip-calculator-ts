"use strict";
const tipInput = document.getElementById("tip");
const discountInput = document.getElementById("discount");
const priceInput = document.getElementById("input-price");
const submitBtn = document.getElementById("submit-btn");
let price = Number(priceInput.value);
let discountPercent = Number(discountInput.value);
let discountPrice = Math.floor((discountPercent / 100) * price);
let tip = Number(tipInput.value);
let tipPrice = Math.floor((tip / 100) * price);
let totalPrice = 0;
priceInput.addEventListener("input", function (e) {
    price = Number(e.target.value);
    setCalculate();
});
discountInput.addEventListener("input", (e) => {
    discountPercent = Number(e.target.value);
    discountPrice = Math.floor((discountPercent / 100) * price);
    setCalculate();
});
tipInput.addEventListener("input", (e) => {
    tip = Number(e.target.value);
    tipPrice = Math.floor((tip / 100) * price);
    setCalculate();
});
submitBtn.addEventListener("click", () => {
    totalPrice = Math.floor(price - discountPrice + tipPrice);
    setCalculate();
});
const formatChanger = (num = 0) => {
    return new Intl.NumberFormat("fa-Ir").format(num);
};
function setCalculate() {
    totalPrice = Math.floor(price - discountPrice + tipPrice);
    document.getElementById("price-box").innerHTML =
        formatChanger(price);
    (document.getElementById("discount-box-per")).innerHTML = formatChanger(discountPercent);
    document.getElementById("discount-box").innerHTML =
        formatChanger(discountPrice);
    document.getElementById("tip-box-per").innerHTML =
        formatChanger(tip);
    document.getElementById("tip-box").innerHTML =
        formatChanger(tipPrice);
    document.getElementById("final-price").innerHTML =
        formatChanger(totalPrice);
}
