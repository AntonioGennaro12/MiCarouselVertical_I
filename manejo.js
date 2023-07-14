// IMAGENES
const   IMG_1   =   "https://cdn.autoproyecto.com/wp-content/uploads/2021/08/2023-Nissan-Z-31.jpg";
const   IMG_2   =   "https://cdn.autoproyecto.com/wp-content/uploads/2022/08/Nissan-Z-2023-1600-01.jpg";
const   IMG_3   =   "https://img.freepik.com/fotos-premium/hermoso-auto-deportivo-desatando-emocion-poder-elegancia-autos-deportivos-ia-generativa_894903-4091.jpg?w=2000";
const   IMG_4   =   "https://cdn.autoproyecto.com/wp-content/uploads/2023/07/Nissan-GT-R-2024-1600-02.jpg";
const   IMG_5   =   "https://cdn.autoproyecto.com/wp-content/uploads/2021/08/2023-Nissan-Z-28.jpg";
const   IMG_6   =   "https://cdn.autoproyecto.com/wp-content/uploads/2023/07/Aston_Martin_DB12_Silver_0006-660x440.jpg";
const   IMG_7   =   "https://images.carexpert.com.au/resize/3000/-/app/uploads/2022/12/Audi-Q8-e-tron-HERO-16x9-1.jpg";
const   IMG_8   =   "https://www.japantimes.co.jp/wp-content/uploads/2018/04/b-toyota-a-20180404.jpg";
const   IMG_9   =   "https://media.gq.com.mx/photos/604458fef0cc2a1d8969755c/16:9/w_2560%2Cc_limit/10%2520autos%2520que%2520quieren%2520ser%2520el%2520mejor%2520de%25202021%2520-%2520BMW%25204-Series%25202021%2520(1).jpg";
const   IMG_10  =   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS228k1uXF_r4XMsAwxEEO1MXU2VyfpIu7YGh7O6EPvSPk5aHgdqHw-aaOZEub_vbYZfGg&usqp=CAU";
const   IMG_11  =   "https://media.ed.edmunds-media.com/acura/nsx/2017/oem/2017_acura_nsx_coupe_base_fq_oem_1_1600.jpg";   
const   IMG_12  =   "https://hondainamerica.com/wp-content/uploads/2017_Acura_NSX_1001___Cropped-scaled.jpg";
//
const IMG_BODY  =   "https://g1.img-dpreview.com/492F4EBD5BF24D2198D80D921BA022F7.jpg";
//
const miBody            = document.querySelector("body");
// Obtiene el contenedor del carrusel
const carouselContainer = document.getElementById("carousel-container");
const carouselItem      = document.querySelectorAll(".carousel-item");
const imgCarousel       = document.querySelectorAll(".img-sld");
// Botones de control
const btnUp             = document.getElementById("btn-up");
const btnDown           = document.getElementById("btn-down");
const btnCont           = document.getElementById("btn-cont");
const btnStop           = document.getElementById("btn-stop");
// Ajuste del Carousel
const nroSldVent        = document.querySelector("#sld-vent");
const inSldVent         = document.querySelector("#nro-en-vent");
const altoDeVent        = document.querySelector("#alto-vent");
const inAltoVen         = document.querySelector("#alto-de-vent");
const botAjusta         = document.querySelector("#bot-ajusta");

// CONSTANTES BASICAS
const MINALTVEN         = 300;  // Minimo en px
const MAXALTVEN         = 1200; // Máximo en px
const DFLTALTOVEN       = 600;  // Default 
const MINSLDVENT        = 1;    // Minima cantidad de slides en ventana
const MAXSLDVENT        = 10;   // Máxima cantidad de slides en ventana
const DFLTSLDVENT       = 3;    // Default
const SIZETXTSLD        = 10;   // Tamaño del texto "Slide#xx"
const HEIGHTTXTP        = 3;    // Alto del elemento "Texto"
const NUMSLIDES         = 14;   // Numero de Slides por default
const IMGFORMW          = 16;   // Formato de la foto (Ancho)
const IMGFORMH          = 9;    // Formato d ela foto (Alto)
// Modo continuo
const TIEMPOMODOCONT    = 1500; // 1,5 segundos


