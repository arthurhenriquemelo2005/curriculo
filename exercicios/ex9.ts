import PromptSync from "prompt-sync";
const input = PromptSync();

let numeroPar: number = 0;
for(let i = 1; i<= 5; i++){

    let numero = Number(input("Informe um número: "));

    if(numero % 2 == 0){

        numeroPar++
        
 
 }
}

console.log(`Você Digitou o total de ${numeroPar}`);