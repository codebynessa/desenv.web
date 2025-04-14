import express from "express"; // importa express
const app = express(); //cria uma instancia do express
const port = 3000; // define a porta do servidor

app.listen(port, () => { // inicia o servidor na porta 3000
  console.log(`Server running on port ${port}.`); // imprime mensagem de sucesso
});
