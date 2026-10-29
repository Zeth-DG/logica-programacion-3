console.log(document);

const initialN = document.getElementById("initialN");
const botonSend = document.getElementById("button");

botonSend.addEventListener("click", () => {
    let numeroUsuario = parseFloat(initialN.value);
    const espacioResultado = document.getElementById("espacioResultado");
    const espacioAlerta = document.getElementById("espacioAlerta");

    if (isNaN(numeroUsuario)) {
        espacioAlerta.innerText = "Por favor ingresa un numero"
        espacioResultado.innerText = "";
        initialN.value = "";
    } else if (!Number.isInteger(numeroUsuario)) {
        espacioAlerta.innerText = "Por favor ingresa un número entero";
        espacioResultado.innerText = "";
        initialN.value = "";
    } else if(numeroUsuario < 0){
        espacioAlerta.innerText= "Por favor ingresa un número positivo";
        espacioResultado.innerText = "";
        initialN.value = "";
    } else {
        let mult = 1;

        for (let i = 1; i <= numeroUsuario; i++) {
            mult = mult * i;
        }//for

        espacioResultado.innerText = `El factorial de ${numeroUsuario} es ${mult.toLocaleString("es-MX")}`; //para agregar comas

        initialN.value = ""; //vaciar el campo
    }
})

