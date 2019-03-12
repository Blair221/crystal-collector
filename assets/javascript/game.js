$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var currentTotal = 0;
    var randomNumber = Math.floor(Math.random() * 121) + 19;
    var crystalValue = Math.floor(Math.random() * 13) + 1;
    console.log(crystalValue);
    console.log(randomNumber);
    
    $('.crystal').on('click', function (){
        alert('This crystal is worth ' + crystalValue);
    })
});