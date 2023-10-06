document.addEventListener("DOMContentLoaded", function () {
    unsortedArray = createArray();
    generateBars(unsortedArray);
});

number.addEventListener("input",function(){
    max=number.value;
    numberOfBars=number.value;
    unsortedArray=createArray();
    generateBars(unsortedArray);
})

// randomize.addEventListener("click",function(){
//     unsortedArray=createArray();
//     generateBars(unsortedArray);
// });

newArray.addEventListener("click",function(){
    unsortedArray=createArray();
    generateBars(unsortedArray);
})

sort.addEventListener("click",function(){
    console.log("selected algo");
    delay= speed.value;
    let algoToUse= algorithm.value;
    switch(algoToUse){
        case "bubble":
            bubbleSort(unsortedArray);
            break;
        case "selection":
            selectionSort(unsortedArray);
            break;
        case "merge":
            mergeSort(unsortedArray,0,numberOfBars-1);
            break;
        case "quick":
            quickSort(unsortedArray,0,numberOfBars-1);
            break;            

        default:
            bubbleSort(unsortedArray);

    }
});

