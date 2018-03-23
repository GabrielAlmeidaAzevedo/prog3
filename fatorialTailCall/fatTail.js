// Gabriel azevedo mat- 116210009 UFCG

function fat(n){
  
  function fatTail(n, mult){
    
     if(n === 0)
      return mult;
      
    else{
      
      mult = mult * n;
      n = n - 1
      
    return fatTail(n, mult);
    }
  }
  
  return fatTail(n, 1);
}


//console.log(fat(4));
//console.log(fat(5));
