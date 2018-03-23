// Gabriel Almeida Azevedo matrícula 116210009

function eq2grau(equacao){
  
  let a = equacao.a;
  let b = equacao.b;c = equacao.c;
  
  let delta = Math.pow(b, 2) - 4 * a * c;
  
  solucao = {};
  solucao.delta = delta;
  
  if (delta >= 0){
    
    let raiz = Math.abs(Math.sqrt(delta));
    let x1 = (-b + raiz) / (2 * a);
    let x2 = (-b - raiz) / (2 * a);
    
    solucao.x1 = x1;
    
    if(x1 != x2){
      solucao.x2 = x2;
    }
    
  }
  return solucao;
  
}
