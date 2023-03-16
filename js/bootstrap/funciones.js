function abrir(ruta){
    alert(ruta)
    window.location.href = ruta;
}

openlogin.addEventListener("click",function() {
    alert("Holaaaa")
    $('#exampleModal').modal('show');
});
