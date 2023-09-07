async function bubbleSort(array){
    let bars= document.getElementsByClassName("bar");
    
    for(let i=0;i<numberOfBars;i++){
        for(j=0;j<numberOfBars-1-i;j++){
            let a= bars[j].style;
            let b= bars[j+1].style;
       
            a.backgroundColor='red';
            b.backgroundColor='red';
            
            if( array[j] > array[j+1]){
                await waitforme(delay);
                let temp = array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                a.height=array[j]*4+"px";
                b.height=array[j+1]*4+"px";   
            }
            a.backgroundColor='aqua';
            b.backgroundColor='aqua';
        }
        bars[numberOfBars-1-i].style.backgroundColor='green';
    }
    bars[0].style.backgroundColor='green';

}