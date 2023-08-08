// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const contarCaracteres = (objeto) => {
  if ((typeof objeto) === "string") {
    return objeto.length;
  }
  else {
    return -1;
  }
}
console.log("---------- 1- Contar caracteres ----------");
console.log(`Caso de prueba sin pasarle argumento: ${contarCaracteres()}`);
console.log(`Caso de prueba pasándole un argumento de otro tipo: ${contarCaracteres(10)}`);
console.log(`Caso pasándole la cadena "Hola Mundo" como argumento: ${contarCaracteres("Hola mundo")}`);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const devolverFragmento = (cadena = "", numeroCaracteres = undefined) => {

  if ((typeof cadena) !== "string") return "El primer argumento no es de tipo string";

  if (!cadena) return "La cadena de texto no puede estar vacía"

  if (!isNaN(typeof numeroCaracteres)) return "El segundo argumento debe ser un número entero";

  if (!cadena) return "La cadena de texto no puede estar vacía";

  return cadena.slice(0, numeroCaracteres);

}

console.log("---------- 2- Devuelve fragmento ----------");
console.log(`Caso de prueba sin pasarle argumentos: ${devolverFragmento()}`);
console.log(`Caso de prueba pasándole el primer argumento de otro tipo: ${devolverFragmento(10, 4)}`);
console.log(`Caso de prueba pasándole el segundo argumento de otro tipo: ${devolverFragmento("Hola mundo", "Hola")}`);
console.log(`Caso de prueba sin pasarle el primer argumento: ${devolverFragmento("", 10)}`);
console.log(`Caso de prueba pasándole "Hola mundo" en el primer argumento y sin pasarle el segundo argumento: ${devolverFragmento("Hola mundo")}`);
console.log(`Caso pasándole la cadena "Hola mundo" como primer argumento y el número 4 como segundo argumento: ${devolverFragmento("Hola mundo", 4)}`);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const palabrasArray = (cadena, caracter) => {

  if ((typeof cadena) !== "string") return undefined;
  if ((typeof caracter) !== "string") return undefined;
  if (!cadena) return undefined;

  return cadena.split(caracter);
}

console.log("---------- 3- Devuelve arreglo ----------");
console.log(`Caso de prueba sin pasarle argumentos: ${palabrasArray()}`);
console.log(`Caso de prueba sin pasarle el primer argumento: ${palabrasArray("", " ")}`);
console.log(`Caso de prueba sin pasarle el segundo argumento: ${palabrasArray("Hola que tal")}`);
console.log(`Caso pasándole la cadena "Hola que tal" como primer argumento y un espacio " " como segundo argumento: `);
console.log(palabrasArray("Hola que tal", " "));

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const repitePalabras = (objeto, cantidad) => {
  if ((typeof objeto) === "string") {
    if (cantidad > 0) {
      let resultado = "";
      while(cantidad){
        resultado += objeto + " ";
        cantidad--;
      }
      return resultado.trim();
    }
    else {
      return "La cantidad tiene que ser igual o mayor a 1"
    }
  }
  else {
    return "El objeto no es de tipo string";
  }
}

console.log("---------- 4- Repite palabras ----------");
console.log(repitePalabras("Hola mundo", 3));

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const fraseInvertida = (cadena = "") => {
  
  if (typeof cadena !== "string") return "El objeto ingresado no es una cadena";

  if (!cadena) return "Debe ingresar una cadena de texto";

  let cadenaInvertida = cadena.split("").reverse().join("");

  return cadenaInvertida;
}

console.log(fraseInvertida("Hola mundo"));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const contarPalabras = (cadena = "", palabra = "") => {
  
  if (typeof cadena !== "string") return "El primero objeto debe ser de tipo cadena";

  if (!cadena) return "Debe ingresar una cadena de texto";

  if (typeof palabra !== "string") return "El segundo objeto debe ser de tipo cadena";

  if (!cadena) return "Debe ingresar una palabra a buscar";

  let contadorDeCoincidencias = 0;
  
  let posicion = 0;

  while (posicion !== -1) {
    posicion = cadena.indexOf(palabra, posicion);
    if (posicion !== -1) {
      contadorDeCoincidencias++;
      posicion++;
    }
  }
  return contadorDeCoincidencias;
}

console.log(contarPalabras("Hola mundo, chau mundo", "mundo"));

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const esPalindromo = (palabra = "") => {
  
  if (typeof palabra !== "string") return "Debe ingresar un string";
  if (!palabra) return ("Debe ingresar una palabra");

  palabra = palabra.toLowerCase();
  let palabraAlReves = palabra.split("").reverse().join("");

  return (palabra === palabraAlReves) ? true : false;
}

console.log(esPalindromo("Salas"));

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.