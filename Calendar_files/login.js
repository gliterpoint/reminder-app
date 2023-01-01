$(document).ready(function () {
    console.log("Document Ready");
    $("#button").click(loginApi)
    $("#signup").click(signupTextChange)
});
function loginApi() {
    console.log("in login")
    const username = document
        .getElementById("username")
        .value.toLowerCase()
        .trim();
    const password = document.getElementById("password").value;
    if (username == "") {
        alert("No username entered");
    } else if (password == "") {
        alert("No password entered");
    } else {
        $.ajax({
            url: "http://localhost:4000/api/auth/login",
            type: "POST",
            data: { email: username, password },
            processData: false,
            success: function (msg) {
                alert("Login Success");
            },
        });
    }
}

function signupApi() {
    console.log("in signup")
    const username = document
        .getElementById("username")
        .value.toLowerCase()
        .trim();
    const password = document.getElementById("password").value;
    if (username == "") {
        alert("No username entered");
    } else if (password == "") {
        alert("No password entered");
    } else {
        $.ajax({
            url: "http://localhost:4000/api/auth/signup",
            type: "POST",
            data: { email: username, password },
            processData: false,
            success: function (msg) {
                alert("Signup Success");
            },
        });
    }
}

function signupTextChange() {
    let title = document.getElementById('title')
    let linkText = document.getElementById('signup')
    let buttonText = document.getElementById('buttonText')
    if (title.innerHTML.toLocaleLowerCase() == 'sign in') {
        title.innerHTML = 'Sign Up'
    } else {
        title.innerHTML = 'Sign In'
    }
    if (linkText.innerHTML.toLocaleLowerCase() == 'sign in') {
        linkText.innerHTML = 'Sign Up'
    } else {
        linkText.innerHTML = 'Sign In'
    }
    if (buttonText.innerHTML.toLocaleLowerCase() == 'sign in') {
        buttonText.innerHTML = 'Sign Up'
        $("#button").unbind();
        $("#button").click(signupApi)
    } else {
        buttonText.innerHTML = 'Sign In'
        $("#button").unbind();
        $("#button").click(loginApi)
    }
}