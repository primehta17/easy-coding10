//write a function to hide a credit card number //till  12 digit star after that number

function hideCreditCard(cardNumber) {
 let newCard="";
 
    for(let i=0;i<cardNumber.length;i++){
        if(i<12){
           newCard+="*";
        }else{
            newCard+=cardNumber[i];
        }
    }
    return newCard;
}
let cardNumber="1234567890123456"
console.log(hideCreditCard(cardNumber));