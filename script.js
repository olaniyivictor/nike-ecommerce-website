'use strict'
const menu = document.querySelector('#menu')
const close = document.querySelector('#close');
const navbar =document.querySelector('#navbar');
const minusBtn = document.querySelector('#minus');
const  plusBtn = document.querySelector('.plus');
const amount = document.querySelector('.amount');
const cardContent = document.querySelector('#card-content');
const cardButton = document.querySelector('.card-button');
const indicator = document.querySelector('.indicator');
const cardWrp = document.querySelector('.card-wrp');
const cardBtn = document.querySelector('.card-btn');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let amountValue = JSON.parse(localStorage.getItem('Data'))||0;
amount.innerText= amountValue;
menu.addEventListener('click',function(){
  navbar.style.left='0%';
  })
  close.addEventListener('click',function(){
      navbar.style.left=`-100%`
  })
  indicator.style.display='block';
  indicator.innerText = amountValue;

//writing a function for the handle plus
const handleplus = function(){
  amountValue++;
  amount.innerText= amountValue;
 localStorage.setItem('Data',JSON.stringify(amountValue));
}
//adding eventlistener to the handleplus
plusBtn.addEventListener('click',handleplus)

//writing a function for the minus plus
const handleminus = function(){
 if (amountValue > 0){
  amountValue--;
 }
 amount.innerText=amountValue;
 localStorage.setItem('Data',JSON.stringify(amountValue));
}
minusBtn.addEventListener('click',handleminus)
//we add an eventlistener button to the previous button
prev.addEventListener('click',function(){
  plusSlides(-1);
})
//we add an event listener to the next button
next.addEventListener('click',function(){
  plusSlides(+1);
})
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelector('.demo');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    //this to show the pcture of the big one
    slides[slideIndex-1].style.display = "block";

  }


//let's write a function for the add items
const addItems = function(){
  if (amountValue > 0){
    const total = 125.00 * amountValue;
    cardContent.classList.remove("empty");
    cardWrp.innerHTML= `<div class="product">
    <p class="cart" id="cartes">Card</p>
    <div class= "fere">
      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
      <div class="product-info">
        <p class="product-title">Fall Limited Edition Sneakers</p>
       <p class="col"><span class="color">$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
      </div>
      <div class="delete">
      <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
      </div>
    </div>
    <div class="btns">
    <button class="checkout-btn" onclick="checkItem()">Checkout</button>
    </div>
  </div>`
     
  indicator.style.display='block';
  indicator.innerText = amountValue;
  }
}
function deleteItem() {
  cardContent.classList.add('empty')
  cardWrp.innerHTML = ` <p class="cart" id="cartes">Card</p>
  <p class="your">Your cart is empty</p>`;
  indicator.style.display = "none";
  cardWrp.style.display='none';
}

//for the checkitem button
const checkItem= function(){
  cardWrp.style.display='none';
  indicator.style.display='none';
}
const toggleCard = function(){
  cardWrp.style.display='block';
  

}
cardBtn.addEventListener('click',toggleCard);
cardButton.addEventListener('click',addItems);
