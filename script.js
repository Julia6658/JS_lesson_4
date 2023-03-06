// Задание 1
const userName = document.querySelector('#userName');
const avatarLink = document.querySelector('#fileInput');
const textInput = document.getElementById('commentInput');
const form = document.querySelector('#form');
const imgField = document.querySelector('#imgField > img');
const nameField = document.querySelector('#nameField');
const textField = document.querySelector('#commentField');


userName.addEventListener("focusout", function() {
    let nameText = userName.value.toLowerCase();
    let words = nameText.split(" "); 

    for (let i = 0; i <  words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    this.value = words.join(" ");
});

function checkSpam(textInput) {
    let str = textInput.value;
    let newString = str.replace(/viagra|XXX/i, "***");
    textField.textContent = newString;   
   
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    nameField.textContent = userName.value;
    imgField.setAttribute('src', avatarLink.value);
    checkSpam(textInput);
});

// Задание 2

let str = "<p>Теги</p> <h1>Теги</h1> <h3>Теги</h3> <div>Теги</div> <span>Теги</span>"
function deleteTags(str) {
    let regex = /( |<([^>]+)>)/ig;
    return newStr = str.replace(regex, " ");
}
document.write(deleteTags(str));