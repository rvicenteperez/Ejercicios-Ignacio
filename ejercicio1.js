// 1.- Crea una función que, dado el id de un cliente, retorne su balance total sumando los balances de todas sus cuentas.

import { accounts } from "./index.js";

const balanceTotal = (id) => {
  let saldo = 0;

  for (let i = 0; i < accounts.length; i++) {
    if (id === accounts[i].clientId) {
      saldo = accounts[i].balance + saldo;
    }
  }
  console.log(`el saldo total del cliente ${id} es ${saldo}`);
  return saldo;
};

balanceTotal(2);

/*recordar que cada vez que quiero acceder y recorrer un array con objetos primero debo indicar el array que  necesito en este caso
  es accounts pero para poder recorrerlo debe ir acompañado de accounts[] parentesis de llaves despues poner el indice que es el que se va
  a incrementar para correr el array* y luego un punto y el atributo que quiero acceder en este caso seria accounts[i].clientId y 
  accounts[i].balance*/
