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
    for
}


    











