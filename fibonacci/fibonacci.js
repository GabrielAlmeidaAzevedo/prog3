// PROGRAMAÇÃO 3 - UFCG
// Gabriel Almeida mat 116210009 

function fib(n){
  
  function fibTail(l, m, n){
    
    if (n > 0)
      return fibTail(m, l+m, n-1);
    
    else
      return l;
  }
  
  return fibTail(1, 1, n);
}

//console.log(fib(10));