// Valores ajustables: alto de ventana y nro de slides
const ALTOVENTANA       = DFLTALTOVEN; // Alto de la ventana de Scroll (default)
const NUMSLDSVENT       = DFLTSLDVENT;   // Cantidad de elementos en Ventana (default)
// Valores calculados en función de los básicos
const OFFSET            = SIZETXTSLD+HEIGHTTXTP; // Ajuste fino manual en función de lo sparámetros que no se pueden medir 
const IMGHEIGHT         = ((ALTOVENTANA/NUMSLDSVENT)-SIZETXTSLD - HEIGHTTXTP); // calcula el ancho d el aimagen
const IMGWIDHT          = IMGHEIGHT / IMGFORMH * IMGFORMW; // Calcual el alto de la imagen en función del ancho
// Variables
let numSlides           = NUMSLIDES;
let numSldVent          = NUMSLDSVENT;
let altoVentana         = ALTOVENTANA;
let imgHeight           = ((altoVentana/numSldVent)-SIZETXTSLD - HEIGHTTXTP); // calcula el ancho de l aimagen
let imgWidht            = imgHeight / IMGFORMH * IMGFORMW; // Calcual el alto de la imagen en función del ancho
let alturaItem          = IMGHEIGHT;
let sldCoMax            = numSlides-numSldVent;
let contaVert           = 0;

// Inicializaciones
miBody.style.backgroundImage = "url("+IMG_BODY+")";
inSldVent.value         = NUMSLDSVENT;
inAltoVen.value         = ALTOVENTANA;

// Inicializa todo el carousel
inicializaCarousel();

// FUNCIONES
/**
 * Inicializa el carousel con los vaores de defaul o los nuevos
 */
function  inicializaCarousel() {
  // Configura la altura de la Ventana
  carouselContainer.style.height = altoVentana + "px";
  imgHeight           = ((altoVentana/numSldVent)-SIZETXTSLD - HEIGHTTXTP); // calcula el ancho de l aimagen
  imgWidht            = imgHeight / IMGFORMH * IMGFORMW; // Calcual el alto de la imagen en función del ancho
  sldCoMax            = numSlides-numSldVent;
  // Configura el tamaño de las imagenes
  console.log("ImgLen: "+imgCarousel.length);
  console.log(imgWidht);  // BORRAR
  console.log(imgHeight); // BORRAR

  for (let i=0; i<imgCarousel.length; i++) {
    imgCarousel[i].style.width = imgWidht + "px";
    imgCarousel[i].style.height = imgHeight + "px";
  }
  // Calcula la altura a desplazar cada elemento del carrusel
  let itemHeight = carouselContainer.querySelector(".carousel-item").offsetHeight; // pide la altura "real" del item
  console.log("ItHei: "+itemHeight);
  alturaItem = imgHeight + OFFSET; // carga el ajuste... por qu ela "real" no es la real
  console.log("AltReal: "+alturaItem);
  contaVert=0;
  carouselContainer.scrollTop = 0;
}

/**
 * Muestra el siguiente slide hacia arriba o hacia abajo 
 * @param {number} dir (-1 "Hacia arriba", +1 "Hacia Abajo" y Continuo)
 */ 
function mostrarSiguienteSlide(dir) {
  if (((contaVert += dir) < 0)||(contaVert > sldCoMax )) {
    contaVert=0;
    carouselContainer.scrollTop = 0;
  }
  else {
    carouselContainer.scrollTop += (alturaItem*dir);
    }
  }


/**
 * // Mueve los items hacia arriba (-1)
 */
function moveCarouselUp() {
  mostrarSiguienteSlide(-1);
  }

/**
 * // Mueve los items hacia abajp (+1)
 */
function moveCarouselDown() {
  mostrarSiguienteSlide(+1); 
}
/**
 * Pone a correr el carousel en forma continua
 */
function carousContinuo () {
  intervalo = setInterval(moveCarouselDown, 2000); // Mostrar siguiente Slide x segundos
}

/**
 * Detiene el deslizamiento Continuo
 */  
function carouselStop() {
  clearInterval(intervalo);
}

// Asocia los eventos de clic a los botones
btnUp.addEventListener("click", moveCarouselUp);
btnDown.addEventListener("click", moveCarouselDown);
btnCont.addEventListener("click", carousContinuo);
btnStop.addEventListener("click", carouselStop);

/**
 * Ajusta lo parámetros del Carousel según lo ingresado
 */
function  ajustaCarousel() {
  //verifico nro de slides en ventana sino fijo al max o min
  if (inSldVent.value > MAXSLDVENT ) {
    inSldVent.value = MAXSLDVENT;
  }
  else if (inSldVent.value < MINSLDVENT ) {
    inSldVent.value = MINSLDVENT;
  }
  numSldVent = inSldVent.value;
  //verifico alto de ventana sino fijo al max o min
  if ( inAltoVen.value >= MAXALTVEN) {
    inAltoVen.value = MAXALTVEN;    }
  else if ( inAltoVen.value < MINALTVEN) {
    inAltoVen.value = MINALTVEN;
  }
  altoVentana = inAltoVen.value;
  inicializaCarousel ();
}
