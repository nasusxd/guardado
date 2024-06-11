

// Declarar variables globales
let cantMoni = 0
let cantPc = 0
let cantAuris = 0
let cantMouse = 0
let cantTeclado = 0
let cantSilla = 0
let listaPerif = [];//estructura [perif=>perif.tipo == '']

let perifericos = [
    //pcs
    { nombre: "pc1", tipo: "pc", puntos: 5 },
    { nombre: "pc2", tipo: "pc", puntos: 3 },
    { nombre: "pc3", tipo: "pc", puntos: 1 },
    //monitores
    { nombre: "moni1", tipo: "moni", puntos: 5 },
    { nombre: "moni2", tipo: "moni", puntos: 3 },
    { nombre: "moni3", tipo: "moni", puntos: 1 },
    //auriculares
    { nombre: "auri1", tipo: "auri", puntos: 5 },
    { nombre: "auri2", tipo: "auri", puntos: 5 },
    { nombre: "auri3", tipo: "auri", puntos: 4 },
    { nombre: "auri4", tipo: "auri", puntos: 2 },
    { nombre: "auri5", tipo: "auri", puntos: 3 },
    //mouses
    { nombre: "mouse1", tipo: "mouse", puntos: 5 },
    { nombre: "mouse2", tipo: "mouse", puntos: 4 },
    { nombre: "mouse3", tipo: "mouse", puntos: 3 },
    { nombre: "mouse4", tipo: "mouse", puntos: 3 },
    { nombre: "mouse5", tipo: "mouse", puntos: 2 },
    //teclados
    { nombre: "teclado1", tipo: "teclado", puntos: 5 },
    { nombre: "teclado2", tipo: "teclado", puntos: 3 },
    { nombre: "teclado3", tipo: "teclado", puntos: 2 },
    //sillas
    { nombre: "silla1", tipo: "silla", puntos: 5 },
    { nombre: "silla2", tipo: "silla", puntos: 4 },
    { nombre: "silla3", tipo: "silla", puntos: 1 },


];


var puntajeTotal = 0;

function calcularPuntajeTotal() {
    let puntajeActual = listaPerif.reduce((total, perif) => total + perif.puntos, 0);
    if (cantMoni == 3) {
        puntajeMaximoPosible = 40
    } else if (cantMoni == 2) {
        puntajeMaximoPosible = 35
    } else {
        puntajeMaximoPosible = 30
    }

    return { puntajeActual, puntajeMaximoPosible };
}
function agregarItem(itemNombre) {
    let itemObj = perifericos.find(periferico => periferico.nombre === itemNombre);

    if (itemObj) {
        if (itemObj.tipo == 'pc' && listaPerif.some(perif => perif.tipo == 'pc')) {
            alert('Ya hay un PC en la lista, no se pueden agregar más, borralo o apreta siguiente.');
        } else if (itemObj.tipo == 'moni' && listaPerif.filter(perif => perif.tipo == 'moni').length < 3) {
            listaPerif.push(itemObj);
            cantMoni++;
            document.getElementById("cantMoni").innerText = `${cantMoni}/3`;
        } else if (itemObj.tipo == 'auri' && listaPerif.some(perif => perif.tipo == 'auri')) {
            alert(`Ya hay un ${itemObj.tipo} en la lista, no se pueden agregar más, borralo o apreta siguiente..`);
        } else if (itemObj.tipo == 'mouse' && listaPerif.some(perif => perif.tipo == 'mouse')) {
            alert(`Ya hay un ${itemObj.tipo} en la lista, no se pueden agregar más, borralo o apreta siguiente..`);
        } else if (itemObj.tipo == 'teclado' && listaPerif.some(perif => perif.tipo == 'teclado')) {
            alert(`Ya hay un ${itemObj.tipo} en la lista, no se pueden agregar más, borralo o apreta siguiente..`);
        } else if (itemObj.tipo == 'silla' && listaPerif.some(perif => perif.tipo == 'silla')) {
            alert(`Ya hay un ${itemObj.tipo} en la lista, no se pueden agregar más, borralo o apreta siguiente..`);
        }

        else {//sino si se pude agregar
            listaPerif.push(itemObj);
            if (itemObj.tipo == 'pc') {
                cantPc++;
            } else if (itemObj.tipo == 'auri') {
                cantAuris++;
            } else if (itemObj.tipo == 'mouse') {
                cantMouse++;
            } else if (itemObj.tipo == 'teclado') {
                cantTeclado++;
            } else if (itemObj.tipo == 'silla') {
                cantSilla++;
            }
            document.getElementById("cantPC").innerText = `${cantPc}/1`;
            document.getElementById("cantAuris").innerText = `${cantAuris}/1`;
            document.getElementById("cantMouse").innerText = `${cantMouse}/1`;
            document.getElementById("cantTeclado").innerText = `${cantTeclado}/1`;
            document.getElementById("cantSilla").innerText = `${cantSilla}/1`;
            // Actualizar la visualización de cantidades para los otros tipos de periféricos aquí
        }

    } else {
        alert('No se encontró un periférico con ese nombre.');
    }
}

