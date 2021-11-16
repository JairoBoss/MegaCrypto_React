let videos = new Array();

function Videos(nombre, ruta, definicion) {
    this.nombre = nombre;
    this.ruta = ruta;
    this.definicion = definicion;
}

let blockchain = new Videos('¿Que es el blockchain?', 'https://www.youtube.com/embed/Yn8WGaO__ak', '¿Qué es Blockchain? ¿Cómo funciona? En este video aprenderas un poco de como funciona el blockchain sin complicarte mucho.');
let nft = new Videos('¿Que es un  nft?', 'https://www.youtube.com/embed/h99R5bwHHe4', '¿Qué es un NFT? sin complicaciones, facil y sencillo para toda la familia.');
let historiaBTC = new Videos('Historia del BTC', 'https://www.youtube.com/embed/6aKOxuxvm0g', 'Historia del BTC con dibujos animados.');
let staking = new Videos('¿Qué es STAKING?', 'https://www.youtube.com/embed/oGnxlPJfDJY', 'Como funciona el Staking?.');
let allBTC = new Videos('Todo acerca de BTC', 'https://www.youtube.com/embed/3y1IxHrs158','Todo lo que necesitas sabes acerca de BTC');


//https://www.youtube.com/watch?v=6aKOxuxvm0g&ab_channel=FredLammie


videos.push(blockchain);
videos.push(nft);
videos.push(historiaBTC);
videos.push(staking);
videos.push(allBTC);



var imagen_a_mostrar = 0;

function mover(numero) {
    let titulo = document.getElementById("tituloArticulo");
    let imagen = document.getElementById("video");
    let informacion = document.getElementById("informacionDelArticulo");
    var ultima = videos.length - 1;
    var temp = imagen_a_mostrar + numero;

    if (temp < 0) {
        temp = ultima;
    }
    if (temp > ultima) {
        temp = 0;
    }
    imagen_a_mostrar = temp;

    titulo.innerHTML = videos[imagen_a_mostrar].nombre;
    imagen.src = videos[imagen_a_mostrar].ruta;
    informacion.innerHTML = videos[imagen_a_mostrar].definicion;

}