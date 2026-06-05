function converterCelsiusParaFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

// Exemplo de uso:
const temperaturaF: number = converterCelsiusParaFahrenheit(25);
console.log(temperaturaF); // Retorna 77 