function quitarItem(nombre) {
    let index = listaPerif.findIndex(perif => perif.nombre === nombre);

    if (index !== -1) {
        let perifEliminado = listaPerif[index];
        listaPerif.splice(index, 1);

        if (perifEliminado.tipo == 'pc') {
            // Si se elimina un PC, se disminuye el contador correspondiente
            cantPc--;
            document.getElementById("cantPC").innerText = `${cantPc}/1`;
        } else if (perifEliminado.tipo == 'moni') {
            cantMoni--;
            document.getElementById("cantMoni").innerText = `${cantMoni}/3`;
        } else if (perifEliminado.tipo == 'auri') {
            cantAuris--;
            document.getElementById("cantAuris").innerText = `${cantAuris}/1`;
        } else if (perifEliminado.tipo == 'mouse') {
            cantMouse--;
            document.getElementById("cantMouse").innerText = `${cantMouse}/1`;
        } else if (perifEliminado.tipo == 'teclado') {
            cantTeclado--;
            document.getElementById("cantTeclado").innerText = `${cantTeclado}/1`;
        } else if (perifEliminado.tipo == 'silla') {
            cantSilla--;
            document.getElementById("cantSilla").innerText = `${cantSilla}/1`;
        }

        puntajeTotal -= perifEliminado.puntos;
        calcularPuntajeTotal();
    } else {
        alert('El periférico seleccionado no está en la lista.');
    }
}
// Función para avanzar al siguiente paso si hay al menos un item de cierta categoría
function siguiente(tipo, num) {
    if (listaPerif.some(perif => perif.tipo == tipo)) {
        if (num == 2) {
            paso2()
        } else if (num == 3) {
            paso3()
        } else if (num == 4) {
            paso4()
        } else if (num == 5) {
            paso5()
        } else if (num == 6) {
            paso6()
        } else { terminado() }

    } else {
        alert(`primero elige al menos un item.`);
    }
}
function atras(num) {
    if (num == 1) {
        paso1()
    } else if (num == 2) {
        paso2()
    } else if (num == 3) {
        paso3()
    } else if (num == 4) {
        paso4()
    } else if (num == 5) {
        paso5()
    }
}

function darImgPuntaje() {
    puntaje = calcularPuntajeTotal().puntajeActual
   
    if (puntaje <= 10) {
        mensaje = `<div style="">Humilde</div> <div> <img src="imgArmaTuPc/pcvieja.jpg" style="width: 40%;"></div>`
    } else if (puntaje > 10 && puntaje < 20) {
        mensaje = `<div style="">Normal</div> <div> <img src="imgArmaTuPc/pcNormal.jpg" style="width: 40%;"></div>`
    } else if (puntaje >= 20 && puntaje < 30) {
        mensaje = `<div style="">Buena</div> <div> <img src="imgArmaTuPc/pcBuena.jpeg" style="width: 40%;"></div>`
    } else if (puntaje >= 30) {
        mensaje = `<div style="">tryHard</div> <div> <img src="imgArmaTuPc/pctryhard.jpg" style="width: 40%;"></div>`
    }
    return mensaje
}

