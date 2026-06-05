import PromptSync from "prompt-sync"

const prompt = PromptSync ();

let saldo: number = 1500;

console.log(`Seu saldo é de ${saldo}`);

let saque = Number(prompt ("Quanto deseja sacar? "));

if(saque <= 0){

    console.log("Saque inválido");
    
} else if(saque <= saldo){

    saldo -= saque;

    console.log(`Você sacou ${saque} e tem ${saldo} na conta`);


} else{

    console.log("Saldo insuficiente");

}
