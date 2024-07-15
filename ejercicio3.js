/* 3.- Crea una función que retorne un array de objetos, donde cada objeto tenga el nombre del cliente y su balance total.
Obtener el cliente con el balance más alto en un banco dado su id */
import { clients } from "./index.js";
import { accounts } from "./index.js";
import { banks } from "./index.js";

const balanceTotal2 = () => {
  let saldo = 0;
  let clientBalances = [];

  for (let i = 0; i < clients.length; i++) {
    for (let j = 0; j < accounts.length; j++) {
      if (clients[i].id === accounts[j].clientId) {
        saldo = accounts[j].balance + saldo;
      }
    }

    clientBalances.push({ name: clients[i].name, balanceTotal: saldo });
  }
  console.log(clientBalances);
  return clientBalances;
};

balanceTotal2();

const balMaxBanco = () => {
  let balanceMayor = 0;
  let balanceMaximo = [];

  for (i = 0; i < banks.length; i++) {
    for (j = 0; j < accounts.length; j++) {
      if (banks[i].id === accounts.bankId[j]) {
      } else if (balanceMayor < accounts[j].balance) {
        balanceMayor = accounts[j].balance;
      }
    }
    balanceMaximo.push({ name });
  }
};

/*la clave de este ejercicio es pushear en un arreglo nuevo lo que yo quiero obtener  y tambien hacer 2 for uno que recorra
  los clientes y otro que recorra las cuentas con sus saldos */
