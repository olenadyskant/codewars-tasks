function revertLastRow (arr) {
  let revertRow = [];
  if (arr.length === 0) return revertRow;
  revertRow.push(arr[arr.length - 1]);
  return revertRow = revertRow.concat(revertLastRow(arr.slice(0, arr.length - 1)));
}

function contourBuilder (matrix) {
   let contour = [...matrix[0]];
    
    for( let i = 1; i < matrix.length - 1; i += 1) {
        let arrEl = [...matrix[i]];
        let lastEl = arrEl[arrEl.length - 1];
        contour.push(lastEl);
    }
  
    contour = contour.concat(revertLastRow(matrix[matrix.length - 1]));    
  
    for( let j = matrix.length - 2; j > 0; j -= 1) {
        let arrEl = [...matrix[j]];
        let firstEl = arrEl[0];
        contour.push(firstEl);
    }
  
    return contour;
}

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


function countourMode(matrix, a, b) {
    let contourArr = contourBuilder(matrix);
    let contourArrCount = {};
    let maxCount = 0;
    let mostFrequent = [];
  
    for (let i = 0; i < contourArr.length; i+=1) {
    let el = (contourArr[i] >= a && contourArr[i] <= b) ? contourArr[i] : null;
        if (!!el || el === 0) {
            contourArrCount[el] = (contourArrCount[el] || 0 ) + 1;
            maxCount = Math.max(maxCount, contourArrCount[el]);   

        }
    }

    for(let num in contourArrCount) {
        if(contourArrCount[num] === maxCount) {
            mostFrequent.push(+num);
            delete contourArrCount[num];
        }
    }
  
  let mostFrequentSorted = mergeSort(mostFrequent);
    
  return Object.keys(contourArrCount).length === 0 ? [] : [maxCount, [...mostFrequentSorted]];
};
