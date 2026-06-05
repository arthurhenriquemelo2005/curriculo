import PromptSync from "prompt-sync";
const prompt = PromptSync();

const nomeUsuario: string = "admin";
const senhaUsuario: number = 1234;

let tentUser = prompt("Qual o nome do usuário? ");
let tentSenha = Number(prompt("Qual a senha do usuario: "));

if (tentUser === nomeUsuario && tentSenha === senhaUsuario){

    console.log("Acesso liberado");
   
}else{

    console.log("Acesso negado");

}

