const idades: number[] = [];
const input = prompt("Digite sua idade: ");

if (input) {
  const idadeNumerica = Number(input);
  
  // Valida se o que foi digitado é realmente um número válido
  if (!isNaN(idadeNumerica)) {
    idades.push(idadeNumerica); // Válido!
  }
}
