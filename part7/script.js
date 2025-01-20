//example-1

let hold=document.getElementById('changeTextButton').addEventListener('onclick',function(){//can;t use arrow function
   let para=document.getElementById("myParagraph");
   para.textContent="the paragraph is changed !"
})

//example-2

document.getElementById("highlightFirstCity").addEventListener("click",function(){
   let citiesList= document.getElementById("citiesList");
   citiesList.firstElementChild.classList.add('highlight');
})

//example-3
document.getElementById("changeOrder").addEventListener("click",function(){
    document.getElementById("coffeeType").innerText="Espresso";
    document.getElementById("coffeeType").style.backgroundColor="brown";
    document.getElementById("coffeeType").style.padding="5px";

})

//EXAMPLE - 4
document.getElementById("addNewItem").addEventListener("click",function(){
     let newItem=document.createElement("li");
     newItem.textContent="Eggs";
     document.getElementById("shoppingList").appendChild(newItem);
})

//Example-5
document.getElementById("removeLastTask").addEventListener("click",function(){
   let taskList= document.getElementById("taskList");
   taskList.lastElementChild.remove()
})