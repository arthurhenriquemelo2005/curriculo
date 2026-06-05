import promptSync from 'prompt-sync';
const prompt = promptSync();

const produtos: string[] = [];

while (true) {
  const item = prompt("Digite um produto para a lista (ou 'sair' para encerrar): ");
  
  if (item.toLowerCase() === 'sair' || item == "4") {
    break;

  }
  
  if (item.trim() !== "") {
    produtos.push(item);
    console.log(`${item} adicionado!`);
  }
}

console.log(`\n=== Sua lista de compras final ===`);
console.log(`${produtos.join("\n")}`);
