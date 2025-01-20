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

//EXAMPLE - 4 //to append or add a new item
document.getElementById("addNewItem").addEventListener("click",function(){
     let newItem=document.createElement("li");
     newItem.textContent="Eggs";
     document.getElementById("shoppingList").appendChild(newItem);
})

//Example-5 about events various events
document.getElementById("removeLastTask").addEventListener("click",function(){
   let taskList= document.getElementById("taskList");
   taskList.lastElementChild.remove()
})

//Example-6 //how to select the one we want

document
.getElementById("clickMeButton").addEventListener("mouseover"//dblclick,hover,mouseover
    ,function(){
    console.log("surazz")
})

//Example -7 to select when we want

document.getElementById("teaList").addEventListener("click",function(event){
   //console.log(event.target)//event selected 
   if (event.target && event.target.matches(".teaItem")){ //it means we are restricting the selective option only with the class "teaItem"
    console.log("you selected"+event.target.textContent)
}
})

//example-8 form handling

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback =document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent=`feedback is ${feedback}`
    document.getElementById("suraz").textContent="Submitted"

console.log("submitted")
})

//Example-9 DOM LOADING
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById(domStatus).textContent="DOM fully loaded"
})
//example-10;
document.getElementById("toggleHighlight").addEventListener("click",function(){
    document.getElementById("descriptionText").classList.toggle("highlight")
})