//write a function to add the first and last elements of an array
function addListEnds(arr) {

    for(let i=0;i<arr.length;i++){
        let first = arr[0];
        let last= arr[arr.length-1];
      sum=first+last
    }
    return sum;
}
console.log(addListEnds([10,20,30]));