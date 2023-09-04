function parImpar(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es un número par");
  } else {
    console.log(numero + " es un número impar");
  }
}

function esMayorQue(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log("Ambos números son iguales: " + num1);
  }
}

function MultiploDe5(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " es múltiplo de 5");
  } else {
    console.log(numero + " no es múltiplo de 5");
  }
}

function imprimirHasta(numer1) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
