function chooseLunch(element){
    console.log(element.value)
    alert("You chose " + element.value)
}

var fullName = ""
function handleInput(element){
    fullName = element.value
    console.log(element.value)
}

function display(){
    alert("Hello, "+ fullName)
}