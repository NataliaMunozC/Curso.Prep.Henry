// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

 /*  var nuevoArreglo=[];
  var nuevoArreglo2=[];
  for (const key in objeto) {
    if (objeto.hasOwnProperty.call(objeto, key)) {
      nuevoArreglo=[key, objeto[key]];  
    }
    nuevoArreglo2.push(nuevoArreglo);
  }
  
  return nuevoArreglo2; */
   return Object.entries(objeto);


}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  /* var objeto={};

    for(let i =0; i<string.length; i++ ){
      cuenta = 0;
      posicion = string.indexOf(string[i]);
      while ( posicion != -1 ) {
        cuenta++;
        posicion = string.indexOf(string[i],posicion+1);
      }
     
      Object.defineProperty(objeto, string[i], {
        value: cuenta,
        writable: true,
        enumerable: true,

       configurable: true,
      });
    }   
   
      return(objeto); */

      
      var letrasRep={};
      for(var i=0;i<string.length;i++ ){
        var letra=string[i];

        if(letrasRep[letra]==undefined)  letrasRep[letra]=1;
        else letrasRep[letra]++;
        
        }
      
      console.log(letrasRep);
      return letrasRep;



    
  }




  function capToFront(s) {
    //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
    //al principio de la palabra.
    //Ejemplo: soyHENRY -> HENRYsoy
    //Escribe tu código aquí
    let may= "";  
    let min="";
    for(var i=0;i<s.length;i++){
      if(/([A-Z])/.test(s[i]))  may=may+ s[i];
      else  min=min+s[i];  
    }
   return may.concat(min);
 
  }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arreglo= str.split(" ");
  var nuevoArreglo=[];
  arreglo.forEach(palabra => {
      var nuevaP=palabra.split("").reverse().join("");
      nuevoArreglo.push(nuevaP);

  })
 return nuevoArreglo.join(" ");

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var cadena=numero.toString();
  if (cadena==cadena.split("").reverse().join("")) return "Es capicua"
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  
  var arreglo=cadena.split("");
  var nuevoArray=[];
  arreglo.forEach(letra => {
    if(letra=="a"||letra=="b"||letra=="c"||letra=="d") letra.replace(letra,"") ;
     else
    nuevoArray.push(letra);

    
  })
  return nuevoArray.join("");

  


  

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código a
  ordenado=arr.sort((a,b)=>a.length-b.length);
  return ordenado


}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var nuevoArray=[];
  arreglo1.forEach(elemento => {
      arreglo2.forEach(elemento2 => {
        if(elemento==elemento2) nuevoArray.push(elemento);
        
      });
    
  });
  return nuevoArray;


}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

