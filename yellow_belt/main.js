function message(){
    console.log()
    alert("Your Cart is Empty")
}

function removebox(){
    var element = document.querySelector(".alertbox")
    element.remove()
}

function over(element){
    // console.log(element)
    element.src = "./images/assets/succulents-2.jpg"
}

function out(element){
    element.src = "./images/assets/succulents-1.jpg"
}