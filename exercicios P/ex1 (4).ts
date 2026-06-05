import PromptSync from "prompt-sync";
const prompot = PromptSync();

const usuarioAdmin = "admin1234";
const usuarioComum = "user";

let usuarioUser = prompot("Qual seu tipo de Usuário: ");


    if(usuarioUser === usuarioAdmin){

        console.log("Acesso Liberado e permissão total , você é admin. ");
        
    } else if(usuarioUser === usuarioComum){


        console.log("Acesso liberado e limitado, você é usuario comum");

    } else{

        console.log("Usuário não reconhecido ");

    }


