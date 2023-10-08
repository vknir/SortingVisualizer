
function createArray(){
    let array =new Array(numberOfBars);
    console.log("inside create");
    for(let i=0;i<numberOfBars;i++){
        array[i]=Math.floor(Math.random()*max)+1;

    }
    console.log("create over");
    return array; 
    
}

function generateBars(unsortedArray){
    barsContainer.innerHTML="";
    console.log("inside generate");
    for(let i=0;i<numberOfBars;i++){
        let bar= document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=unsortedArray[i]*3+"px";
       
        barsContainer.appendChild(bar);
    }

}
