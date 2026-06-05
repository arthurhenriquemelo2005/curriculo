import PromptSync from "prompt-sync";
const prompt = PromptSync ();


const desconto: number = 0.9;
let precoFinal: number = 0;

let valorProduto = Number(prompt("Qual o preço do produto: "));

    if (valorProduto <= 0){

        console.log("Preço inválido");
        process.exit();
    }

     if(valorProduto > 100){

        precoFinal = valorProduto * desconto;

        console.log(`Você teve um desconto de 10% e o preço ficou por ${precoFinal}`);

    } else{

        console.log(`Não teve desconto o preço continua ${valorProduto}`);

    }