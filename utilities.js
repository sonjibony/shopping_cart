
function button (fieldId,isIncrease){
    const phoneAmountElement =document.getElementById(fieldId);
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

function updatePrice(price,isPositive){
    const phonePriceElement=  document.getElementById(price);
    const phonePrice= parseInt(phonePriceElement.innerText)
    if(price== 'phone-price'){
        if( isPositive===true){
        phonePriceElement.innerText = phonePrice+ 1278;   
        }
        else{
       phonePriceElement.innerText = phonePrice- 1278;
       }
    }
     else{
        if( isPositive===true){
            phonePriceElement.innerText = phonePrice+ 59;   
            }
            else{
           phonePriceElement.innerText = phonePrice- 59;
           }
     }  
    }
