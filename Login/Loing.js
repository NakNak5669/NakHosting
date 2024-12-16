function login() {
    const validEmail = "NakNak@gmail.com";
    const validPassword = "5669";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === validEmail && password === validPassword) {
        alert("Login successful!");
        // Save login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to `webnew.html`
        window.location.href = "../index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}
