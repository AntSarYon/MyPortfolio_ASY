function toggleMenu(){
    //Obtenemos referencia a elementos de la página Web
    //(en este caso, por medio de su clase)
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    //Haremos que el elemento agregue o remueva la clase (estilo) Open
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}