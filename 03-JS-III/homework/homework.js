// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
  let numeros=[1,2,3,4,5,6,7,8,9,10];
  suma=0; 
  for(var i = 0; i < numeros.length; i++) {
      
    suma+=numeros[i];
    
  }
  return (suma);  
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  pares=[];
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2==0){
      pares.push(array[index]);
    }
    

  }
return pares;    
}
function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  cuadrados=[];
  for (let index = 0; index < array.length; index++){
    cuadrados.push((array[index])**2);

  }
return cuadrados;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  sumaEntero=0;
  for (let index = 0; index < array.length; index++){
    sumaEntero+=(array[index]);

  }
return sumaEntero;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;

}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
