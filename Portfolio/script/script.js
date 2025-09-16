//
// function iniciaSom(){
//     let audio = document.getElementById("audio");
//     audio.play();
// }
// iniciaSom();

//
const textWelcome = "Olá meu nome é Seth Lussueki Bem vindo ao meu PORTFÓLIO"
const titulo = document.getElementById("welcome");
let i = 0;

function escrever(){
    if(i < textWelcome.length){
        titulo.innerHTML += textWelcome.charAt(i);
        i++;
        setTimeout(escrever,20);
    }
}
escrever();

