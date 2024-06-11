function loQueTenemos() {
    var imagen = document.getElementById("setupGamerImg");
    imagen.src = "imagenes/setupHumilde.jpg";
    var nombre = document.getElementById("nombreSetup")
    nombre.innerText = "Setup Humilde"
}
function loQueQueremos() {
    var imagen = document.getElementById("setupGamerImg");
    imagen.src = "imagenes/setupGamer.png";
    var nombre = document.getElementById("nombreSetup")
    nombre.innerText = "Setup Gamer"
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function linksAleatorios() {
    let paginas = [
        '<a href="auriculares.html"target="_blank"><img src="imagenes/auris.png" id="imgMenuPag"></a>',
        '<a href="teclado.html"target="_blank"><img src="imagenes/teclado.png" id="imgMenuPag"></a>',
        '<a href="mouse.html"target="_blank"><img src="imagenes/mouse.png" id="imgMenuPag"></a>',
        '<a href="pc.html"target="_blank"><img src="imagenes/pc.png" id="imgMenuPag"></a>',
        '<a href="monitor.html"target="_blank"><img src="imagenes/monitor.png" id="imgMenuPag"></a>',
        '<td><a href="silla.html"target="_blank"><img src="imagenes/silla.png" id="imgMenuPag"></a>'
    ]
    var seUso = ""
    for (i = 0; i < 6; i++) {
        var sePudo = false
        while (sePudo == false) {
            let posicion = getRandomNumber(0, 5);
            if (seUso.indexOf(posicion) == -1) {
                let pagina = paginas[posicion];
                let cuadro = document.getElementById("cuadro" + (i + 1));
                cuadro.innerHTML = pagina;
                seUso += posicion.toString()
                sePudo = true
            }

        }

    }

}