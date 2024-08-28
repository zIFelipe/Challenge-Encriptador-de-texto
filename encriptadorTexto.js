

//vector que almacenas las cadenas encriptadas y las letras que corresponden a cada cadena.
let reglasEncriptacion = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
let reglasDesencriptado = {'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u'};

    //funcion para encriptar el texto digitado
function encriptado(texto){
    //verifica si el texto es valido, si no lo es, detiene la operacion
    if (!textoValido(texto)) return;
    //reemplaza las letras en el texto con las cadenas que les corresponden, resultando en el texto encriptado
    return texto.replace(/[eioua]/g, letra => reglasEncriptacion[letra]);
}
    //funcion para el desencriptado del texto digitado
function desencriptado(textoEncriptado){
     if (!textoValido(textoEncriptado)) return;
    return textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, encriptado => reglasDesencriptado[encriptado]);
}
//Funciona para validar las letras minusculas y los espacion, comprueba la cadena y veriifica lo anterior
function textoValido(texto){
    //permite solo letras minusculas y espacios
    let validarTexto = /^[a-z\s]*$/;
    let advertencia = document.getElementById('advertencia');
    //si el texto no es valido, mostrará una advertencia con lo que no se debe introducir
    if (!validarTexto.test(texto)) {
        advertencia.textContent = 'Solo se permiten letras minúsculas sin acentos ni caracteres especiales';
        return false;
    }
    //si el texto es valido, limpia la advertencia y retorna true
    advertencia.textContent = '';
    return true;
}
function imagenOcultaR(){
    let resultado = document.getElementById('resultado');
    let imagenOculta = document.querySelector('.imagen-fondo');

    if(resultado.value.trim() === ''){
        imagenOculta.style.display = 'block';
    }else{
        imagenOculta.style.display = 'none';
    }
}

//Funciones para el manejo de eventos
function manejoEventos(){
    //boton de encriptar
        document.getElementById('encriptar').addEventListener('click', () => {
        let entrada = document.getElementById('entrada').value;
        let resultado = encriptado(entrada);
        document.getElementById('resultado').value = resultado || '';
        imagenOcultaR();
    });
    //boton de desencriptar
    document.getElementById('desencriptar').addEventListener('click', () => {
        let entrada = document.getElementById('entrada').value;
        let resultado = desencriptado(entrada);
        document.getElementById('resultado').value = resultado || '';
        imagenOcultaR();
    });
    //boton de copiar

    document.getElementById('copiar').addEventListener('click', () => {
        let resultado = document.getElementById('resultado');
        resultado.select();
        document.execCommand('copy');
        alert('Texto copiado en el portapapeles');
    });
}
//compila la función manejoEventos cuando el contenido del DOM está completamente cargado
document.addEventListener('DOMContentLoaded', manejoEventos);


