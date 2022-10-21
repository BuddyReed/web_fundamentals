var count = 3
function clicked(){
    count++
    var element = document.querySelector(".uplikes")
    console.log(element)
    element.innerText = `${count} like(s)`
}
