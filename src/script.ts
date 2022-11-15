const tipInput = <HTMLInputElement>document.getElementById("tip");
const discountInput = <HTMLInputElement>document.getElementById("discount");
const priceInput = <HTMLButtonElement>document.getElementById("input-price");
const submitBtn = <HTMLInputElement>document.getElementById("submit-btn");

let price: number = Number(priceInput.value);
let discountPercent: number = Number(discountInput.value);
let discountPrice: number = Math.floor((discountPercent / 100) * price);
let tip: number = Number(tipInput.value);
let tipPrice: number = Math.floor((tip / 100) * price);
let totalPrice: number = 0;

priceInput.addEventListener("input", function (e) {
  price = Number((<HTMLInputElement>e.target).value);
  setCalculate();
});
discountInput.addEventListener("input", (e) => {
  discountPercent = Number((<HTMLInputElement>e.target).value);
  discountPrice = Math.floor((discountPercent / 100) * price);
  setCalculate();
});
tipInput.addEventListener("input", (e) => {
  tip = Number((<HTMLInputElement>e.target).value);
  tipPrice = Math.floor((tip / 100) * price);
  setCalculate();
});
submitBtn.addEventListener("click", () => {
  totalPrice = Math.floor(price - discountPrice + tipPrice);
  setCalculate();
});
const formatChanger = (num: number = 0): string => {
  return new Intl.NumberFormat("fa-Ir").format(num);
};
function setCalculate(): void {
  totalPrice = Math.floor(price - discountPrice + tipPrice);
  (<HTMLParagraphElement>document.getElementById("price-box")).innerHTML =
    formatChanger(price);
  (<HTMLParagraphElement>(
    document.getElementById("discount-box-per")
  )).innerHTML = formatChanger(discountPercent);
  (<HTMLParagraphElement>document.getElementById("discount-box")).innerHTML =
    formatChanger(discountPrice);
  (<HTMLParagraphElement>document.getElementById("tip-box-per")).innerHTML =
    formatChanger(tip);
  (<HTMLParagraphElement>document.getElementById("tip-box")).innerHTML =
    formatChanger(tipPrice);
  (<HTMLParagraphElement>document.getElementById("final-price")).innerHTML =
    formatChanger(totalPrice);
}
