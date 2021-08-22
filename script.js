console.log('Arquivo carregado');

let btnTheme = document.querySelector('.theme');
let body = document.querySelector('body');
let iframe = document.querySelector('iframe');

// console.log(btnTheme);

// btnTheme.onclick = function(event){

// }
// -----------OU------------

btnTheme.onclick = (event) => {
    body.classList.toggle('dark-theme');
}