import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Função para válidar entradas do usuário, para não ficar repetitivo o isNaN.
function lerNumero(mensagem: string): number{
    while (true) {
        const entrada = Number(prompt(mensagem));
        
        if (!isNaN(entrada)) {
          return entrada 
        }
        
        console.log("Digite apenas números");
    }
}

//Função do menu
function menu(): void{

let saldo: number = 0;

    while(true){
    
    console.log("=== CAIXA ELETRÔNICO ===");
            
        console.log("[1] Fazer deposito");
        console.log("[2] Sacar");
        console.log("[3] Mostrar saldo");
        console.log("[4] Realizar transferencia")
        console.log("[5] Historico");
        console.log("[6] Sair");

    let opcao = lerNumero("Escolha uma das opções: ");
    
    if (opcao === 1 ){
        
        let deposito = lerNumero("Quanto você quer depositar: ");

        if(isNaN(deposito)){

            console.log("Digite apenas números");
        }
        if(deposito <= 0 || deposito === 0){

            console.log("Deposito inválido");

        }else{

        saldo += deposito

        console.log(`Deposito de R$ ${deposito} aprovado !`);
       }
    }
    else if(opcao === 2){

        let saque = Number(prompt("Quanto deseja sacar: "));
        
        
    }
   }
}

menu();