const fs = require("fs"); //faz parte do core do node

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => { // o primeiro argumento é o nome do arquivo, o segundo é o conteudo
//     if (err) throw err; // se der erro, lança o erro
//     console.log("The file has been saved!"); // se der certo, imprime a mensagem
// });

fs.readFile("./message.txt", "utf8", (err, data) => { // o primeiro argumento é o nome do arquivo, o segundo é o encoding
    if (err) throw err; // se der erro, lança o erro
    console.log(data); // se der certo, imprime o conteudo do arquivo
    });