
var message = document.getElementById ('message');
var link = document.getElementById('link');
var btn = document.getElementById('button');
var form = document.getElementById('form');

const secretNumber = Math.floor(Math.random()*100);
const nombreEssaiMax = 10;
var nombreEssai = 0;

btn.onclick = function (){
    
    const input = document.getElementById('input');
    
    if (input.value != "") {
        if (input.value < secretNumber) {
             message.innerHTML = 'le nombre est trop petit !';
             message.style.color = '#999';
             message.style.fontSize = '15px';
         }else if(input.value > secretNumber) {
             message.innerHTML = 'le nombre est trop grand !';
             message.style.color = '#999';
             message.style.fontSize = '15px';
         }
 
         if (input.value == secretNumber) {
             message.innerHTML = 'Félicitatins!!! Vous avez trouver le nombre qui est :' + secretNumber;
             message.style.color = 'green';
             message.style.fontSize = '15px';
             form.style.display = 'none';
             link.style.display = 'flex';
         }  
         
         nombreEssai ++;
         if ( nombreEssai === nombreEssaiMax ) {
            message.innerHTML = 'Oups, vous avez atteint le nombre maximum d\'essais';
            message.style.color = 'red';
            form.style.display = 'none';
            link.style.display = 'flex';
         }
        } else{
         message.innerHTML = 'le champ est vide !';
         message.style.color = 'red';
     }
   
}