import PromptSync from "prompt-sync";
const prompt = PromptSync();

const usuarioAdmin = "admin";
const senhaAdmin: number = 1234;
const codigoAdmin: number = 9999;

let usuario = prompt("Qual o nome do usuário: ");
let senha = Number(prompt("Informe a senha do usuário: "));
let codigo = Number(prompt("informe o código de segurança: "));

    if(usuario === usuarioAdmin){
    
        if(senha === senhaAdmin){

            if(codigoAdmin === codigo){

                console.log("Acesso Liberado");
  
        }else{

            console.log("Código incorreto");
        }
        }else{

            console.log("Senha incorreta");
        }
        }else{

            console.log("Usuário incorreto");
        }