// write a function to match strings by letters
function stringMatchByLetters(str1, str2) {
    

for(let i=0;i<str1.length;i++){
    for(let j=0;j<str2.length;j++){
      
        if(str1[i]==str2[j]){
           
             return "Match";
        }
    }return "No Match"
}

}
console.log(stringMatchByLetters("Hi", "Hoplicoper"))