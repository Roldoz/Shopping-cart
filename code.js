/*************** Setting initial quantities ****************/
let quantities = Array.from(document.querySelectorAll('.qte'))
for (let quantity of quantities){
    quantity.setAttribute('value',1)
}
/*************** Setting initial prices ****************/
var price1= 15;
var price2= 20;
var price3= 30;
var pu1 = 15;
var pu2 = 20;
var pu3 = 30;

let total=price1 + price2 + price3
document.querySelector('.price-1').innerHTML=price1+' dt'
document.querySelector('.price-2').innerHTML=price2+' dt'
document.querySelector('.price-3').innerHTML=price3+' dt'

document.querySelector('.total').innerHTML=total+' dt'




  document.querySelector(`.item-1 > .plus-btn`)
.addEventListener("click", function(e) {
    document.querySelector(`.qte-1`).setAttribute('value',
    Number(document.querySelector(`.qte-1`).getAttribute('value'))+1);
    price1 = price1 + pu1;
    total=total+pu1;
    document.querySelector(`.price-1`).innerHTML=price1+' dt';
    document.querySelector('.total').innerHTML=total+' dt';
});

document.querySelector(`.item-2 > .plus-btn`)
.addEventListener("click", function(e) {
    document.querySelector(`.qte-2`).setAttribute('value',
    Number(document.querySelector(`.qte-2`).getAttribute('value'))+1);
    price2 = price2 + pu2;
    total=total+pu2;
    document.querySelector(`.price-2`).innerHTML=price2+' dt';
    document.querySelector('.total').innerHTML=total+' dt';
});

document.querySelector(`.item-3 > .plus-btn`)
.addEventListener("click", function(e) {
    document.querySelector(`.qte-3`).setAttribute('value',
    Number(document.querySelector(`.qte-3`).getAttribute('value'))+1);
    price3 = price3 + pu3;
    total=total+pu3;
    document.querySelector(`.price-3`).innerHTML=price3+' dt';
    document.querySelector('.total').innerHTML=total+' dt';
});


document.querySelector(`.item-1 > .minus-btn`)
.addEventListener("click", function(e) {
    if(Number(document.querySelector(`.qte-1`).getAttribute('value')) >1){
        document.querySelector(`.qte-1`).setAttribute('value',
        Number(document.querySelector(`.qte-1`).getAttribute('value'))-1);
        price1=price1-pu1;
        total=total-pu1;
        document.querySelector(`.price-1`).innerHTML=price1+' dt';
        document.querySelector('.total').innerHTML=total+' dt';
    } else {
        document.querySelector(`.qte-1`).setAttribute('value',1);
    }
    
});

document.querySelector(`.item-2 > .minus-btn`)
.addEventListener("click", function(e) {
    if(Number(document.querySelector(`.qte-2`).getAttribute('value')) >1){
        document.querySelector(`.qte-2`).setAttribute('value',
        Number(document.querySelector(`.qte-2`).getAttribute('value'))-1);
        price2=price2-pu2;
        total=total-pu2;
        document.querySelector(`.price-2`).innerHTML=price2+' dt';
        document.querySelector('.total').innerHTML=total+' dt';
    } else {
        document.querySelector(`.qte-2`).setAttribute('value',1);
    }
    
});



document.querySelector(`.item-3 > .minus-btn`)
.addEventListener("click", function(e) {
    if(Number(document.querySelector(`.qte-3`).getAttribute('value')) >1){
        document.querySelector(`.qte-3`).setAttribute('value',
        Number(document.querySelector(`.qte-3`).getAttribute('value'))-1);
        price3=price3-pu3;
        total=total-pu3;
        document.querySelector(`.price-3`).innerHTML=price3+' dt';
        document.querySelector('.total').innerHTML=total+' dt';
    } else {
        document.querySelector(`.qte-3`).setAttribute('value',1);
    }
    
});





document.querySelector(`.icon-1`)
       .addEventListener("click", function(e) {
        total=total-price1;
        document.querySelector('.total').innerHTML=total+' dt';
        document.querySelector(`.product-1`).remove();
});

document.querySelector(`.icon-2`)
       .addEventListener("click", function(e) {
        total=total-price2;
        document.querySelector('.total').innerHTML=total+' dt';
        document.querySelector(`.product-2`).remove();
});

document.querySelector(`.icon-3`)
       .addEventListener("click", function(e) {
        total=total-price3;
        document.querySelector('.total').innerHTML=total+' dt';
        document.querySelector(`.product-3`).remove();
});


 


var heart = document.getElementsByClassName("fa-heart");
  Array.from(heart).forEach(element => {
      element.addEventListener("click", () => element.style.color = '#f06292')
      
  });



// var hearts = document.querySelectorAll(".fa-heart");           ------ it won't work :/ -------
// Array.from(hearts).forEach(el => {
// el.addEventListener("click",() => {
// el.classList.toggle("pink")
// });

// });

