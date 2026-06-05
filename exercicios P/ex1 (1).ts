import PromptSync from "prompt-sync";
const prompt = PromptSync();

const idadeMaior: number = 18;

let idadeUsuario = Number(prompt("Qual sua idade: "));

if(idadeUsuario <= 0){

    console.log("Idade inválida")
    process.exit();
}
else if(idadeUsuario >= idadeMaior){

    console.log(`Você tem ${idadeUsuario} e é maior de idade`);
} else{

    console.log(`Você tem ${idadeUsuario} e é menor de idade`);
}