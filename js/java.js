function eventListerners() { document.querySelector(".mobile-menu").addEventListener("click", navegacionResponsive)}

function navegacionResponsive() {document.querySelector(".navegacion").classList.toggle("mostrar")}

document.addEventListener("DOMContentLoaded",(function(){eventListerners()})),
(window,document);