import PromptSync from "prompt-sync";
const prompt = PromptSync();

let idade = Number(prompt("Qual a sua idade: "));

let assinatura = prompt("Qual seu tipo de assinatura [S para sim] [N para não]");

let cargo = prompt("Qual seu cargo: ");

if (cargo === "admin"){

    console.log(`Seu cargo é ${cargo} e você tem acesso total`);
    process.exit();
}
else if(cargo === "editor" && assinatura == "S" && idade >= 16){

    console.log(`Seu cargo é ${cargo} e você tem o acesso parcial`);
    
}

else if(cargo === "visitante" && idade >= 12){

    console.log(`Seu cargo é ${cargo} e você tem o acesso parcial`);

} else{

    console.log("Acesso Negado");

}