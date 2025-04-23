//write a function to calcualte the alternating sum of a number
function alternateSum(n) {
    let sum=0;

    for(let i=1;i<=n;i++){
        if(i%2==0){
           
            sum+=i;
        }else{
            sum-=i;
        }  
    } 
    return Math.abs(sum);
}
console.log(alternateSum(5))