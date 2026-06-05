import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Declaração do login e senha
const login:string = "admin";
const senha:string = "1234";
let tentativa:number = 1;

// Usuário tem até 3 tentativa para entrar no caixa eletrônico
while(tentativa <= 3){
    console.clear();
  let loginUser = prompt("informe o nome do usuário: ");
  let senhaUser = prompt("Digite sua senha: ");

  if(loginUser === login && senhaUser === senha){

    console.log("Acesso liberado");
    break;
    

  } else{

    console.log("ERRO: Usuário ou senha incorreto");

    console.log(`Você tem 3 tentativas e já tentou ${tentativa}`);
    tentativa ++

    if(tentativa <= 3){
      prompt("digite enter para tentar novamente ")
    }
    
    if(tentativa > 3){
      console.log("Acesso bloqueado: Limite de tentativa foi esgotado");
      process.exit(1);
      
    }

    
  }
}
//Função para válidar entradas do usuário, para não ficar repetitivo o isNaN.
function lerNumero(mensagem: string): number {
  while (true) {
    const entrada = Number(prompt(mensagem));

    if (!isNaN(entrada)) {
      return entrada;
    }

    console.log("Digite apenas números");
  }
}

//Função para realização para as depositações
function realizarDeposito(saldoAtual:number):number{

    let deposito = lerNumero("Quanto você quer depositar: ");

    if(deposito <= 0 ){

        console.log("ERRO: Deposito inválido !");
        return saldoAtual;

    }else{

    console.log(`Deposito de R$${deposito.toFixed(2)} realizado com sucesso !`);

    }
    
    const  novoSaldo = saldoAtual + deposito;

    return novoSaldo;
}

// Função para a realização dos saques
function realizarSaque(saldoAtual:number):number{

    let saque = lerNumero("Quanto você quer sacar: ");
    if(saque > saldoAtual || saque <= 0){

        console.log("Saque inválido !");
        return saldoAtual;
    
    }else{

        console.log(`Saque de R$${saque.toFixed(2)} realizado com sucesso !`);
        
       const novoSaldo = saldoAtual - saque;
       return novoSaldo;

    }
}

function transferencia(saldoAtual:number, historicoTransferencia:number []):number{
    
    let transferir = lerNumero("Quanto você quer transferir: ");
    
    if(transferir > saldoAtual || transferir <= 0){

        console.log("Erro: transferência inválida !");
        return saldoAtual;
        

    }else{

        console.log(`Transferência de R$${transferir.toFixed(2)} Aprovada`);
        historicoTransferencia.push(transferir);

        const novoSaldo = saldoAtual - transferir;
        return novoSaldo; 
        
    }

}

//Função do menu
function menu(): void {
  let historicoTransferencia: number [] = [];
  let saldo: number = 0;

  let rodando: boolean = true;
  while (rodando) {
    console.log("=== CAIXA ELETRÔNICO ===");

    console.log("[1] Fazer deposito");
    console.log("[2] Sacar");
    console.log("[3] Mostrar saldo");
    console.log("[4] Realizar transferencia");
    console.log("[5] Historico");
    console.log("[6] Sair");

    let opcao = lerNumero("Escolha uma das opções: ");
    console.clear();
    switch (opcao) {
        
      case 1:
        saldo = realizarDeposito(saldo);
            break
        
      case 2:
       saldo = realizarSaque(saldo);
            break;

      case 3:   
        console.log(`Saldo em conta \nR$${saldo.toFixed(2)} `);
            break
      
      case 4:
        saldo = transferencia(saldo,historicoTransferencia);
            break
      
      case 5:
        
        console.log("=== Historico de transferencia === \n")
        if(historicoTransferencia.length === 0){

            console.log("Nenhuma transferência realizada");
            

        }else{

            for(let valor of historicoTransferencia){
                console.log(`Transferências enviadas: R$${valor.toFixed(2)}`);
                
            }

        }
            break;

      case 6:

        console.log("Saindo do caixa...");
        rodando = false;
        break;

        default:
            console.log("Opção inválida !");
                break;
            
    }
    
  }
}

menu();