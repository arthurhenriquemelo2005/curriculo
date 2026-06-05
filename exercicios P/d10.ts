import PromptSync from "prompt-sync";
const prompt = PromptSync();

const saldo:number = 850;

let precoProduto = Number(prompt("Qual o preço do produto: "));
    
    if(precoProduto <= 0){

        console.log("Preco indisponivel");

    }
    else if(saldo >= precoProduto){

        console.log("Compra realizada");

    } else{

        console.log("Saldo insuficiente");

    }