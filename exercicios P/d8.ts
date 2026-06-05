import PromptSync from "prompt-sync";
const prompt = PromptSync();

const arroba = "@";
let email = prompt("Digite seu email: ");

    if(email.includes("@")){

        console.log("Email válido");

    } else{

        console.log("Email inválido @ obrigatório");    

    }