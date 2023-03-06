let userName = document.querySelector('#userName');
let avatarLink = document.querySelector('#fileInput');
let textInput = document.getElementById('commentInput');
let form = document.querySelector('#form');
let imgField = document.querySelector('#imgField > img');
let nameField = document.querySelector('#nameField');
let textField = document.querySelector('#commentField');


userName.addEventListener("focusout", function() {
    let nameText = userName.value.toLowerCase();
    console.log(nameText);
    let words = nameText.split(" "); 
    console.log(words);

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


/*
let str = "<p>ttt</p>"
function deleteTags(str) {
    let newStr = str.replace("<p>", "");

    return newStr
}
console.log(deleteTags(str));*/