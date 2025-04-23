//write a function to calculate the digit distance between two numbers

function calculateDigitDistance(num1, num2) {
    let sum=0;
     num1=num1+"",num2=num2+""
    for(let i=0;i<num1.length;i++){
            if(num1[i] && num2[i]){
                sum+=   num1[i]-num2[i];
            }
    }
 
    return Math.abs(sum);
}
console.log(calculateDigitDistance("123", "256"));






