
async function selectionSort(array) {
    let bars= document.getElementsByClassName("bar");
    for(let i=0;i<numberOfBars;i++){
        let minIndex=i;
        bars[i].style.backgroundColor='blue';
        for(let j=i+1;j<numberOfBars;j++){

            bars[j].style.backgroundColor='red';

            await waitforme(delay);
            if( array[j] < array[minIndex]){
                if(minIndex!=i){
                        bars[minIndex].style.backgroundColor='aqua';
                }
                minIndex=j;
                
            }
            else{
                bars[j].style.backgroundColor='aqua';
            }
        }
        await waitforme(delay);
        let temp = array[i];
        array[i]=array[minIndex];
        array[minIndex]=temp;
        bars[i].style.height=array[i]*3+"px";
        bars[minIndex].style.height=array[minIndex]*3+"px"; 
        bars[i].style.backgroundColor='green';
    }
}
