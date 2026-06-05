import PromptSync from "prompt-sync";
const prompot = PromptSync();

const senhaAdmin: string = "1234";

let senhaUser = prompot("Qual a senha: ");

    if(senhaUser !== senhaAdmin){

        console.log("Conta bloqueada ");

    }else{

        console.log("Acesso liberado");

    }