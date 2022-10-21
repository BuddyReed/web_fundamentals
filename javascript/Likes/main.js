var count = 9
function clicktop(){
    count++
    var element = document.querySelector(".upliketop")
    console.log(element)
    element.innerText = `${count} like(s)`
}

var upcount = 12
function clickmid(){
    upcount++
    var element = document.querySelector(".uplikemid")
    console.log(element)
    element.innerText = `${upcount} like(s)`
}

var btmcount = 9
function clickbtm(){
    btmcount++
    var element = document.querySelector(".upbtm")
    console.log(element)
    element.innerText = `${btmcount} like(s)`
}