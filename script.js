const date = new Date();
date.setDate(1);
const monthsDays = document.querySelector('.days')
const lastdays = new Date(date.getFullYear(),date.getMonth()+ 1, 0).getDay();
const  prevday = new Date(date.getFullYear(),date.getMonth(),0).getDate();
const firstday = date.getDay();
const months = [
  "January",
  "Februray",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Septemper",
  "october", 
  "November",
  "December",

];
document.querySelector(".h").innerHTML=months[date.getMonth()];
    document.querySelector(".p").innerHTML = date.toDateString();
  
let days = "";
for(let a = firstday; a>0; a--){
  days+=`<div class = "prev-date" >${prevday - a+1 }</div>`
}
for(let i =1;i<=31;i++){
  days+=`<div>${i}</div>`;
  monthsDays.innerHTML = days;
}