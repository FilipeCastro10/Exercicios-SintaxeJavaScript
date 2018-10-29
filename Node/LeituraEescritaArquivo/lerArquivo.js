//fs é um modulo presente no Node.e que permite a manipulação de arquivos.
const fileSystem = require('fs');

//__dirname é uma constant do node que indica o caminho do diretório atual
console.log(__dirname);

const caminhoDoArquivo = __dirname + "/arquivo.json";//concatenção

//metodo sincrono. Lê totalmente o arquivo antes de continuar.
const conteudo = fileSystem.readFileSync(caminhoDoArquivo, 'UTF-8');
console.log(conteudo);

//metodo assincrono. O arquivo será lido paralelamente a execução do programa.
//funcao que recebe o conteudo em JSON e converte para objeto JS
const callBack = (erro, conteudo) => {
    const objeto = JSON.parse(conteudo);
    console.log(`Exibir ${objeto.db.host}: ${objeto.db.port}`);
}

//assincrono...
fileSystem.readFile(caminhoDoArquivo, 'UTF-8', callBack );
console.log('vai executar primeiro pois o arquivo ainda está sendo lido');

//Uma forma mais simples de ler aquivos .json sem o fs
const config = require('./arquivo.json');
console.log('leitura sem o FS',config);

//lendo uma pasta readdir(__dirname, Func_callBack)
fileSystem.readdir(__dirname, (erro, arquivos) => {
    console.log('arquivos da pasta: ',arquivos);
});

//o mais recomendado é ler arquivos de forma assincrona..