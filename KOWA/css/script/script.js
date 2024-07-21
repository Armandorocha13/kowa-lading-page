document.addEventListener("DOMContentLoaded", function() {
    const form = document.forms["loginForm"];
    const backButton = document.getElementById("backButton");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = form["email"].value;
        const password = form["senha"].value;

        if (email === "" || password === "") {
            alert("Email e senha são obrigatórios.");
            return false;
        }

        alert("Bem-vindo " + email + "!");
        form.submit(); 
    });

    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.history.back();
    });
});