function paso1() {

    var setup1 = document.getElementById("armaSetup1");


    setup1.innerHTML = `
              </style>
              <div id="lista" >
                  <table >
                      <tr>
                          <td>
                              <img src="imagenes/pcEj.jpg" id="configFt"> <span id="cantPC">${cantPc}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/monitorCaro.png" id="configFt"> <span id="cantMoni">${cantMoni}/3</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/aurisLogi.jpg" id="configFt"> <span id="cantAuris">${cantAuris}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/mouseZowie.jpg" id="configFt"> <span id="cantMouse">${cantMouse}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/tecladoLogi.png" id="configFt"> <span id="cantTeclado">${cantTeclado}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/sillaEj.jpg" id="configFt"> <span id="cantSilla">${cantSilla}/1</span>
                          </td>
                      </tr>
                  </table>
              </div>
              <div id="bloqueDer" >
                  <table>
                      <tr id="recuadro">
                          <td>
                              <img src="imgArmaTuPc/pc1.jpeg" id="configFt"> <p>Pc con un procesador AMD Ryzen 9 7950X, 64gb de memoria ram ddr5, y una gráfica AMD RX 7900 XTX </p>
                              <div id="botonCentro"><button onclick="agregarItem('pc1')" style="background-color: green;">Agregar</button> <button onclick="quitarItem('pc1')" style="background-color: red;">X</button></div>
                          </td>
                      </tr>
                      <tr id="recuadro">
                          <td>
                              <img src="imgArmaTuPc/pc2.png" id="configFt"> <p>Pc con un procesador Intel Core I5-12400f, 16gb de memoria ram ddr4, con graficos integrados </p>
                              <div id="botonCentro"><button onclick="agregarItem('pc2')" style="background-color: green;">Agregar</button> <button onclick="quitarItem('pc2')" style="background-color: red;">X</button></div>
                          </td>
                      </tr>
                      <tr id="recuadro">
                          <td>
                              <img src="imgArmaTuPc/pc3.jpeg" id="configFt"> <p>Pc con un procesador AMD Athlon 3000G, 4gb de memoria ram ddr4, con graficos integrados </p>
                              <div id="botonCentro"><button onclick="agregarItem('pc3')" style="background-color: green;">Agregar</button> <button onclick="quitarItem('pc3')" style="background-color: red;">X</button></div>
                          </td>
                      </tr>
                  </table>
                  <div id="botonCentro"><button onclick="siguiente('pc',2)" style="background-color: green;">siguiente >></button></div>
              </div>
          `;
}

