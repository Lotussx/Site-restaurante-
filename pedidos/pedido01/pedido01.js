var check01 = document.getElementById("radio01");
var check02 = document.getElementById("radio02");
var check03 = document.getElementById("radio03");
var check04 = document.getElementById("radio04");
var check05 = document.getElementById("radio05");
const form2 = document.getElementById("form2Container");

var delivery = "a";
var opcPagamento = "a";

$(document).ready(function () {


    $("#radio01").click(function () {

        if (check01.checked == true) {
            form2.style.display = "block";
            delivery = "Sim";
        }
    })

    $("#radio02").click(function () {
        if (check02.checked == true) {
            form2.style.display = "none"
            delivery = 'Não'
        }
    })

    $("#radio03").click(function () {

        if (check03.checked == true) {
            opcPagamento = "Dinheiro";
        }
    })

    $("#radio04").click(function () {
        if (check04.checked == true) {
            opcPagamento = 'Pix'
        }
    })

    $("#radio05").click(function () {

        if (check05.checked == true) {
            opcPagamento = "Cartão";
        }
    })

})




var btn01 = document.getElementById("btn01");
console.log(btn01)
var btn02 = document.getElementById("btn02");
var result = document.getElementById("numAtual");
var result2 = document.getElementById("precoAtual");
console.log(result2)

var numeroAtual = 0;
var precoAtual = parseFloat(result2.innerHTML);
precoAtual.toFixed(2);

console.log(precoAtual.toFixed(2))

console.log(result.innerHTML)


btn01.addEventListener('click', function () {
    numeroAtual = numeroAtual - 1;
    if (numeroAtual < 0) {
        numeroAtual = 0
    }
    result.innerHTML = numeroAtual;
    result2.innerHTML = precoAtual * numeroAtual
    let numDecimal = precoAtual.toFixed(4) * numeroAtual;
    result2.innerHTML = numDecimal.toFixed(2)
});

btn02.addEventListener('click', function () {
    numeroAtual = numeroAtual + 1;
    result.innerHTML = numeroAtual;
    let numDecimal = precoAtual.toFixed(4) * numeroAtual;
    result2.innerHTML = numDecimal.toFixed(2);

});

document.querySelector('#submit').addEventListener('click', function () {
    var nome = document.querySelector('#nome').value;
    var obsPedido = document.querySelector('#obsPedido').value;
    var cep = document.querySelector('#cep').value;
    var rua = document.querySelector('#rua').value;
    var numero = document.querySelector('#numero').value;
    var cidade = document.querySelector('#cidade').value;
    var bairro = document.querySelector('#bairro').value;
    var obsEntrega = document.querySelector('#obsEntrega').value;
    var qnt = document.querySelector('#numAtual');
    var preco = document.querySelector('#precoAtual');

    var qnt1 = qnt.innerHTML;
    var preco1 = preco.innerHTML;

    console.log(preco1)

    if (delivery == "Sim") {
        console.log("sla")
        let url = ("https://api.whatsapp.com/send?phone=5581931437844&text= *PEDIDO: Lanche 01* %0A%0A==================================%0A*NOME:* " + nome + "%0A*OBS. DO PEDIDO:* " + obsPedido + "%0A*QUANTIDADE:* " + qnt1  + "%0A*FORMA DE PAGAMENTO:* " + opcPagamento + "%0A================================== %0A%0A*DELIVERY?* " + delivery + "%0A*CEP:* " + cep + "%0A*RUA:* " + rua + "%0A*NÚMERO:* " + numero + "%0A*CIDADE:* " + cidade + "%0A*BAIRRO:* " + bairro + "%0A*OBS. ENTREGA:* " + obsEntrega + "%0A%0A*TOTAL: R$* " + preco1);
        var urlGblobal = url;
        window.open(urlGblobal);
    } else {
        urlGblobal = ("https://api.whatsapp.com/send?phone=5581991437844&text= *PEDIDO: Lanche 01* %0A%0A==================================%0A*NOME:* " + nome + "%0A*OBS. DO PEDIDO:* " + obsPedido + "%0A*QUANTIDADE:* " + qnt1  + "%0A*FORMA DE PAGAMENTO:* " + opcPagamento + "%0A================================== %0A%0A*DELIVERY?* " + delivery + "%0A%0A*TOTAL: R$* " + preco1);
        window.open(urlGblobal);
    }
});
