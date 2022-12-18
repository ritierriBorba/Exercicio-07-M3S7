// Parte 1
function parteUm() {
    console.warn("Parte 01:")
    const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

    let sum = 0;

    for (number of numbers) {
        sum += number;
    }

    console.log(sum);

    console.log(Number((sum / numbers.length).toFixed(2)))
}


// Parte 2
function parteDois() {
    const notas = {
        bimestre1: 7.0,
        bimestre2: 3.7,
        bimestre3: 6.4,
        bimestre4: 8.6
    }

    let media = 0;

    console.warn("Parte 02: ")

    for (let bimestre in notas) {
        console.log(notas[bimestre]);

        media += notas[bimestre];
    }

    console.log(media / Object.keys(notas).length)

    // media tem que ser >= 7
    if ((media / Object.keys(notas).length) >= 7) {
        console.log(`Aluno aprovado com a nota ${(media / Object.keys(notas).length).toFixed(2)}`)
    } else {
        console.log(`O aluno não foi aprovado com a nota ${(media / Object.keys(notas).length).toFixed(2)}`)
    }
}

parteUm();
parteDois();