function paso2() {
    var setup1 = document.getElementById("armaSetup1");

    setup1.innerHTML = `
              </style>
              <div id="lista">
                  <table>
                      <tr>
                          <td>
                              <img src="imagenes/pcEj.jpg" id="configFt"> <span id="cantPC">${cantPc}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/monitorCaro.png" id="configFt"> <span id="cantMoni">${cantMoni}/3</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/aurisLogi.jpg" id="configFt"> <span id="cantAuris">${cantAuris}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/mouseZowie.jpg" id="configFt"> <span id="cantMouse">${cantMouse}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/tecladoLogi.png" id="configFt"> <span id="cantTeclado">${cantTeclado}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/sillaEj.jpg" id="configFt"> <span id="cantSilla">${cantSilla}/1</span>
                          </td>
                      </tr>
                  </table>
              </div>
              <div id="bloqueDer">
                  <table>
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/moni1.jpg" id="configFt">
                  <p>49" Samsung Odyssey OLED G9 Curved Ultrawide Gaming Monitor pantalla curva QHD dual de 5120 x 1440 con resolución Quantum Dot OLED de 240 Hz</p>
                  <div id="botonCentro">
                      <button onclick="agregarItem('moni1')"style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('moni1')"style="background-color: red;">X</button></div>
              </td>
          </tr>
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/moni2.jpg" id="configFt">
                  <p> Monitor Gamer Asus Va27ehe Led 27 1920 X 1080 75 Hz </p>
                  <div id="botonCentro"><button onclick="agregarItem('moni2')"style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('moni2')"style="background-color: red;">X</button></div>
              </td>
          </tr>
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/moni3.jpg" id="configFt">
                  <p>lg - monitor lcd lg 17 4:3 full hd pivotable</p>
                  <div id="botonCentro"><button onclick="agregarItem('moni3')"style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('moni3')"style="background-color: red;">X</button></div>
              </td>
          </tr>
      </table>
                  <div id="botonCentro">
                  <button onclick="atras(1)" style="background-color: green;"><<atras</button> 
                  <button onclick="siguiente('moni',3)" style="background-color: green;"> &nbsp;siguiente >></button>
                  
                  </div>
              </div>
          `;
}
function paso3() {
    var setup1 = document.getElementById("armaSetup1");

    setup1.innerHTML = `
              </style>
              <div id="lista">
                  <table>
                      <tr>
                          <td>
                              <img src="imagenes/pcEj.jpg" id="configFt"> <span id="cantPC">${cantPc}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/monitorCaro.png" id="configFt"> <span id="cantMoni">${cantMoni}/3</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/aurisLogi.jpg" id="configFt"> <span id="cantAuris">${cantAuris}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/mouseZowie.jpg" id="configFt"> <span id="cantMouse">${cantMouse}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/tecladoLogi.png" id="configFt"> <span id="cantTeclado">${cantTeclado}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/sillaEj.jpg" id="configFt"> <span id="cantSilla">${cantSilla}/1</span>
                          </td>
                      </tr>
                  </table>
              </div>
              <div id="bloqueDer">
                 <table>
         
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/auri1.jpg" id="configFt">
                  <p>AKG K-240 MKII  </p> <p>categoria: estudio</p>
                  <div id="botonCentro">
                      <button onclick="agregarItem('auri1')" style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('auri1')" style="background-color: red;">X</button>
                  </div>
              </td>
          </tr>
  
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/auris2.jpg" id="configFt">
                  <p>HyperX Cloud Revolver Espectro de sonido con calidad de estudio
                      Sonido envolvente 7.1 HyperX[1]
                      Caja de control de audio USB avanzado</p>
                      <p>categoria: gamer</p>
                  <div id="botonCentro">
                      <button onclick="agregarItem('auri2')" style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('auri2')" style="background-color: red;">X</button>
                  </div>
              </td>
          </tr>
  
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/auri3.jpg" id="configFt">
                  <p>Redragon Zeus X Wireless H510 Micrófono flexible incorporado.
                      Resistentes al polvo.
                      El largo del cable es de 2 m.
                      Cómodos y prácticos.</p>
                      <p>categoria: gamer</p>
                  <div id="botonCentro">
                      <button onclick="agregarItem('auri3')" style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('auri3')" style="background-color: red;">X</button>
                  </div>
              </td>
          </tr>
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/auri4.jpg" id="configFt">
                  <p>ST-CONQUER // AURICULARES GAMER CON MICRÓFONO</p> <p>categoria: gamer</p>
                  <div id="botonCentro">
                      <button onclick="agregarItem('auri4')" style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('auri4')" style="background-color: red;">X</button>
                  </div>
              </td>
          </tr>
          <tr id="recuadro">
              <td>
                  <img src="imgArmaTuPc/auri5.jpg" id="configFt">
                  <p>XIAOMI MI TRUE EARBUDS BASIC</p> <p>categoria: normales</p>
                  <div id="botonCentro">
                      <button onclick="agregarItem('auri5')" style="background-color: green;">Agregar</button>
                      <button onclick="quitarItem('auri5')" style="background-color: red;">X</button>
                  </div>
              </td>
          </tr>
  
      </table>
                  <div id="botonCentro">
                  <button onclick="atras(2)" style="background-color: green;"><<atras</button> 
                  <button onclick="siguiente('auri',4)" style="background-color: green;">siguiente >></button>
                  </div>
              </div>
          `;
}
function paso4() {
    var setup1 = document.getElementById("armaSetup1");

    setup1.innerHTML = `
              </style>
              <div id="lista">
                  <table>
                      <tr>
                          <td>
                              <img src="imagenes/pcEj.jpg" id="configFt"> <span id="cantPC">${cantPc}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/monitorCaro.png" id="configFt"> <span id="cantMoni">${cantMoni}/3</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/aurisLogi.jpg" id="configFt"> <span id="cantAuris">${cantAuris}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/mouseZowie.jpg" id="configFt"> <span id="cantMouse">${cantMouse}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/tecladoLogi.png" id="configFt"> <span id="cantTeclado">${cantTeclado}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/sillaEj.jpg" id="configFt"> <span id="cantSilla">${cantSilla}/1</span>
                          </td>
                      </tr>
                  </table>
              </div>
              <div id="bloqueDer">
                <table>
       
        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/mouse2jpg.jpg" id="configFt">
                <p>Razer Basilisk V2 Preto Rgb Chroma 20.000 dpi 11botones </p>
                <div id="botonCentro">
                    <button onclick="agregarItem('mouse1')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('mouse1')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/mouse1.jpg" id="configFt">
                <p>Logitech G Pro Gaming Sensor óptico.
                    Resolución: 12000dpi.
                    Contiene cable.
                    Cuenta con 6 botones.</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('mouse2')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('mouse2')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/mouse3.png" id="configFt">
                <p>REDRAGON Mouse M711 Cobra FPS 32000 dpi 8 botones</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('mouse3')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('mouse3')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>
        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/mouse4.png" id="configFt">
                <p>Vsg Hero 7200 Dpi 7 botones</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('mouse4')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('mouse4')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>
        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/mouse5.jpg" id="configFt">
                <p>Genius XScroll 800 dpi 3 botones</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('mouse5')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('mouse5')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

    </table>
                  <div id="botonCentro">
                  <button onclick="atras(3)" style="background-color: green;"><<atras</button> 
                  <button onclick="siguiente('mouse',5)" style="background-color: green;">siguiente >></button>
                  </div>
              </div>
          `;
}


