import PromptSync from "prompt-sync";
const prompt = PromptSync();

const frequencia:number = 75;

let primeitaNota = Number(prompt("Informe sua primeira nota: "));

let segundaNota = Number(prompt("Informe a sua segunda nota: "));

let frequenciaAluno= Number(prompt("Quanto de frequencia "));

let media = (primeitaNota + segundaNota) /2 

if(frequenciaAluno < frequencia){

    console.log("Você reprovou por frequência")
} else{

    if(media >=7 ){

        console.log("Parábens você passou de ano !");
    
    }

    else if(media >= 5 && media <= 6.9){

        console.log("Você tá em recuperação");
    }

    else if(media < 5){

        console.log("Voce está de reprovado");

    }
}