let cart = 0;

function addCart(){
cart++;
document.getElementById("count").innerHTML = cart;
}

const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let filter = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card=>{

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(filter)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});
