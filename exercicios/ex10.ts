import PromptSync from "prompt-sync";
const prompot = PromptSync();

let numero = Number(prompot("De qual número você quer ver a tabuada: "));
for(let i = 1; i <= 10; i++ ){

     let tabuada = numero * i
     console.log(numero, "X" , i, "=", tabuada);
    
}