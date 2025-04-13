import inquirer from 'inquirer';
import x from "qr-image";
var qr = require('qr-image');
import fs from 'fs';

inquirer
.prompt([{
"message": "Type in your URL: ", 
nome: "URL",

},
])
.then((answers) => {
const url = answers.URL;
var qr_svg = qr.image(url);
qr_svg.pip(fs.createWriteStream('qr_img.svg'));

fs.writeFile("URL.txt", url, (err) => {
if (err) throw err;
console.log("The file has been saved!");
});
 
})
.catch((error) => {
  if (error.isTtyError) {
    // Prompt couldn't be rendered in the current environment
  } else {
    // Something else went wrong
  }
});

