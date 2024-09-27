// var cont = 0;
// function loopSlider() {
//     var xx = setInterval(function () {
//         switch (cont) {
//             case 0: {
//                 $("#slider-1").fadeOut(400);
//                 $("#slider-2").delay(400).fadeIn(400);
//                 $("#sButton1").removeClass("bg-purple-800");
//                 $("#sButton2").addClass("bg-purple-800");
//                 cont = 1;

//                 break;
//             }
//             case 1:
//                 {

//                     $("#slider-2").fadeOut(400);
//                     $("#slider-1").delay(400).fadeIn(400);
//                     $("#sButton2").removeClass("bg-purple-800");
//                     $("#sButton1").addClass("bg-purple-800");

//                     cont = 0;

//                     break;
//                 }


//         }
//     }, 8000);

// }

// function reinitLoop(time) {
//     clearInterval(xx);
//     setTimeout(loopSlider(), time);
// }



// function sliderButton1() {

//     $("#slider-2").fadeOut(400);
//     $("#slider-1").delay(400).fadeIn(400);
//     $("#sButton2").removeClass("bg-purple-800");
//     $("#sButton1").addClass("bg-purple-800");
//     reinitLoop(4000);
//     cont = 0

// }

// function sliderButton2() {
//     $("#slider-1").fadeOut(400);
//     $("#slider-2").delay(400).fadeIn(400);
//     $("#sButton1").removeClass("bg-purple-800");
//     $("#sButton2").addClass("bg-purple-800");
//     reinitLoop(4000);
//     cont = 1

// }

// $(window).ready(function () {
//     $("#slider-2").hide();
//     $("#sButton1").addClass("bg-purple-800");


//     loopSlider();

// });

// Função para calcular o IMC
function calculateIMC() {
    // Obtém os valores de peso e altura
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    // Verifica se os valores são válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("imcResult").innerText = "Por favor, insira valores válidos.";
        return;
    }

    // Calcula o IMC
    const imc = weight / (height * height); 

    //seleciona o elemento de resultado
    const resultElement = document.getElementById("imcResult");

    //define a cor e o texto de acordo com o valor do IMC
    if (imc < 18.5){
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)}(abaixo do peso)`;
        resultElement.className = "imc-abaixo";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)}(peso normal)`;
        resultElement.className = "imc-normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)}(sobrepeso)`;
        resultElement.className = "imc-sobrepeso";
    } else {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)}(Obesidade)`;
        resultElement.className = "imc-obesidade";
    }
}

