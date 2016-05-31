/*Validar un formulario que contenga las cajas de texto nombre y código universitario. validar si están limpios, para nombre solo letras del alfabeto y código solo números .*/



/*Usando frameworks jquery .*/


 /*Usando java script .*/
    function justNumbers(e)
        {
        var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 0) || (keynum == 9))
        return true;

        return /\d/.test(String.fromCharCode(keynum));
        }

        function sololetras(){
        if (event.keyCode >45 && event.keyCode  <57)
            event.returnValue = false;
        }
