$(document).ready(function () {
    console.log("Document Ready");
    $("#button").click(loginApi)
    $("#signup").click(signupTextChange)
});
function loginApi() {
    console.log("in login")
    const email = document
        .getElementById("email")
        .value.toLowerCase()
        .trim();
    const password = document.getElementById("password").value;
    if (email == "") {
        alert("No username entered");
    } else if (password == "") {
        alert("No password entered");
    } else {
        $.ajax({
            url: "https://reminderapp-be-production.up.railway.app/api/auth/login",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify({ "email": email, "password": password }),
            processData: false,
            success: function (res) {
                if (res?.token) {
                    localStorage.setItem("token", res.token);
                    window.location.replace("../main.html");
                }
            },
            error: function (xhr, ajaxOptions, error) {
                alert(xhr.responseJSON?.message);
            }
        });
    }
}

function signupApi() {
    console.log("in signup")
    const email = document
        .getElementById("email")
        .value.toLowerCase()
        .trim();
    const name = document
        .getElementById("name")
        .value.toLowerCase()
        .trim();
    const password = document.getElementById("password").value;
    if (email == "") {
        alert("No Email entered");
    } else if (password == "") {
        alert("No Password entered");
    } else if (name == "") {
        alert("No Name entered");
    } else {
        $.ajax({
            url: "https://reminderapp-be-production.up.railway.app/api/auth/signup",
            type: "POST",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({ "email": email, "password": password, "name": name }),
            processData: false,
            success: function (msg) {
                alert("Signup Success");
                signupTextChange()
            },
            error: function (xhr) {
                alert(xhr.responseJSON?.message);
            }
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
        $("#name").show();
        $("#button").unbind();
        $("#button").click(signupApi)
    } else {
        buttonText.innerHTML = 'Sign In'
        $("#name").hide();
        $("#button").unbind();
        $("#button").click(loginApi)
    }
}