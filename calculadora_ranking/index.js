function calcularSaldo(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Função principal para interagir com o usuário
function main() {
    const vitorias = parseInt(prompt("Digite o número de vitórias: "));
    const derrotas = parseInt(prompt("Digite o número de derrotas: "));

    if (isNaN(vitorias) || isNaN(derrotas)) {
        console.log("Por favor, insira números válidos.");
        return;
    }

    const { saldoVitorias, nivel } = calcularSaldo(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Executa o programa
main();
