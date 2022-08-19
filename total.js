document.getElementById('btn-check-out').addEventListener('click',function(){

    const subtotalElement = document.getElementById('subtotal');
    const subtotal = parseInt (subtotalElement.innerText)
    const phonePriceElement = document.getElementById('phone-price');
    const phonePrice = parseInt (phonePriceElement.innerText);
    const casePriceElement = document.getElementById('case-price');
    const casePrice = parseInt (casePriceElement.innerText);
    



    const taxElement = document.getElementById('tax');
    const tax = parseFloat (phonePriceElement.innerText);

    const totalElement = document.getElementById('total');
    const total = parseFloat (totalElement.innerText);

    subtotalElement.innerText=phonePrice+casePrice;

 taxElement.innerText =  (subtotal* 0.1).toFixed(2);

totalElement.innerText = subtotal+ tax;


    console.log(subtotal, phonePrice, ) ;
})