function play(){
    let play = document.getElementById("home-screen")
    play.classList.add("hidden")
    let playGround = document.getElementById("play-ground")
    playGround.classList.remove("hidden")
    c();
    
}



// keybord section

function getRandomAlphabet(){

    let A = "abcdefghijklmnopqrstuvwxyz"

    let A1 = A.split("")

    const A2 = Math.random()*25;
    const A3 = Math.round(A2)

    const A4 = A1[A3]
    return A4;

}
function c(){
    const al =  getRandomAlphabet()

    let al1 = document.getElementById("current-alphabet").innerText = al
    color(al)


}

function color(input){
    let color =  document.getElementById(input).style.backgroundColor = "orange"
}
function removeBg(input){
    let kk = document.getElementById(input).style.backgroundColor = "white"

}


// all over the document
function keybordSide(e){
    let get = e.key.toLowerCase(); 
   

    let al1 = document.getElementById("current-alphabet").innerText.toLowerCase(); 
    console.log("al1", al1 , "pressed", get);

    if(get === al1){
        console.log("got point")
        c()
        removeBg(al1)
        
    }
    else{
        console.log("fuck")
    }
}

document.addEventListener("keyup", keybordSide)
