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

const eliminarCaracteres = (texto = "", patron = "") =>
  (!texto)
    ? "No has ingresado un texto"
    : (!patron)
      ? "No has ingresado un patrón de caracteres"  
      : texto.replace(new RegExp(patron, "ig"), "");

console.log(eliminarCaracteres());
console.log(eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5"));
console.log(eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => Math.round((Math.random() * 100) + 500);

console.log(numeroAleatorio());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const esCapicua = (numero = 0) => {
  
  if (!numero) return undefined;
  
  if (typeof numero !== "number") return null;
  
  numero = numero.toString();

  let numeroAlReves = numero.split("").reverse().join("");

  if (numero === numeroAlReves) {
    return true
  } 
  else {
    return false
  }
}

console.log(esCapicua());
console.log(esCapicua("2002"));
console.log(esCapicua(2002));
console.log(esCapicua(2000));

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero = undefined) => {
  
  if (numero === undefined) return undefined;
  if (typeof numero !== "number") return undefined;
  if (numero <= 0) return undefined;

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorial());
console.log(factorial("Hola"));
console.log(factorial(-10));
console.log(factorial(0));
console.log(factorial(5));

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (numero = undefined) => {

  if (numero === undefined) return "Debe ingresar un número a evaluar";

  if (typeof numero !== "number") return "Debe ingresar un valor expresado en formato numérico";

  if (numero <= 1) return "El número debe ser positivo y mayor a 1";

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }

  return (divisible)
    ? `El número ${numero} no es primo`
    : `El número ${numero} es primo`
}

console.log(esPrimo());
console.log(esPrimo("Hola"));
console.log(esPrimo(-20));
console.log(esPrimo(0));
console.log(esPrimo(6));
console.log(esPrimo(7));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (numero = undefined) => {

  if (numero === undefined) return "Debe ingresar un número";

  if (typeof numero !== "number") return "Debe ingresar un valor de tipo numérico"

  return (numero % 2 === 0)
    ? `El número ${numero} es par`
    : `El número ${numero} es impar`;
}

console.log(esPar());
console.log(esPar("Hola"));
console.log(esPar(3));
console.log(esPar(4));

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined) => {

  if (grados === undefined) return "Debe ingresar un valor";

  if (typeof grados !== "number") return "El valor ingresado debe ser de tipo numérico" 

  if (unidad === undefined) return "Debe ingresar la unidad a la que desea cambiar el valor";

  if (typeof unidad !== "string") return "Debe ingresar una cadena de texto, siendo 'C' para convertir a Celcius o 'F' para convertir a Farenheit";

  if (unidad.toLowerCase() === "c" || unidad.toLowerCase() === "f") {
  
    if (unidad.toLowerCase() === "c") return `${grados} Farenheit son ${((grados - 32) * 5/9).toFixed(1)} grados Celsius`;

    if (unidad.toLowerCase() === "f") return `${grados} Celsius son ${(grados * 9/5 + 32).toFixed(1)} grados Farenheit`;
  }
  else {  
    return "Debe ingresar 'C' para seleccionar grados Celsius o 'F' para seleccionar grados Farenheit";
  }
}

console.log(convertirGrados());
console.log(convertirGrados("Hola"));
console.log(convertirGrados(15));
console.log(convertirGrados(15, 10));
console.log(convertirGrados(15, "Hola"));
console.log(convertirGrados(32, "c"));
console.log(convertirGrados(45, "C"));
console.log(convertirGrados(17, "f"));
console.log(convertirGrados(15, "F"));