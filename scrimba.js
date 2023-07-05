let count=0;
let saveEn= document.getElementById("saveEl");
let countEl=document.getElementById("countEl");

function increment(){
   
    count+=1;
    countEl.textContent=count;
}

function save(){
    let countStr= count + " - ";

    saveEn.textContent+=countStr;
    countEl.textContent=0;
    count=0;
    
}




