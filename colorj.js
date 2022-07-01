boxes=document.querySelectorAll(".boxx")
correctColorr=document.querySelector(".correctcol")
result=document.querySelector(".result")
newcolors=document.querySelector(".newcolors")
easy=document.querySelector(".easy")
hard=document.querySelector(".hard")

colors=[]
createColor= function (number) {
    for(i=0; i<number; i++){
    red =Math.floor(Math.random()*250)
    green=Math.floor(Math.random()*250)
    blue =Math.floor(Math.random()*250)
    col= `rgb(${red}, ${green}, ${blue})`
    colors.push(col)
    }
}
createColor(6)

function setColors(number) {
    for (let i = 0; i < number; i++) {
        boxes[i].style.backgroundColor = colors[i];   
    }
}
setColors(6)
correctColorr.textContent =colors[Math.floor(Math.random()*6)]
hard.style.display="none"
function checkClick(array) {
 for (let i = 0; i < array.length; i++) {
     array[i].addEventListener("click", function () {
        //  console.log(array[i])
         if (array[i].style.backgroundColor==correctColorr.textContent) {
            //  console.log(correctColorr);
             result.textContent="CORRECT"
             for (let i = 0; i < array.length; i++) {
                 array[i].style.backgroundColor=correctColorr.textContent
             }
             newcolors.textContent="play again"
             correctColorr.style.backgroundColor=correctColorr.textContent
             correctColorr.parentElement.style.backgroundColor=correctColorr.textContent
             
            } else {
                // console.log("try again");
                result.textContent="TRY AGAIN"
                this.style.backgroundColor="rgba(41, 36, 41, 0.932)"
            }
        })
    }}
    
    checkClick(boxes)
    
    newcolors.addEventListener("click", function () {
        // console.log("clicked");
        
        correctColorr.parentElement.style.backgroundColor="rgba(40, 153, 218, 0.973)";
        correctColorr.style.backgroundColor="rgba(40, 153, 218, 0.973)";
    result.textContent=""
    if (hard.style.display=="none") {
        harrd()
    } else {
        eassy()
    }
    if (newcolors.textContent=="play again") {
        newcolors.textContent="new colors"
    }
})

easy.addEventListener("click", eassy)

function eassy(){
    colors=[]
createColor(3)
setColors(3)
correctColorr.textContent =colors[Math.floor(Math.random()*3)]

removeBlocks = function(array) {
    for (let index = 3; index < array.length; index++) {
        array[index].style.display= "none";
    }
}
removeBlocks(boxes)
easy.style.display="none"
hard.style.display="inline"
}

hard.addEventListener("click", harrd)


function harrd () {
showBlocks = function(array) {
    for (let index = 3; index < array.length; index++) {
        array[index].style.display= "inline-block";
    }
}
showBlocks(boxes)
colors=[]
createColor(6)
setColors(6)
correctColorr.textContent =colors[Math.floor(Math.random()*6)]
hard.style.display="none"
easy.style.display="inline"
}