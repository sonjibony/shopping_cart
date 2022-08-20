function calculation (elementId){
const element = document.getElementById(elementId);
const elementValue = parseInt (element.innerText);

return elementValue;
}

document.getElementById('btn-check-out').addEventListener('click',function(){

 const casePrice= calculation ('case-price');
const phonePrice= calculation('phone-price');

  //subtotal-------
let subtotalElement = document.getElementById('subtotal');
let subtotal = parseFloat(subtotalElement.innerText);
subtotal= casePrice+phonePrice;
subtotalElement.innerText = subtotal;

//tax-------
let taxElement =document.getElementById('tax');
let tax = parseFloat(taxElement.innerText);
tax = parseFloat((subtotal*0.1).toFixed(2));
taxElement.innerText =  tax;

//total-------
let totalElement =document.getElementById('total');
let total = parseFloat(totalElement.innerText);
total = subtotal+ tax;
totalElement.innerText = total ;




})
