// PROGRAMAÇÃO 3 - UFCG
// Gabriel Almeida Azevedo - mat 116210009

function media_distancias(pontos, d){
  
  //const menorQueD = pontos.filter(arr => Math.abs(arr[1], arr[0] ) < d);
  
  const quadrante1 = pontos.filter( arr => arr[0] >= 0 && arr[1] >= 0);
  
  const menorQueD = quadrante1.filter(arr => Math.abs(arr[1] - arr[0] ) < d);
  
  const distancias = menorQueD.map(arr => Math.sqrt(Math.pow(arr[0], 2) + Math.pow(arr[1], 2))); 
  
  if(distancias.length === 0)
    return NaN;
    
  else{
    
    const total = distancias.length;
    
    const somas = distancias.reduce((e, s) => e + s, 0);
    
    const media = somas / total;
    
    return media;
    
  }
   
}

//console.log(media_distancias([[3, 4]], 100));
//console.log(media_distancias([[6, 8]], 100));
//console.log(media_distancias([[3, 4], [6, 8]], 100));


/**que recebe um array pontos contendo coordenadas em um plano cartesiano e que retorna a média das distâncias dos pontos que estiverem no primeiro quadrante do plano a uma distância menor que d.**/
