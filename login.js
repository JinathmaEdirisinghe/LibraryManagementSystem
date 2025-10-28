// login.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const regNo = document.getElementById("regNo");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting

    // Basic validation
    if (regNo.value.trim() === "" || password.value.trim() === "") {
      alert("Please fill in both Registration No and Password.");
      return;
    }

    // Dummy login check (you can replace this with real logic)
    if (regNo.value === "IT2021001" && password.value === "admin123") {
      alert("Login Successful! Redirecting to Dashboard...");
      window.location.href = "dashboard.html"; // link to your dashboard
    } else {
      alert("Invalid Registration No or Password. Please try again.");
    }
  });
});
