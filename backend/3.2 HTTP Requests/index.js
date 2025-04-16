import express from "express"; // importa express
const app = express(); //cria uma instancia do express
const port = 3000; // define a porta do servidor

app.get("/", (req, res) => { // rota raiz
  res.send("<h1>Helloo</h1>"); // envia resposta para o cliente
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Vanessa</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => { // inicia o servidor na porta 3000
  console.log(`Server started on port ${port}`); // imprime mensagem de sucesso
});
