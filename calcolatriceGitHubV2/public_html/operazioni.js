$(document).ready(function () {
    var txt = "";
    var numeratore1=  "";
    var numeratore2 = "";
    var operazioni = "";
    $("#disp").val("");
   
    
    $("#canc").click(function () {
		txt = "";
		numeratore1 = "";
		numeratore2 = "";
		operazioni = "";
		$("#disp").val(txt);

});

    


    $(".op").click(function () {
        if ($(this).text() === "-" && txt === "") {
            txt += $(this).text();
            $("#disp").val(txt);
        } else if (operazioni === "" && txt !== "" && txt !== "-") {
            numeratore1 = parseFloat(txt);
            operazioni = $(this).text();
            $("#disp").val(txt + operazioni);
            txt = "";
        } else if (operazioni !== "" && txt === "") {
            operazioni = $(this).text();
            $("#disp").val(numeratore1 + operazioni);
        } else if (numeratore1 !== "") {
            expr();
            operazioni = $(this).text();
            $("#disp").val(numeratore1 + operazioni);
            txt = "";
        }
    });

    $("#Uguale").click(expr);
    
    
    function expr() {
        if (txt !== "" && operazioni !== "") {
            numeratore2 = parseFloat(txt);
            switch (operazioni) {
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
            numeratore1 = txt;
            numeratore2 = "";
            operazioni = "";
            txt = "";
        }
    }

    $(".num").click(function () {
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
    });
    
    });
