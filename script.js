const list = document.getElementById("list-cont");
const input = document.getElementById("textinput");

function addtask(){
    if(input.value ==''){
        alert("Please enter the content");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    input.value="";
    saveData();
}
list.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("test");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",list.innerHTML);
}
function Display(){
    list.innerHTML = localStorage.getItem("data");
}
Display();