function paso5() {
    var setup1 = document.getElementById("armaSetup1");

    setup1.innerHTML = `
              </style>
              <div id="lista">
                  <table>
                      <tr>
                          <td>
                              <img src="imagenes/pcEj.jpg" id="configFt"> <span id="cantPC">${cantPc}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/monitorCaro.png" id="configFt"> <span id="cantMoni">${cantMoni}/3</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/aurisLogi.jpg" id="configFt"> <span id="cantAuris">${cantAuris}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/mouseZowie.jpg" id="configFt"> <span id="cantMouse">${cantMouse}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/tecladoLogi.png" id="configFt"> <span id="cantTeclado">${cantTeclado}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/sillaEj.jpg" id="configFt"> <span id="cantSilla">${cantSilla}/1</span>
                          </td>
                      </tr>
                  </table>
              </div>
              <div id="bloqueDer">
                <table>
       
        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/teclado1.jpg" id="configFt">
                <p>RAZER HUNTSMAN V2 ESPAÑOL CLICKY PURPLE SWITCH </p>
                <div id="botonCentro">
                    <button onclick="agregarItem('teclado1')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('teclado1')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/teclado2.jpg" id="configFt">
                <p>Redragon Kumara K552 Qwerty Outemu Blue</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('teclado2')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('teclado2')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/teclado3.jpg" id="configFt">
                <p>NOGA-NET NKB-78011</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('teclado3')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('teclado3')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>
       

    </table>
                  <div id="botonCentro">
                  <button onclick="atras(4)" style="background-color: green;"><<atras</button> 
                  <button onclick="siguiente('teclado',6)" style="background-color: green;">siguiente >></button>
                  </div>
              </div>
          `;
}
function paso6() {
    var setup1 = document.getElementById("armaSetup1");

    setup1.innerHTML = `
              </style>
              <div id="lista">
                  <table>
                      <tr>
                          <td>
                              <img src="imagenes/pcEj.jpg" id="configFt"> <span id="cantPC">${cantPc}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/monitorCaro.png" id="configFt"> <span id="cantMoni">${cantMoni}/3</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/aurisLogi.jpg" id="configFt"> <span id="cantAuris">${cantAuris}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/mouseZowie.jpg" id="configFt"> <span id="cantMouse">${cantMouse}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/tecladoLogi.png" id="configFt"> <span id="cantTeclado">${cantTeclado}/1</span>
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <img src="imagenes/sillaEj.jpg" id="configFt"> <span id="cantSilla">${cantSilla}/1</span>
                          </td>
                      </tr>
                  </table>
              </div>
              <div id="bloqueDer">
               <table>
       
        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/silla1.jpg" id="configFt">
                <p> Corsair Tc100 Relaxed Materiales: Metal, espuma, poliuretano. Angulo de respaldo: 90° - 160</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('silla1')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('silla1')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/silla2.jpg" id="configFt">
                <p>Silla Cool 1D Respaldo reclinable con mecanismo Synchron, Respaldo de Nylon, revestido con tela de red elastic Mesh</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('silla2')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('silla2')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>

        <tr id="recuadro">
            <td>
                <img src="imgArmaTuPc/silla3.jpg" id="configFt">
                <p>Banqueta Voss 2000 Titan</p>
                <div id="botonCentro">
                    <button onclick="agregarItem('silla3')" style="background-color: green;">Agregar</button>
                    <button onclick="quitarItem('silla3')" style="background-color: red;">X</button>
                </div>
            </td>
        </tr>
       

    </table>

                  <div id="botonCentro">
                  <button onclick="atras(5)" style="background-color: green;"><<atras</button> 
                  <button onclick="siguiente('silla',7)" style="background-color: green;">terminar Setup >></button>
                  </div>
              </div>
          `;
}
function terminado() {







    var setup1 = document.getElementById("armaSetup1");
    var resultados = calcularPuntajeTotal()
    cadena = darImgPuntaje()
    setup1.innerHTML = `<div id="terminado"> 
    <h1>Terminaste tu Setup</h1>
    <p>tu puntaje fue de ${resultados.puntajeActual} / ${resultados.puntajeMaximoPosible}  </p>
    <p>La categoria de tu setup es:</p>
    <p>${cadena}</p>
    <button onclick="programaPrincipal()" >¿Armar setup denuevo?</button>
    </div>
    
     `
}

// PROGRAMA PRINCIPAL
function programaPrincipal() {
 cantMoni = 0
 cantPc = 0
 cantAuris = 0
 cantMouse = 0
 cantTeclado = 0
 cantSilla = 0
 listaPerif = [];
    paso1()

}
