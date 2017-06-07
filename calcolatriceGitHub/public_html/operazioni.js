$(document).ready(function () {
    var txt = ""; //Display 
    var numeratore1 = ""; 
    var numeratore2 = "";
    var operazione = ""; 
    var opUsata = 0; //variabile usata per bloccare a una operazione la calcolatrice
    $("#disp").val("");

    $("#Uguale").click(function () { // al click del bottone uguale apparirà a schermo il risultato
        if (txt !== "" && operazione !== "") {
            numeratore2 = parseFloat(txt);
            switch (operazione) {
                case "+":
                    txt = numeratore1 + numeratore2;
                    break;
                case "-":
                    txt = numeratore1 - numeratore2;
                    break;
                case "*":
                    txt = numeratore1 * numeratore2;
                    break;
                case "/":
                    txt = numeratore1 / numeratore2;
                    break;
            }
            $("#disp").val(txt);
            numeratore1 = "";
            numeratore2 = "";
            operazione = "";
            txt = "";
        }
    });

    $(".op").click(function () { //definesce l'operazione premuta
        if (opUsata != 1) {
            if ($(this).text() === "-" && txt === "") {
                txt += $(this).text();
                $("#disp").val(txt);
            } else if (operazione === "" && txt !== "" && txt !== "-") {
                numeratore1 = parseFloat(txt);
                operazione = $(this).text();
                $("#disp").val(txt + operazione);
                txt = "";
            } else if (operazione !== "") {
                operazione = $(this).text();
                $("#disp").val(numeratore1 + operazione);
            }
            opUsata++;
        }

    });
    $("#canc").click(function () { // cancella tutto
        txt = "";
        numeratore1 = "";
        numeratore2 = "";
        operazione = "";
        opUsata = 0;
        $("#disp").val(txt);

    });


    $(".num").click(function () { //definesce la cifra premuta
        if (opUsata != 2) {
            if ($(this).text() === "0" && txt === "") {
                txt += "0";
            } else {
                if (txt === "0") {
                    txt = $(this).text();
                } else {
                    txt += $(this).text();
                }
            }
            $("#disp").val(txt);
        }
    });
});
