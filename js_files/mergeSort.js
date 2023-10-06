

async function merge(array,low,mid,high){
    const n1= mid+1 -low;
    const n2= high -mid;
    console.log(numberOfBars);    
    let bars= document.getElementsByClassName("bar");
    
    console.log('n1 ',n1,' and n2 ',n2);
    
    let left = new Array(n1);
    let right = new Array(n2);

    
    
    for(let i=0;i<n1;i++){
        await waitforme(delay);
        left[i]= array[low+i];
        console.log('left array');
        bars[low+i].style.backgroundColor='orange';
    }
    
    for(let i=0;i<n2;i++){
        await waitforme(delay);

        right[i]= array[mid+1+i];
         console.log('right array');
         bars[mid+1+i].style.backgroundColor='yellow';

    }

    let i=0,j=0,k=low;
    // console.log('before while');
    while(i < n1 && j <n2){
        await waitforme(delay);
        if(left[i] <= right[j]){
            array[k]=left[i];
            // bars[k].style.backgroundColor=''
            // console.log('i < j ',array[k]);
            if((n1 + n2) == numberOfBars){
                bars[k].style.backgroundColor='green';
            }
            else{
                bars[k].style.backgroundColor='lightgreen';
            }
            bars[k].style.height=array[k]*3 + "px";
            i++;
            k++;
        }
        else{
            array[k]=right[j];
            // console.log('j < i' ,array[k]);
            if((n1 + n2) == numberOfBars){
                bars[k].style.backgroundColor='green';
            }
            else{
                bars[k].style.backgroundColor='lightgreen';
            }
            bars[k].style.height=array[k]*3 + "px";
            k++;
            j++;
        }
    }
    
    while(i < n1 && k <=high){
        await waitforme(delay);
        array[k]=left[i];
        if((n1 + n2) == numberOfBars){
            bars[k].style.backgroundColor='green';
        }
        else{
            bars[k].style.backgroundColor='lightgreen';
        }
        bars[k].style.height=array[k]*3 + "px";
        k++;
        i++;
    }
    while(j < n2 && k <=high){
        await waitforme(delay);
        array[k]=right[j];
        if((n1 + n2) == numberOfBars){
            bars[k].style.backgroundColor='green';
        }
        else{
            bars[k].style.backgroundColor='lightgreen';
        }
        bars[k].style.height=array[k]*3 + "px";
        k++;
        j++;    
        
    }
    // console.log('final array');
    // for(let a=low; a<=high;a++)
    // {
    //     console.log(array[a]);
    // }
}
    




async function mergeSort(array, low, high){
    console.log('merge sort called with ',low,high);
    if(low >= high)
        return ;
    const mid= Math.floor((low+high)/2);
    await mergeSort(array,low,mid);
    await mergeSort(array,mid+1,high);
    await merge(array,low,mid,high);
}