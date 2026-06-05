import PromptSync from "prompt-sync";
const prompt = PromptSync();

const usuario: string = "admin";

let nomeUsuario = prompt("Qual o nome do usúsario: ");

    if(nomeUsuario === usuario){

        console.log("Acesso total !");

    }else{

        console.log("Acesso limitado");

    }