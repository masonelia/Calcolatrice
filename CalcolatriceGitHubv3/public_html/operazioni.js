$(document).ready(function () {
    var txt = "";
    var numeratore1 = "";
    var numeratore2 = "";
    var operazioni = "";
    $("#disp").val("");


    function cancella() {
        txt = "";
        numeratore1 = "";
        numeratore2 = "";
        operazioni = "";
        $("#disp").val(txt);

    }



    function operatore(oper) {
          if (oper === "-" && txt === "") {
            txt += oper;
            $("#disp").val(txt);
        } else if (operazioni === "" && txt !== "" && txt !== "-") {
            numeratore1 = parseFloat(txt);
            operazioni = oper;
            $("#disp").val(txt + operazioni);
            txt = "";
        } else if (operazioni !== "") {
            operazioni = oper;
            $("#disp").val(numeratore1 + operazioni);
        }
    }

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

    $(document).keypress(function (ev) {
        var tasto = ev.which;
        if (tasto >= 48 && tasto <= 57) {
            numero(tasto - 48 + "");
        } else {
            switch (tasto) {
                case 13:
                    expr();
                    break;
                case 43:
                    operatore("+");
                    break;
                case 47:
                    operatore("/");
                    break;
                case 42:
                    operatore("*");
                    break;
                case 45:
                    operatore("-");
                    break;
            }
        }
    });



    function numero(num) {
        if (num === "0" && txt === "") {
            txt += "0";
        } else {
            if (txt === "0") {
                txt = num;
            } else {
                txt += num;
            }
        }
        $("#disp").val(txt);
    }

    $(".op").click(function () {
        operatore($(this).text());
    });
    $(".num").click(function (){
        numero($(this).text());
    });
	 $("#canc").click(function (){
        cancella();
    });
});

