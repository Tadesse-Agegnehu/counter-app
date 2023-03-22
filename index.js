 
let countf =0;
 let count1 = 0;
let counterf = document.getElementById("foreign-count")
let counterl = document.getElementById("local-count")
 let savef = document.getElementById("foreign-el");
 let savel = document.getElementById("local-el");
function foreignIncrement() {
     countf+=1;
      counterf.innerText=countf;
} 
 
 function localIncrement() {
     count1+=1;
     counterl.innerText = count1; 
 }
 
 function save() {
   savef.innerText += counterf.innerText + " - ";
   counterf.innerText=0;
   countf=0;
     
    savel.innerText += counterl.innerText +  " - ";
    counterl.innerText = 0;
    count1=0;
  
 } 
 
