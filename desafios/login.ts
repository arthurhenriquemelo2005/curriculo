import PromptSync from "prompt-sync";
const prompt = PromptSync();

const login:string = "admin";
const senha:string = "1234";
let tentativa:number = 1;

while(tentativa <= 3){

  let loginUser = prompt("informe o nome do usuário: ");
  let senhaUser = prompt("Digite sua senha: ");

  if(loginUser === login && senhaUser === senha){

    console.log("Acesso liberado");
    break
    

  } else{

    console.log("ERRO: Usuário ou senha incorreto");

    console.log(`Você tem 3 tentativas e já tentou ${tentativa}`);
    tentativa ++
    
    
  }
}
