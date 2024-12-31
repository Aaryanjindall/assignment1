// JavaScript for handling form submission and storing data in localStorage
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const age = document.getElementById("age").value.trim();

    // Validation
    if (!name || !email || !password || !dob || !gender || !age) {
        alert("Please fill in all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Save data to localStorage
    const userData = { name, email, dob, gender, age };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Display success message and clear the form
    alert("Registration successful! Your data has been saved.");
    document.getElementById("registrationForm").reset();
});


// Particle Creation
const particles = document.getElementById("particles");
for (let i = 0; i < 100; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";
    particle.style.animationDuration = Math.random() * 10 + 5 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";
    particles.appendChild(particle);
}