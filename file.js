 let button_add=document.getElementById("add");

let input=document.getElementById("input");
let list=document.getElementById("list");
input.onkeyup=function(){
    button_add.innerHTML= `&#x2B6E;`
   
};
GetFromLocal()
program();

button_add.onclick=function(){
   if(input.value!=null ||input.value!=''){
    button_add.innerHTML= ` &#43;`
    addInToLocalStorage();

    input.value='';
    program();
}
    
    
};


function remove(i){
    const element = document.getElementById(i);

    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
    } else {
        element.style.textDecoration = "line-through";
    }
    document.getElementById("message").innerHTML="you have complete this task ";


}

function dEl(i) {
   
    to_do_list.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(to_do_list));
    GetFromLocal()
    program()

    document.getElementById("message").innerHTML="the task removed successfully"


}
function program(){
    list.innerHTML='';
    for(let i =0 ; i<to_do_list.length ; i++){
        list.innerHTML+= `<div id="ID"class="do"> 
        <p id=${i}> ${to_do_list[i]} </p>
    
        <button onclick="dEl(${i})" id="delete"> 🗑️</button>
        <button onclick="remove(${i})" id="done" > &#128396;</button>
        </div>
    
        `
        document.getElementById("message").innerHTML="the task added successfully"
        
    }

};

function addInToLocalStorage(){
    if (to_do_list!=null){
        to_do_list.push(input.value);
        
        localStorage.setItem("tasks",JSON.stringify(to_do_list));
    }
    else{
        let to_do_list=[];   
    }
}
function GetFromLocal(){
    to_do_list=JSON.parse(localStorage.getItem("tasks"));
}
