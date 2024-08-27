class encriptadorTexto{
    constructor(){
        this.reglasEncriptacion = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
        this.reglasDesencriptado = {'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u'};
    }

    encriptado(texto){
        if (!this.textoValido(texto)) return;
        return texto.replace(/[eioua]/g, letra => this.reglasEncriptacion[letra]);
    }

    desencriptado(textoEncriptado){
        if (!this.textoValido(textoEncriptado)) return;
        return textoEncriptado.replace(/enter|imes|ai|ober|ufat/g, encriptado => this.reglasDesencriptado[encriptado]);
    }

    textoValido(texto){
        let validarTexto = /^[a-z\s]*$/;
        let advertencia = document.getElementById('advertencia');
        if (!validarTexto.test(texto)) {
            advertencia.textContent = 'Solo se permiten letras minúsculas sin acentos ni caracteres especiales';
            return false;
        }
        advertencia.textContent = '';
        return true;
    }
}

// Funciones que ayudaran a manejar los eventos
document.addEventListener('DOMContentLoaded', () => {
    let encriptador = new encriptadorTexto();

    document.getElementById('encriptar').addEventListener('click', () => {
        let entrada = document.getElementById('entrada').value;
        let resultado = encriptador.encriptado(entrada);
        document.getElementById('resultado').value = resultado || '';
    });

    document.getElementById('desencriptar').addEventListener('click', () => {
        let entrada = document.getElementById('entrada').value;
        let resultado = encriptador.desencriptado(entrada);
        document.getElementById('resultado').value = resultado || '';
    });

    document.getElementById('copiar').addEventListener('click', () => {
        let resultado = document.getElementById('resultado');
        resultado.select();
        document.execCommand('copy');
        alert('Texto copiado en el portapapeles');
    });
});

