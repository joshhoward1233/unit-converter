let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("number")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} Meters = ${(baseValue * meterToFeet).toFixed(3)} Feet`
    volumeEl.textContent = `${baseValue} Liters = ${(baseValue * literToGallon).toFixed(3)} Gallons`
    massEl.textContent = `${baseValue} Kilograms = ${(baseValue * kiloToPound).toFixed(3)} Pounds` 
})
