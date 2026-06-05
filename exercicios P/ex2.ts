import PromptSync from "prompt-sync";
const prompt = PromptSync();

const userAdmin = "admin";
const userCliente = "cliente";

let tipoCliente = prompt("Qual seu tipo de usuário: ");

    if(tipoCliente === userAdmin ){


        console.log("Você foi direcionado ao painel admin")

    } else if(tipoCliente === userCliente){


        console.log("Você foi direcionado para área cliente")

    }else{

        console.log("Tipo de cliente não encontrado");

    }