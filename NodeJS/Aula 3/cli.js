const chalk = require('chalk');
const pegaArquivo = require('./index');

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminho);