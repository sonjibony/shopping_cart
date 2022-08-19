/*
function button (isIncrease){
    const phoneAmountElement =document.getElementById('phone-field');
    const phoneAmount =parseInt(phoneAmountElement.value);
let newPhoneAmount;
    if(isIncrease === true){
        newPhoneAmount = phoneAmount+1;
        phoneAmountElement.value= newPhoneAmount;
    }
    else{
        newPhoneAmount = phoneAmount-1;
        phoneAmountElement.value=newPhoneAmount;
    }
   return newPhoneAmount;
}

*/

/*
function updatePhonePrice(isPositive){
const phonePriceElement=  document.getElementById('phone-price');
const phonePrice= parseInt(phonePriceElement.innerText)
if(isPositive){
    phonePriceElement.innerText = phonePrice+ 1278;   
}
else{
phonePriceElement.innerText = phonePrice- 1278;
}
}
*/
document.getElementById('btn-minus-phone').addEventListener('click',function(){
button('phone-field',false );
updatePrice('phone-price',false);
})

document.getElementById('btn-plus-phone').addEventListener('click',function(){
 button ('phone-field',true);
 updatePrice('phone-price',true);

})

