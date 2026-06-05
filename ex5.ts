import PromptSync from "prompt-sync";

const prompt = PromptSync()

let input: string = prompt("Selecione o ano: ")
let ano: number = parseInt(input)
if((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0))  {

    console.log("Ano bisexto");
} else{

    console.log("Não é bisexto");

}