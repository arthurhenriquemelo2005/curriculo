import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Qual sua idade: "));

    if(isNaN(idade)){

        console.log("Digite apeans números !")
        process.exit();

    } else if(idade <= 0){

        console.log("Idade inválida");

    } else if(idade <= 12){

        console.log(`Você tem ${idade} e é uma criança`);

    } else if(idade <= 17){

        console.log(`Você tem ${idade} e é um adolescente`);

    } else if(idade <= 60){

        console.log(`Você tem ${idade} e é adulto`);

    } else{

        console.log(`Você tem ${idade} e é um idoso`);        
    }