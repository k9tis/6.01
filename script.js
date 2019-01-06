//var randomNumber = Math.random();
var slider =document.getElementById("slider")
var min=document.getElementById("min")
var max=document.getElementById("max")

function getRandomInt(min, max)
{
  var= Math.floor(Math.random() * (max - min + 1)) + min;
}
