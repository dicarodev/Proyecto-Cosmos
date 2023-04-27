//Animacion ScrollTop
$(window).scroll(function() {
    //Compara la posición vertical del usuario con la altura total de la página
    if ($(this).scrollTop() >= document.body.scrollHeight - $(window).height()) {
        //Muestra el cohete con una animación de fundido al llegar al final de la página
        $('.cohete').fadeIn(); 
    } else {
        //Oculta el cohete con una animación de fundido si la posición vertical es menor que el final de la página.
        $('.cohete').fadeOut(); 
    }
});

$(document).ready(function() {
    $(".cohete").on("click", function() {

        //Desplaza la página hacia la parte superior de la página con una animación suave durante 3 segundos cuando se hace clic en el cohete.
        $("html, body").animate({ scrollTop: 0 }, 3000, function() { 

            //Vuelve al inicio de la página cuando se completa la animación de desplazamiento.
            window.location.href = "#top"; 
        });

        //Previene el comportamiento predeterminado del enlace al hacer clic en el cohete.
        return false; 
    });
});
