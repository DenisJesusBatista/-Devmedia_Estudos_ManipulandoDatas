const titulo = 'Linguagem JavaScript';
const maxCaracteres = 10;

if (titulo.length <= maxCaracteres) {
    console.log('Título válido, quantidade de caracter ' + titulo.length);
}
else {
    console.log('O limite de caracteres para o título:' + maxCaracteres);
}