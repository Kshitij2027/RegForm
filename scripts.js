// validation.js
function validateForm(event) {
    event.preventDefault();

    let firstName = document.getElementById("first-name").value;
    let fatherName = document.getElementById("father-name").value;
    let motherName = document.getElementById("mother-name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let dob = document.getElementById("DOB").value;
    let address = document.getElementById("address").value;
    let bloodGroup = document.getElementById("blood-group").value;
    let department = document.querySelector('input[name="department"]:checked');
    let skills = document.querySelectorAll('input[type="checkbox"]:checked');
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (skills.length != 4) {
        alert("Please select exactly 4 skills.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Phone number validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    document.querySelector('form').submit();
}

window.onload = function() {
    document.querySelector('form').addEventListener('submit', validateForm);
}
