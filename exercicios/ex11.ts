import PromptSync from "prompt-sync";
const prompt = PromptSync();

let refatoracao: number;
let numero = Number(prompt("Qual o número que você quer refatorar? "));

for(let i = numero; i >= 1 ; i-- ){

    refatoracao = numero % i

    console.log(numero," / ", i, "=", refatoracao);

    
}