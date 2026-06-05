import PromptSync from "prompt-sync";
const prompt = PromptSync();

const mediaAprovad: number = 7;
const mediaRecuperacao: number = 5;
const frequencia: number = 75;


let primeiraNota = Number(prompt("Informe sua primeira nota: "));

let segundaNota = Number(prompt("Informe a segunda nota: "));

let frequenciaAluno = Number(prompt("Informe a sua frequencia: "));


let mediaAluno: number = (primeiraNota + segundaNota)/2

    if(frequenciaAluno < frequencia){

        console.log(`Você teve o total de  ${frequenciaAluno} de frequência e reprovou por falta `);
        

    }
    else if(mediaAluno >= mediaAprovad){

        console.log(`Sua média foi de ${mediaAluno} e você passou de ano`);

    } else if(mediaAluno >= 5){

        console.log(`Sua media foi ${mediaAluno} e você esta de recuperação`);
        
    } else{


        console.log(`Sua media foi ${mediaAluno} e você foi reprovado(a)`);

    }