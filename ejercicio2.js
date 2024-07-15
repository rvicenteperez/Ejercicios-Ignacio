/* 2.- Crea una función que, dado el id de un cliente, retorne su balance total sumando los balances de todas sus cuentas.
Obtener los nombres de los clientes y sus balances totales*/
import { accounts } from "./index.js";
import { clients } from "./index.js";

const balanceTotal1 = (id) => {
  let saldo = 0;

  for (let i = 0; i < accounts.length; i++) {
    if (id === accounts[i].clientId) {
      saldo = accounts[i].balance + saldo;
    }
  }
  console.log(`el saldo total de ${clients[id].name} ${id} es ${saldo}`);
  return saldo;
};

balanceTotal1(3);

// para mostrar el nombre del cliente solo se ocupo backticks y se llamo al cliente con clients[id].name donde id es el parametro que se pasa
