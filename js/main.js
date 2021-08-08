let input = document.querySelector("input");
let i = document.querySelector("i");
let ul = document.querySelector('ul');
let tasks = document.querySelector(".badge-danger");
function getvalueofinput(input){
let getvalue = input.value;
return getvalue;
}
function putinputvalue(){
   
}
///make the input value empty
function emptyinput(input){
    input.value = '';
}
/// get value throug clicking
i.onclick = function(){
    console.log(getvalueofinput(input));
    let li = document.createElement("li");
    let span = document.createElement("span");
    let spantext = document.createTextNode(getvalueofinput(input));
    span.appendChild(spantext);
    li.appendChild(span);
    let button = document.createElement("button");
    let buttontext = document.createTextNode("delete");
    button.appendChild(buttontext);
    li.appendChild(button);
    ul.appendChild(li);
    thechecker();
    //////////////// delete task
    let buttons = document.querySelectorAll("ul li button");
    let buttonsarray = Array.from(buttons);
    console.log(buttonsarray);
    buttonsarray.forEach(ele =>{
        ele.onclick = function(){
         
              this.parentElement.remove();
                thechecker();
                if(document.querySelector("ul li span")){
                    let finishedtasks2 = Array.from(document.querySelectorAll("ul li span.active")); 
                    console.log(finishedtasks2.length);
                    document.querySelector(".badge-primary").textContent = finishedtasks2.length;
                }else{
                    document.querySelector(".badge-primary").textContent = 0;
                }
             
                };
    });
 
        emptyinput(input);
        ///add class active on clicking on a task
      
        let lis = document.querySelectorAll("ul li span");
        lis.forEach(ele =>{
                ele.onclick = function(){
                    this.classList.toggle("active");
                    let finishedtasks = Array.from(document.querySelectorAll("ul li span.active")); 
                    console.log(finishedtasks.length);
                    document.querySelector(".badge-primary").textContent = finishedtasks.length;
                }
        });
};




//thechecker();
function thechecker(){
   tasks.textContent = ul.children.length;
      
        
  
}