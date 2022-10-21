// changing the innertext JS 
var count = 0
function clicked(){
    count++
    // GRABBING THE H1 ELEMENT
    var element = document.querySelector(".header")
    // console.log(element) checking code can work
    // DISPLAY TO THE USER THE COUNT
    // element.innerText = "You clicked " + count + " times!"
    element.innerText = `You clicked ${count} times!`
}
// changing the innertext JS 

// removing a tag using the remove with (this)
function remove(element){
    element.remove()
}

// understanding remove entire box like cookie box on webpage
function removeCookies(){
    var element = document.querySelector(".cookieBox")
    element.remove()
}

// changing a count within a button 
var count2 = 0
function buttonClick(element){
    count2++
    element.innerText = `You clicked ${count2} times!`
}