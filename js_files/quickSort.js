async function partion(array,low,high){
    console.log('inside quick sort');
    bars= document.getElementsByClassName("bar");
    bars[high].style.backgroundColor='red';
    let i=low-1;
    for(let j=low;j<=high-1;j++){
        bars[j].style.backgroundColor='yellow';

        await waitforme(delay);

        if(array[j] < array[high]){
            i++;

            let temp = array[i];
            array[i]=array[j];
            array[j]=temp;
            
            bars[i].style.height= array[i]*3+"px";
            bars[j].style.height= array[j]*3+"px";


            bars[i].style.backgroundColor='orange';
            if(i !=j)
                bars[j].style.backgroundColor='orange';

            await waitforme(delay);    
        }
        else{
            bars[j].style.backgroundColor='pink';
        }
    }
    i++;

    await waitforme(delay);

    let t=array[i];
    array[i]=array[high];
    array[high]=t;

    bars[i].style.height=array[i]*3+"px";
    bars[high].style.height= array[high]*3+"px";
    
    bars[high].style.backgroundColor='pink';
    bars[i].style.backgroundColor='green';

    await waitforme(delay);

    for(let k=0; k < numberOfBars; k++){
        if(bars[k].style.backgroundColor !='green')
            bars[k].style.backgroundColor='cyan';
    }
    return i;
}


async function quickSort(array,low,high){
    if(low <= high){
        console.log('in quick sort');
        let pivot = await partion(array,low,high);
        console.log(pivot);
        await quickSort(array,low,pivot-1);
        await quickSort(array,pivot+1,high);
    }
   
}