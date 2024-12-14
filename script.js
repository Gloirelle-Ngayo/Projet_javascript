
var message = document.getElementById('message');
var link = document.getElementById('link');
var btn = document.getElementById('button');
var form = document.getElementById('form');
var divC = document.getElementById('divContainer2');
var btn1 = document.getElementById('button1');
var form1 = document.getElementById('form1');
var message1 = document.getElementById('message1');
var divC1 = document.getElementById('divContainer1');
var para = document.getElementById('para');

// Secret numbers and maximum attempts
const secretNumbers = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 100), Math.floor(Math.random() * 1000)];
const maxAttempts = [5, 10, 15];
var attempts = [0, 0, 0];

// Hide the second container initially
divC.style.display = 'none';

// Add event listener for the first button
btn1.addEventListener('click', selectValue);

// Function to select the value range
function selectValue() {
    const input1 = document.getElementById('input1');
    const selectedValue = parseInt(input1.value);

    if (!isNaN(selectedValue) && selectedValue > 0 && selectedValue <= 3) {
        divC1.style.display = 'none';
        divC.style.display = 'block';
        para.innerHTML = `Devinez un nombre entre 1 et ${Math.pow(10, selectedValue)}`;

        // Set up the guess button to use the correct function
        btn.onclick = function() { guessNumber(selectedValue - 1); };
    } else {
        para.innerHTML = selectedValue === "" ? 'Le champ est vide' : 'Valeur invalide!!';
        para.style.color = 'red';
    }
}

// Function to guess the number
function guessNumber(level) {
    const input = document.getElementById('input');
    const guessedNumber = parseInt(input.value);

    if (!isNaN(guessedNumber)) {
        if (guessedNumber < secretNumbers[level]) {
            message.innerHTML = 'le nombre est trop petit !';
        } else if (guessedNumber > secretNumbers[level]) {
            message.innerHTML = 'le nombre est trop grand !';
        } else {
            message.innerHTML = `Félicitations!!! Vous avez trouvé le nombre qui est : ${secretNumbers[level]}`;
            message.style.color = 'green';
            form.style.display = 'none';
            link.style.display = 'flex';
            return;
        }

        message.style.color = '#999';
        message.style.fontSize = '15px';
        attempts[level]++;

        if (attempts[level] === maxAttempts[level]) {
            message.innerHTML = 'Oups, vous avez atteint le nombre maximum d\'essais';
            message.style.color = 'red';
            form.style.display = 'none';
            link.style.display = 'flex';
        }
    } else {
        message.innerHTML = 'le champ est vide !';
        message.style.color = 'red';
    }
}

