let date = new Date()

// let annoCorrente= 2022;
// let annoNascita= 1992;

let input = document.getElementById('data-di-nascita')
let display = document.getElementById('birth-date')
let annoCorrente = date.getFullYear()


function calcoloEta() {

    let annoNascita = input.value
    let tuaEta = annoCorrente -= annoNascita
    display.innerHTML= `Hai: ${tuaEta} anni`


     if (tuaEta <= 17) {
      alert('sei troppo piccolo, mi spiace')
     }
    
     else if (tuaEta >= 18 && tuaEta <=24){
       document.getElementById('id').innerHTML='Sei proprio un ometto'
     }


}


