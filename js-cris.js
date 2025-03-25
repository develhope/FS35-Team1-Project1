
// setTimeout(()=>{
//     const img= document.querySelector(".main-img")
//     img.src= "img/img-adidas.avif"
   
// },4000)


// setTimeout(()=>{
//     const img= document.querySelector(".main-img")
//     img.src= src="https://brand.assets.adidas.com/video/upload/f_auto,q_auto/if_w_gt_1920,w_1920/global_main_pack_1_pure_victory_football_ss25_launch_hp_banner_hero_d_05b272a381.jpg"
   
 
// },8000)

// setTimeout(()=>{
//     const img= document.querySelector(".main-img")
//     img.src= "img/Scarpe_Campus_00s_Blu_JR8163_01_00_standard.avif"
//    img.style.height = "650px"
 
// },12000)

// setInterval(() => {
//     const img = document.querySelector(".main-img");
//     img.src = "img/img-adidas.avif";
// }, 4000);

// setInterval(() => {
//     const img = document.querySelector(".main-img");
//     img.src = "https://brand.assets.adidas.com/video/upload/f_auto,q_auto/if_w_gt_1920,w_1920/global_main_pack_1_pure_victory_football_ss25_launch_hp_banner_hero_d_05b272a381.jpg";
// }, 8000);
// JavaScript
let idInterval; // Variabile per il setInterval
let valorePause = false; // Stato iniziale
let currentImage = 0; // Stato iniziale delle immagini

const play = document.querySelector(".play");
const svg = play.querySelector("svg");
const img = document.querySelector(".main-img");

// Configura lo stato iniziale (visualizzazione delle lineette verticali)
svg.innerHTML = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H7v16h2V4Zm8 0h-2v16h2V4Z" fill="currentColor"></path>`;
svg.style.stroke = "var(--main-color-white)";
svg.style.strokeWidth = "1px";

// Lista delle immagini
const images = [

    /*1 foto*/"https://brand.assets.adidas.com/video/upload/f_auto,q_auto/if_w_gt_1920,w_1920/global_main_pack_1_pure_victory_football_ss25_launch_hp_banner_hero_d_05b272a381.jpg", 
    /*2 foto*/"https://brand.assets.adidas.com/video/upload/f_auto,q_auto/if_w_gt_1920,w_1920/global_the_original_originals_ss25_launch_hp_mh_all_franchises_d_1e3fc8baf5.jpg",
    
    /*3 foto*/"https://brand.assets.adidas.com/video/upload/f_auto,q_auto/if_w_gt_1920,w_1920/europe_EOSS_commercial_ss25_Mid_Season_Sale_Phase1_Onsite_AB_Test_d_b6d129ac96.jpg", 
    /*4 foto*/ "img/img-adidas.avif" 
];

// Funzione per alternare le immagini
function changeImage() {
    img.src = images[currentImage]; // Cambia immagine in base all'indice currentImage
    currentImage = (currentImage + 1) % images.length; // L'operazione modulo % impedisce che currentImage superi la lunghezza dell'array
}

// Avvia il setInterval iniziale al caricamento della pagina
idInterval = setInterval(changeImage, 2000); // Cambia immagine ogni 4 secondi

// Aggiungi l'evento click sull'SVG
svg.addEventListener("click", () => {
    if (valorePause) {
        // Se è in play, riavvia il setInterval e mostra l'icona "pause"
        idInterval = setInterval(changeImage, 2000);

        svg.innerHTML = `
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4H7v16h2V4Zm8 0h-2v16h2V4Z" fill="currentColor"></path>`;
        svg.style.stroke = "var(--main-color-white)";
        svg.style.strokeWidth = "1px";
    } else {
        // Se è in pausa, ferma il setInterval e mostra l'icona "play"
        clearInterval(idInterval);

        svg.innerHTML = `
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5v14l11-7z" fill="currentColor"></path>`;
        svg.style.stroke = "var(--main-color-white)";
        svg.style.strokeWidth = "1px";
    }

    valorePause = !valorePause ; // Alterna lo stato
});













