let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",function(){
    let item = document.createElement("li");  //created li
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.append(delBtn);  //added del btn to li
    ul.append(item);  //added the created li to ul
    inp.value = "";   //for blank input area 
})

ul.addEventListener("click",function(event){
    if( event.target.nodeName == "BUTTON"){
       
        // console.log(event.target)
        let listItem = event.target.parentElement;
        // console.log(event.target.parentElement);
        listItem.remove();
        console.log("deleted");
    }
   
    // console.log(event.target.nodeName);             //target means who was the target by which event got triggered and nodeName tells us the exact name of element which triggered the event.
   
})

//event.target.parentElement=
//event.target means which element triggered that function and then we want its parent element
//we want it to be removed so remove()
//we stored parent element in variable i.e. listItem
//target means element that triggers here is button
//the parent element of button is li,we want that to be deleted

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();

//         console.log("item deleted");
//     });
// }
//this event listener will not apply on new list items,so we will use event delegation
//we will add event listener to the parent instead of child,so that it will be triggered for both.
