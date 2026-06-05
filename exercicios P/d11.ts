import PromptSync from "prompt-sync";
const prompt = PromptSync();

let salario = Number(prompt("Quanto é seu salário: "));

    if(isNaN(salario)){

        console.log("Digite apenas números")
        process.exit();

    }

    else if(salario <= 0){

        console.log("Salário inválido");
        process.exit();

    }
    else if(salario <= 2000){

        console.log("Salário negado");
        
    } else if (salario > 2000 && salario <= 5000){

        console.log("Salário em análise");

    } else if(salario > 5000){


        console.log("Salário aprovado !");

    } 