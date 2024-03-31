alert("Vamos fazer as 5 principais operações entre dois números, verificar se são iguais e ver se a soma deles é par ou ímpar!");
let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");

let som = Number(num1) + Number(num2);
let subt = Number(num1) - Number(num2);
let mult = Number(num1) * Number(num2);
let div = (Number(num1) / Number(num2)).toFixed(2);
let rest= Number(num1) % Number(num2).toFixed(2);

if (num1 === num2) {
  alert("Os números que você digitou são iguais!")
}  else {
  alert("Os números que você digitou são diferentes!")
}

alert("A soma é: " + som);

if (som % 2 === 0) {
  alert("A soma dos dois números que você digitou é par!");
} else {
  alert("A soma dos dois números que você digitou é ímpar!");
}

alert("A subtração é: " + subt);
alert("A multiplicação é: " + mult);
alert("A divisão é: " + div);
alert("O resto da divisão é: " + rest);
