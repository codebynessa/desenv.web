var numberOfButtons = document.querySelectorAll(".drum").length; //pegando o número de botões

for (var i = 0; i<numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I go clicked!");
});
    } 
    
