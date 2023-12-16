function foroddEven(n) {
    for (var index  = 0; index < n; index++) {
        if (index%2===0){
            console.log(index+'is even')
        }
        else{
        console.log(index+'is odd')
    }
    }
}
function whileoddEven(n) {
    var index=0
    while (index<n) {
        if (index%2===0){
            console.log(index+'is even')
        }
        else{
        console.log(index+'is odd')
        }
        index++
    }
}










function reverseIterateAndLogWithFor(n) {
    for (var index  = n-1; index >0; index++) {
        if (index%2===0){
            console.log(index+'is even')
        }
        else{
        console.log(index+'is odd')
    }
    }
   
  
  }
  function reverseIterateAndLogWithWhile(n) {
    var index=n
    while (index>0) {
        if (index%2===0){
            console.log(index+'is even')
        }
        else{
        console.log(index+'is odd')
        }
        index--
    }
    
  }


  function reverseIterateAndLogRecursively(n) {
    if(n>=0){
    if (n%2===0){
        console.log(n+' is even')
    }
    else if (n%2===1){
        console.log( n+' is odd')
    }
        return  reverseIterateAndLogRecursively(n-1)
    } 
}










function fordiv3(n) {
    for (var index  = 0; index < n; index++) {
        if (index%3===0){
            console.log('julia')
        }
        else if (index%5===0){
        console.log(' james')
        }
        else if((index%5===0)&&(index%3===0)){
            console.log(' juliajames')
        }
        else {
            console.log(index)
        }
}
}
function whilediv3(n) {
    var index=0
    while (index<n) {
        if (index%3===0){
            console.log('julia')
        }
        else if (index%5===0){
            console.log('james')
        }
        else if ((index%5===0)&&(index%3===0)){
            console.log('juliajames')
        }
        else {console.log(index)}
        index++
    }
}
function inverseWeirdDivisionRecursively(n) {
 if(n===0){
 return n}
 else{
    if ((n%5===0)&&(n%3===0)){
        console.log('juliajames')}
    else if (n%3===0){
        console.log('julia')
    }
    else if (n%5===0){
        console.log('james')
    }
    else if ((n%5!==0)&&(n%3!==0)){
        console.log(n)}
     inverseWeirdDivisionRecursively(n-1)
    }
 
}






function laughWithFor(number) {
var str=""
   for (var index = 0; index < number; index++) {
     str=str+"ha"
    
   }
  return str
  }
  

  function laughWithwhile(number) {
    var str=""
    var i=0
      while(i<number){
         str=str+"ha"
         i++
       }
       return str
      }
      var str=""
      function laugHrecursively(number) {
          if(number===0){
              return ""
           }
           else if(number===1){
            return "ha"
         }
           else{
           return laughWithrecursivite(number-1)+"ha"
          }
        }














        function sumfor(n) {
            var sum=0
            for (var i = n; 0 <i ;i--) {
                sum=sum+i
                
            }
            
        }
        function sumwhile(n) {
            var sum=0
            var i = n
             while(0 <i ) {
                sum=sum+i
                i--
            }
            
        }
         











        function factorille(n) {
            if (n==0){
                return 1
            }
            else {
            return n*factorille(n-1)
            }
        }
      
        








function rangeFor(n1,n2) {
    var array=[]
    for ( var index = n1; index < n2; index++) {
         array.push(index);   
    }
}

function rangewhile(n1,n2) {
    var array=[]
    var index = n1;
   while( index < n2) {
         array.push(index);  
         index++ 
    }
}








function reversefor(string){
    var rev=""
    for (let index = 0; index < string.length; index++) {
        rev=strin[index]+res
        
    }
}
function reversewhile(string){
    var rev=""
    var index = 0;
    while ( index < string.length) {
        rev=strin[index]+res
        index++   
    }
}
function reverserecursive(string) {
    if (string.length < 2) {
      return string;
    }
    return reverserecursive(string.slice(1, string.length)) + string[0];
  }
   







  function adddegit(n) {
    var sum=0
    while(n>0) {
        sum=sum+n%10
       n=Math.floor(n/10)
    }
    return sum
}








function fibRecursive(n) {

    if (n===0) {
        return 1
    }
    else if(n===1) {
        return 1
    }
    else return   fibRecursive(n - 1) + fibRecursive(n - 2)
  }







  function firstDigit(str) {
    var i=0
    while ((str[i]<"0")||(str[i]>"9")){
        i++
    }
   return str[i] 
}
firstDigit('st2r')








function remove(array, element) {
    var res=[]
 for (var index = 0; index < array.length; index++) {
     if(element!==array[index]){
         res.push(array[index])
     }
 }return res
  
}









function average(array) {
var sum=0
for (var index = 0; index < array.length; index++) {
    sum+=array[index]; 
}
   return sum/array.length 
  
  }
   






  function max(array) {
    var max=0
    for (var index = 1; index < array.length; index++) {
        if(max<array[index])
        max=array[index]; 
    }
       return max
      }













      function evenDigitsOnly(str) {
        var i=0
        while ((str[i]>"0")&&(str[i]<"9")){
            i++
        }
        if((str[i]<"0")||(str[i]>"9")){
       return false}
       else return true
    }
evenDigitsOnly("input")









function palindrome(str) {
    for (var index = 0; index < str.length; index++) {
        if(str[index]!==str[str.length-index-1]){
            return false
        }
        
    }
  return true
  }












  function firstDuplicate(array) {
    for (var index =0;index < array.length; index++) {
        for (var index2 =index+1; index2 < array.length; index2++) {
            if(array[index]===array[index2]){
                return array[index]
            }
            
        } 
    }
  }














  function findCombinations() {

    // TODO: your work goes here
  
  }

















































    











