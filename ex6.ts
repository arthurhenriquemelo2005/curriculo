import PromptSync from "prompt-sync";
const prompt = PromptSync();


const desconto_vip: number = 0.2;
const desconto_premium: number = 0.15;
const desconto_comum: number = 0.05;
let valor_final: number ;

console.log("-------------------------------")
console.log("Qual tipo de Cliente Você é ")
console.log("-------------------------------")
console.log("[1] Cliente Vip");
console.log("[2] Cliente Premium")
console.log("[3] Cliente comum");

let tipo_cliente = Number(prompt("Você é qual tipo: "));

if(tipo_cliente <= 0 || tipo_cliente >= 4){


    console.log("Tipo de cliente inválido, tente novamente !");
    process.exit();

}

let valor_compra = Number(prompt ("Qual o valor da sua compra: "));

    if(valor_compra <= 0){

        console.log("Este valor não existe");
        process.exit();

    }

let quantidade_itens = Number(prompt ("Qual a quantidade de intens que foi comprados: "));

    if(quantidade_itens <= 0){

        console.log("Quantidade negada");
        process.exit();
    }

    if(tipo_cliente === 1){

        if(valor_compra > 500){
        valor_final = valor_compra - (valor_compra * desconto_vip); 
    
        console.log(`Você ganhou 20% de desconto, total: R$ ${valor_final}`);
        
    }else{

        valor_final = valor_compra - (valor_compra * 0.10);

        console.log(`Você ganhou 10% de desconto, total R$ ${valor_final}`);

    }
}

    else if(tipo_cliente === 2){

        if(valor_compra > 300){

            valor_final = valor_compra - (valor_compra * desconto_premium)
            console.log(`Você ganhou 15% de desconto, total R$ ${valor_final}`);
    } else{

        valor_final = valor_compra - (valor_compra * 0.05);
        console.log(`Você ganhou 5% de desconto, total de R$ ${valor_final}`);

    }
}
    else if(tipo_cliente === 3){

        if(quantidade_itens > 10){

        valor_final = valor_compra - (valor_compra * desconto_comum);
        console.log(`Você ganhou 5% de desconto, total de R$ ${valor_final}`);
    } else{

        valor_final = valor_compra 
        
        console.log(`Não tem desconto, Total de R$ ${valor_final}`);
    }
}

   
    
    console.log(`Valor original R$ ${valor_compra}`);
    console.log(`intens comprados ${quantidade_itens}`);