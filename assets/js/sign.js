const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


//switch between signup ana signin

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));



//to show or hide password    
function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
}

function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show();
    } else {
        pwShown = 0;
        hide();
    }
}, false);

//show or hide password
function show2() {
    var p = document.getElementById('pwd2');
    p.setAttribute('type', 'text');
}

function hide2() {
    var p = document.getElementById('pwd2');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eye2").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show2();
    } else {
        pwShown = 0;
        hide2();
    }
}, false);

