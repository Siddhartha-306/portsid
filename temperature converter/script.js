let celInput = document.querySelector('#cel > input')
let fahInput = document.querySelector('#fah > input')
let kelInput = document.querySelector('#kel > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100;
}


// celsius to fahrenheit and kelvin

celInput.addEventListener('input',function(){
    let cTemp = parseFloat(celInput.value)
    let fTemp = (cTemp*(9/5)) + 32;
    let kTemp = cTemp + 273.15

    fahInput.value = roundNumber(fTemp)
    kelInput.value = roundNumber(kTemp)
})

// fahrenheit to celcius and kelvin

fahInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celInput.value = roundNumber(cTemp)
    kelInput.value = roundNumber(kTemp)
})

// kelvin to celsius and fahrenheit

kelInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celInput.value = roundNumber(cTemp)
    fahInput.value = roundNumber(fTemp)
})

btn.addEventListener('click',()=>{
    celInput.value = ""
    fahInput.value = ""
    kelInput.value = ""
})